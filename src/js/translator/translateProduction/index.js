'use strict';

let pfcCompiler = require('pfc-compiler');
let {
    getTranslateFun
} = require('../pfcTranslator');

module.exports = (production, midNode, target, optTranslator) => {
    // get translate function
    let productionTranslater = getTranslateFun(production);

    // collect child's target codes as params
    // TODO rearrange them
    let params = {};
    let children = midNode.children;

    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        let childValue = '';
        if (child.type === 'terminal') {
            childValue = child.token.text;
        } else {
            childValue = child.values[target];
        }

        params[`$${i + 1}`] = childValue;
    }

    // TODO replace productionTranslater for specific optimazation to target language

    let translator = productionTranslater;
    if (optTranslator && optTranslator[translator]) {
        translator = optTranslator[translator];
    }

    let code = pfcCompiler.compile(productionTranslater)(Object.assign(params, {
        sys_statements: (statements) => `sys_statements(${statements})`,
        sys_void: () => 'sys_void()',
        sys_pair: (v1, v2) => `sys_pair(${v1}, ${v2})`,
        sys_exp: (v) => `sys_exp(${v})`,
        sys_import: (v1, v2) => `sys_import(${v1}, ${v2})`,
        sys_variable: (v) => `sys_variable("${v}")`,
        sys_letBinding: (v) => `sys_letBinding(${v})`,
        sys_data: (v) => `sys_data(${v})`,
        sys_application: (fun, params) => `sys_application(${fun}, ${params})`,
        sys_ordinary_abstraction: (variables, body) => `sys_ordinary_abstraction(${variables}, ${body})`,
        sys_condition: (c, p1, p2) => `sys_condition(${c}, ${p1}, ${p2})`,
        sys_guarded_abstraction: (v) => `sys_guarded_abstraction(${v})`,
        sys_guarded_abstraction_line: (v1, v2) => `sys_guarded_abstraction_line(${v1}, ${v2})`,
        sys_string: (v) => `sys_string(${v})`,
        sys_number: (v) => `sys_number("${v}")`,
        sys_object: (v) => `sys_object(${v})`,
        sys_null: () => 'sys_null()',
        sys_true: () => 'sys_true()',
        sys_false: () => 'sys_false()',
        sys_array: (v) => `sys_array(${v})`
    }));

    midNode.values = midNode.values || [];
    midNode.values[target] = code;
};
