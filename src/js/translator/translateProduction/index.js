'use strict';

let template = require('lodash.template');
let {
    getTranslateFun
} = require('../pfcTranslator');

let translateProdcution = (production, midNode, target, optTranslator) => {
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

    return template(translator)(params);
};

module.exports = translateProdcution;
