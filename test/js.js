'use strict';

let {
    compile
} = require('..');

let assert = require('assert');

let testJSJson = (data) => {
    let code = compile(JSON.stringify(data), 'js');
    assert.deepEqual(JSON.parse(code), data);
};

describe('js', () => {
    it('base', () => {
        testJSJson('a');
        testJSJson(123);
        testJSJson(null);
        testJSJson(true);
        testJSJson(false);
        testJSJson(
            [1, 'b']
        );
        testJSJson(false);
        testJSJson({
            a: 1
        });
        testJSJson({
            a: 1,
            b: [3, 4, {
                d: 4
            }]
        });
    });
});
