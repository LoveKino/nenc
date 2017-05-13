'use strict';

let translatorMap = require('./translateMap');
let jsoneq = require('cl-jsoneq');
let template = require('lodash.template');

/**
 * translate ast to target code
 */
module.exports = (target) => {
    let targetTranslator = translatorMap[target];

    let translate = (production, midNode) => {
        let prodcutionTranslater = getTranslateFun(production, targetTranslator);
        let code = translateProdcution(prodcutionTranslater, midNode, target);
        midNode.values = midNode.values || [];
        midNode.values[target] = code;
    };

    let getCode = (ast) => {
        return ast.children[0].values[target];
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
