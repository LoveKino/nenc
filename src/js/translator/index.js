'use strict';

let template = require('lodash.template');
let getTranslateFun = require('./pfcTranslator');
let libraryMap = require('./library');

let defaultExportNameMap = {
    'c': 'main'
};

/**
 * translate ast to target middle code
 */
module.exports = (target, opts = {}) => {
    let {
        systemSource, joinTpl, optTranslator
    } = libraryMap[target] || {};

    let tplFun = template(joinTpl);

    let translate = (production, midNode) => {
        let productionTranslater = getTranslateFun(production);
        let code = translateProdcution(productionTranslater, midNode, target, optTranslator);
        midNode.values = midNode.values || [];
        midNode.values[target] = code;
    };

    let getCode = (ast) => {
        let middleCode = ast.children[0].values[target];

        if (opts.pureMiddleCode) return middleCode;

        return tplFun({
            system_code: opts.system_code || systemSource,
            custom_code: opts.custom_code || '',
            middle_code: middleCode,
            exportName: opts.exportName || defaultExportNameMap[target]
        });
    };

    return {
        translate,
        getCode
    };
};

let translateProdcution = (productionTranslater, midNode, target, optTranslator) => {
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

    return template(translator)(params);
};
