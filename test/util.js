'use strict';

let {
    compile
} = require('..');

let assert = require('assert');

let equalPfcTranslate = (source, target) => {
    assert.deepEqual(compile(source, 'pfc', {
        pureMiddleCode: true
    }), target);
};

let equalPfcTranslateMap = (map) => {
    for (let name in map) {
        equalPfcTranslate(name, map[name]);
    }
};

module.exports = {
    equalPfcTranslate,
    equalPfcTranslateMap
};
