'use strict';

let {
    compile
} = require('..');
let vm = require('vm');
let assert = require('assert');

let equalPfcTranslate = (source, target, lang = 'pfc') => {
    assert.deepEqual(compile(source, lang, {
        pureMiddleCode: true
    }), target);
};

let equalPfcTranslateMap = (map, lang) => {
    for (let name in map) {
        equalPfcTranslate(name, map[name], lang);
    }
};

let equalJsJson = (jsonObject) => {
    let jsCode = compile(JSON.stringify(jsonObject), 'js');
    let script = new vm.Script(jsCode);
    let v = script.runInContext(vm.createContext({
        console,
        require
    }));

    assert.deepEqual(v, jsonObject);
};

let equalJsApp = (nencCode, result, options) => {
    let jsCode = compile(nencCode, 'js', options);
    let script = new vm.Script(jsCode);
    let v = script.runInContext(vm.createContext({
        console,
        require
    }));
    assert.equal(v, result);
};

module.exports = {
    equalPfcTranslate,
    equalPfcTranslateMap,
    equalJsApp,
    equalJsJson
};
