'use strict';

let template = require('lodash.template');
let {
    parse
} = require('bnfer');
let jsoneq = require('cl-jsoneq');
let pfcsource = require('../../../grammer-host/grammer-js/translator/pfc');
let pfcModuleWrapper = require('../../../grammer-host/grammer-js/translator/pfc_module_wrapper.tpl.js');

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

let wrapperTplFun = template(pfcModuleWrapper);

let wrapModule = (modulePath, moduleCode) => {
    return wrapperTplFun({
        modulePath,
        moduleCode
    });
};

module.exports = {
    getTranslateFun,
    wrapModule
};
