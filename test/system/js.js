'use strict';

let {
    compile
} = require('../..');
let assert = require('assert');
let vm = require('vm');

let equalJson = (jsonObject) => {
    let jsCode = compile(JSON.stringify(jsonObject), 'js');
    let script = new vm.Script(jsCode);
    let v = script.runInContext(vm.createContext({
        console
    }));

    assert.deepEqual(v, jsonObject);
};

let equalApp = (nencCode, result) => {
    let jsCode = compile(nencCode, 'js');
    let script = new vm.Script(jsCode);
    let v = script.runInContext(vm.createContext({
        console
    }));
    assert.equal(v, result);
};

describe('system.js', () => {
    it('base', () => {
        equalJson(1);
        equalJson(null);
        equalJson('abc');
        equalJson(true);
        equalJson(false);
        equalJson({
            a: 1
        });
        equalJson([2, 4]);
        equalJson({
            a: {
                b: {
                    c: [1, 2, 3]
                }
            }
        });
    });

    it('meta', () => {
        equalApp('+(1, 2)', 3);
        equalApp('-(1, 2)', -1);
    });

    it('compose meta method', () => {
        equalApp('+(1, +(3, 4))', 8);
        equalApp('-(1, +(3, 4))', -6);
    });

    it('compose new function', () => {
        equalApp('((x, y) -> +(x, -(y, 1)))(3, 4)', 6);
    });

    it('compose new high order function', () => {
        equalApp('((x) -> (y) -> +(x, y))(3)(3)', 6);
    });

    it('empty params', () => {
        equalApp('(() -> 10)()', 10);
    });
});
