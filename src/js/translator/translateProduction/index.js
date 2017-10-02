'use strict';

let pfcCompiler = require('pfc-compiler');
let {
    generateProductionId
} = require('bnfer');
let pfcstatements = require('../../../grammer-host/grammer-js/translator/pfc');

let getTranslateFun = (production) => {
    let productionTranslater = pfcstatements[generateProductionId(production)];

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

                    restStatements = translatorMap.sys_application(translatorMap.sys_abstraction(
                        //variables
                        [translatorMap.sys_variable(variableName)],

                        // bodyExps
                        [
                            [restStatements]
                        ]
                    ), [definition]);
                }
                // re-arrage statements
                statements = statements.slice(0, i).concat([restStatements]);
                break;
            } else if (statement.type === 'import') {
                let {
                    modulePath,
                    variable
                } = statement;

                let restStatements = translatorMap.sys_statements(statements.slice(i + 1));

                let importWrapperStatement = translatorMap.sys_application(
                    translatorMap.sys_abstraction(
                        //variables
                        [variable],
                        //bodyExps
                        [
                            [restStatements]
                        ]
                    ), [callNencStdMethod('std::getModule', modulePath)]
                );

                // re-arrange statements
                statements = statements.slice(0, i).concat([importWrapperStatement]);
                break;
            }
        }

        return callNencStdMethod('std::statements', translatorMap.sys_array(statements));
    },

    sys_exp: (expression) => {
        return expression;
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

    // lines = [[expBody...]]
    sys_abstraction: (variables, lines) => {
        // when no match, throw expception
        let body = callNencStdMethod('std::error', translatorMap.sys_string('Fail to match function.'));

        for (let i = lines.length - 1; i >= 0; i--) {
            let expList = lines[i];
            let expBody = expList[0];
            let expBodyConditionsExp;
            if (expList.length > 1) {
                expBodyConditionsExp = andExps(expList.slice(1));
            } else {
                expBodyConditionsExp = translatorMap.sys_true();
            }

            body = translatorMap.sys_application(translatorMap.sys_variable('std::if'), [expBodyConditionsExp, expBody, body]);
        }

        return {
            type: 'abstraction',
            variables,
            body
        };
    },

    sys_condition: (c, p1, p2) => {
        return callNencStdMethod('std::if', c, p1, p2);
    },

    // data

    // raw data
    sys_raw: (value) => {
        return {
            type: 'raw',
            value
        };
    },

    sys_string: (value) => {
        return callNencStdMethod('std::string', translatorMap.sys_raw(value));
    },
    sys_number: (value) => {
        return callNencStdMethod('std::number', translatorMap.sys_raw(value));
    },
    sys_object: (value) => {
        return callNencStdMethod('std::object', translatorMap.sys_array(value));
    },
    sys_array: (value) => {
        return {
            type: 'array',
            value
        };
    },
    sys_null: () => {
        return callNencStdMethod('null');
    },
    sys_true: () => {
        return callNencStdMethod('true');
    },
    sys_false: () => {
        return callNencStdMethod('false');
    }
};

let callNencStdMethod = (name, ...params) => {
    return translatorMap.sys_application(translatorMap.sys_variable(name), params);
};

let andExps = (exps) => {
    let prev = exps[0];
    for (let i = 1; i < exps.length; i++) {
        translatorMap.sys_application(translatorMap.sys_variable('&&'), [prev, exps[i]]);
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
    trim: (v) => v.trim(),
    concat: (list1, list2) => list1.concat(list2),
    stringContent: (str) => JSON.parse(str) // wipe ""
};
