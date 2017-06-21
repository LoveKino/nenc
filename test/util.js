'use strict';

let {
    compile, compileFile
} = require('..');
let vm = require('vm');
let assert = require('assert');

let log = console.log; // eslint-disable-line

let equalPfcTranslate = (source, target, lang = 'pfc') => {
    let code = compile(source, lang, {
        pureMiddleCode: true
    });
    assert.deepEqual(code, target);
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
    try {
        let script = new vm.Script(jsCode);
        let v = script.runInContext(vm.createContext({
            console,
            require
        }));
        assert.deepEqual(v, result);
    } catch (err) {
        log(`[nenc code] ${nencCode}`);
        log(`[js code] ${jsCode}`);
        throw err;
    }
};

let equalJsFileApp = (filePath, result, options) => {
    return compileFile(filePath, 'js', options).then((jsCode) => {
        try {
            let script = new vm.Script(jsCode);
            let v = script.runInContext(vm.createContext({
                console,
                require
            }));
            assert.equal(v, result);
        } catch (err) {
            log(`[js code] ${jsCode}`);
            throw err;
        }
    });
};

module.exports = {
    equalPfcTranslate,
    equalPfcTranslateMap,
    equalJsApp,
    equalJsJson,
    equalJsFileApp
};
