'use strict';

let {
    parse
} = require('bnfer');

let pfcsource = require('../../../grammer-js/translator/pfc');

let pfctarget = [];

for (let name in pfcsource) {
    let value = pfcsource[name];
    pfctarget.push([
        parse(name).productions[0], value
    ]);
}

module.exports = pfctarget;
