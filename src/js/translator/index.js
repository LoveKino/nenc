'use strict';

let jsoneq = require('cl-jsoneq');
let template = require('lodash.template');
let pfcTranslator = require('../../../grammer-js/translator/pfc');
let libraryMap = require('./library');

/**
 * translate ast to target middle code
 */
module.exports = (target, opts = {}) => {
    let {
        systemSource, joinTpl
    } = libraryMap[target] || {};

    let tplFun = template(joinTpl);

    let translate = (production, midNode) => {
        let prodcutionTranslater = getTranslateFun(production, pfcTranslator);
        let code = translateProdcution(prodcutionTranslater, midNode, target);
        midNode.values = midNode.values || [];
        midNode.values[target] = code;
    };

    let getCode = (ast) => {
        let middleCode = ast.children[0].values[target];

        if (opts.pureMiddleCode) return middleCode;

        return tplFun({
            system_code: opts.system_code || systemSource,
            custom_code: opts.custom_code || '',
            middle_code: middleCode
        });
    };

    return {
        translate,
        getCode
    };
};

let translateProdcution = (prodcutionTranslater, midNode, target) => {
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

    return template(prodcutionTranslater)(params);
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
