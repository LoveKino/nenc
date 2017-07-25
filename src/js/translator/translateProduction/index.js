'use strict';

let pfcCompiler = require('pfc-compiler');
let {
    generateProductionId
} = require('bnfer');
let pfcsource = require('../../../../grammer-host/grammer-js/translator/pfc');

let getTranslateFun = (production) => {
    let productionTranslater = pfcsource[generateProductionId(production)];

    if (productionTranslater === null) {
        throw new Error(`missing production translator for ${JSON.stringify(production)}`);
    }

    return productionTranslater;
};

let translatorMap = {
    sys_statements: (statements) => {
        for (let i = 0; i < statements.length; i++) {
            let statement = statements[i];

            // rewrite let binding
            if (statement.type === 'letBinding') {
                let {
                    variableDefList
                } = statement;

                let restStatements = translatorMap.sys_statements(statements.slice(i + 1));

                for (let j = 0; j < variableDefList.length; j++) {
                    let [variableName, definition] = variableDefList[j];

                    restStatements = {
                        type: 'application',
                        fun: {
                            type: 'abstraction',
                            variables: [{
                                variableName
                            }],
                            body: restStatements
                        },
                        params: [definition]
                    };
                }

                return {
                    type: 'statements',
                    statements: statements.slice(0, i).concat([restStatements])
                };
            } else if (statement.type === 'import') {
                let {
                    modulePath,
                    variable
                } = statement;

                let restStatements = translatorMap.sys_statements(statements.slice(i + 1));

                let importWrapperStatement = {
                    type: 'application',
                    fun: {
                        type: 'abstraction',
                        body: restStatements,
                        variables: [variable]
                    },
                    params: [{
                        type: 'application',
                        fun: {
                            type: 'variable',
                            variableName: 'std::getModule'
                        },
                        params: [modulePath]
                    }]
                };

                return {
                    type: 'statements',
                    statements: statements.slice(0, i).concat([importWrapperStatement])
                };
            }
        }

        return {
            type: 'statements',
            statements
        };
    },
    sys_exp: (expression) => {
        return {
            type: 'expression',
            expression
        };
    },
    sys_import: (modulePath, variable) => {
        return {
            type: 'import',
            modulePath,
            variable
        };
    },

    sys_variable: (variableName) => {
        return {
            type: 'variable',
            variableName
        };
    },
    sys_letBinding: (variableDefList) => {
        return {
            type: 'letBinding',
            variableDefList
        };
    },
    sys_application: (fun, params) => {
        return {
            type: 'application',
            fun,
            params
        };
    },

    sys_abstraction: (variables, lines) => {
        let body = { // when no match, throw expception
            type: 'application',
            fun: {
                type: 'variable',
                variableName: 'std::error'
            },
            params: ['Fail to match function.']
        };

        for (let i = lines.length - 1; i >= 0; i--) {
            let expList = lines[i];
            let expBody = expList[0];
            let expBodyConditionsExp;
            if (expList.length > 1) {
                expBodyConditionsExp = andExps(expList.slice(1));
            } else {
                expBodyConditionsExp = {
                    type: 'true'
                };
            }

            body = {
                type: 'application',
                fun: {
                    type: 'variable',
                    variableName: 'std::if',
                },
                params: [expBodyConditionsExp, expBody, body]
            };
        }

        return {
            type: 'abstraction',
            variables,
            body
        };
    },

    sys_condition: (c, p1, p2) => {
        return {
            type: 'application',
            fun: {
                type: 'variable',
                variableName: 'std::if'
            },
            params: [c, p1, p2]
        };
    },

    // data
    sys_string: (value) => {
        return {
            type: 'string',
            value
        };
    },
    sys_number: (value) => {
        return {
            type: 'number',
            value
        };
    },
    sys_object: (value) => {
        return {
            type: 'object',
            value
        };
    },
    sys_array: (value) => {
        return {
            type: 'array',
            value
        };
    },
    sys_null: () => {
        return {
            type: 'null'
        };
    },
    sys_true: () => {
        return {
            type: 'true'
        };
    },
    sys_false: () => {
        return {
            type: 'false'
        };
    }
};

let andExps = (exps) => {
    let prev = exps[0];
    for (let i = 1; i < exps.length; i++) {
        prev = {
            type: 'application',
            fun: {
                type: 'variable',
                variableName: '&&'
            },
            params: [prev, exps[i]]
        };
    }

    return prev;
};

module.exports = (production, midNode, optTranslator) => {
    // get translate function
    let productionTranslater = getTranslateFun(production);

    let params = {};
    let children = midNode.children;

    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        let childValue = '';
        if (child.type === 'terminal') {
            childValue = child.token.text;
        } else {
            childValue = child.value;
        }

        params[`$${i + 1}`] = childValue;
    }

    let translator = productionTranslater;
    if (optTranslator && optTranslator[translator]) {
        translator = optTranslator[translator];
    }

    let ast = pfcCompiler.parseStrToAst(productionTranslater);

    let context = Object.assign(params, utilSandbox, translatorMap);

    pfcCompiler.checkASTWithContext(ast, context);

    let obj = pfcCompiler.executeAST(ast, context);

    midNode.value = obj;
};

let utilSandbox = {
    empty: () => [],
    single: (v) => [v],
    concat: (list1, list2) => list1.concat(list2),
    stringContent: (str) => str.substring(1, str.length - 1)
};
