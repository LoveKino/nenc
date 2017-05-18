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

    it('js-opt-null', () => {
        assert.equal(compile('null', 'js', {
            pureMiddleCode: true
        }), 'sys_data(null)');
    });

    it('js-opt-number', () => {
        assert.equal(compile('1', 'js', {
            pureMiddleCode: true
        }), 'sys_data(1)');
    });

    it('js-opt-number2', () => {
        assert.equal(compile('1.3e10', 'js', {
            pureMiddleCode: true
        }), 'sys_data(1.3e10)');
    });

    it('js-opt-true', () => {
        assert.equal(compile('true', 'js', {
            pureMiddleCode: true
        }), 'sys_data(true)');
    });

    it('js-opt-false', () => {
        assert.equal(compile('false', 'js', {
            pureMiddleCode: true
        }), 'sys_data(false)');
    });

    it('js-opt-string', () => {
        assert.equal(compile('"abc"', 'js', {
            pureMiddleCode: true
        }), 'sys_data("abc")');
    });
});
