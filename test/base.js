'use strict';

let {
    compile
} = require('..');

let assert = require('assert');

describe('basic', () => {
    it('variable', () => {
        assert.equal(compile('_abc', 'pfc', {
            pureMiddleCode: true
        }), 'sys_variable("_abc")');
    });

    it('null', () => {
        assert.equal(compile('null', 'pfc', {
            pureMiddleCode: true
        }), 'sys_data(sys_null())');
    });

    it('number', () => {
        assert.equal(compile('1234', 'pfc', {
            pureMiddleCode: true
        }), 'sys_data(sys_number("1234"))');
    });
});
