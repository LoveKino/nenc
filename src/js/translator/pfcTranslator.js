'use strict';

let template = require('lodash.template');
let {
    parse
} = require('bnfer');
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
        let tarProduction = tar[0];
        if (sameProduction(tarProduction, production)) {
            productionTranslater = tar[1];
        }
    }
    if (productionTranslater === null) {
        throw new Error(`missing production translator for ${JSON.stringify(production)}`);
    }

    return productionTranslater;
};

let sameProduction = (p1, p2) => {
    if (p1[0] !== p2[0]) return false;
    let body1 = p1[1],
        body2 = p2[1];
    if (body1.length !== body2.length) return false;

    for (let i = 0; i < body1.length; i++) {
        if (body1[i] !== body2[i]) return false;
    }

    return true;
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
