'use strict';

let {
    compile
} = require('..');

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

module.exports = {
    equalPfcTranslate,
    equalPfcTranslateMap
};
