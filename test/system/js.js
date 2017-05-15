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
        let jsCode = compile('+(1, 2)', 'js');
        let script = new vm.Script(jsCode);
        let v = script.runInContext(vm.createContext({
            console
        }));
        assert.equal(v, 3);
    });
});
