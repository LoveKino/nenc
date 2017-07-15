'use strict';

let pfcCompiler = require('pfc-compiler');
let {
    getTranslateFun
} = require('../pfcTranslator');

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
    sys_abstraction: (variables, body) => {
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

module.exports = (production, midNode, optTranslator) => {
    // get translate function
    let productionTranslater = getTranslateFun(production);

    // TODO rearrange them
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

    let obj = pfcCompiler.compile(productionTranslater)(Object.assign(params, {
        empty: () => [],
        single: (v) => [v],
        concat: (list1, list2) => list1.concat(list2),
        stringContent: (str) => str.substring(1, str.length - 1)
    }, translatorMap));

    midNode.value = obj;
};
