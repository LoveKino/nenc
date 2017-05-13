'use strict';

let {
    compile
} = require('..');

let assert = require('assert');

describe('basic', () => {
    it('variable', () => {
        assert.equal(compile('_abc', 'pfc'), 'sys_variable("_abc")');
    });

    it('null', () => {
        assert.equal(compile('null', 'pfc'), 'sys_null("null")');
    });

    it('number', () => {
        assert.equal(compile('1234', 'pfc'), 'sys_number("1234")');
    });
});
