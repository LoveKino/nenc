'use strict';

let jsoneq = require('cl-jsoneq');
let template = require('lodash.template');
let pfcTranslator = require('./pfcTranslator');
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
        let prodcutionTranslater = getTranslateFun(production, pfcTranslator);
        let code = translateProdcution(prodcutionTranslater, midNode, target, optTranslator);
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

let translateProdcution = (prodcutionTranslater, midNode, target, optTranslator) => {
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

    // TODO replace prodcutionTranslater for specific optimazation to target language

    let translator = prodcutionTranslater;
    if (optTranslator && optTranslator[translator]) {
        translator = optTranslator[translator];
    }

    return template(translator)(params);
};

let getTranslateFun = (production, targetTranslator) => {
    let prodcutionTranslater = null;

    // find production translator
    for (let i = 0; i < targetTranslator.length; i++) {
        let tar = targetTranslator[i];
        if (jsoneq(tar[0], production)) {
            prodcutionTranslater = tar[1];
        }
    }
    if (!prodcutionTranslater) {
        throw new Error(`missing production translator for ${JSON.stringify(production)}`);
    }

    return prodcutionTranslater;
};
