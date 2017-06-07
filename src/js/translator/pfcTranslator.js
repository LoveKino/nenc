'use strict';

let {
    parse
} = require('bnfer');
let jsoneq = require('cl-jsoneq');
let pfcsource = require('../../../grammer-js/translator/pfc');

let pfctarget = [];

for (let name in pfcsource) {
    let value = pfcsource[name];
    pfctarget.push([
        parse(name).productions[0], value
    ]);
}

let getTranslateFun = (production) => {
    let productionTranslater = null;

    // find production translator
    for (let i = 0; i < pfctarget.length; i++) {
        let tar = pfctarget[i];
        if (jsoneq(tar[0], production)) {
            productionTranslater = tar[1];
        }
    }
    if (productionTranslater === null) {
        throw new Error(`missing production translator for ${JSON.stringify(production)}`);
    }

    return productionTranslater;
};

module.exports = getTranslateFun;
