'use strict';

let {
    compile
} = require('../..');

let assert = require('assert');

describe('pfc-json', () => {
    it('base', () => {
        assert.equal(compile(JSON.stringify('a'), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_string("a"))))');
        assert.equal(compile(JSON.stringify(123), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_number("123"))))');
        assert.equal(compile(JSON.stringify(null), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_null())))');
        assert.equal(compile(JSON.stringify(true), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_true())))');
        assert.equal(compile(JSON.stringify(false), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_false())))');
    });

    it('object', () => {
        assert.equal(compile(JSON.stringify({}), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_object(sys_void()))))');

        assert.equal(compile(JSON.stringify({
            a: 1
        }), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_object(sys_pair(sys_string("a"), sys_number("1"))))))');

        assert.equal(compile(JSON.stringify({
            a: 1,
            b: '2'
        }), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_object(sys_pair(sys_pair(sys_string("a"), sys_number("1")), sys_pair(sys_string("b"), sys_string("2")))))))');

        assert.equal(compile(JSON.stringify({
            a: 1,
            b: '2',
            c: null
        }), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_object(sys_pair(sys_pair(sys_string("a"), sys_number("1")), sys_pair(sys_pair(sys_string("b"), sys_string("2")), sys_pair(sys_string("c"), sys_null())))))))');
    });

    it('array', () => {
        assert.equal(compile(JSON.stringify([]), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_array(sys_void()))))');
        assert.equal(compile(JSON.stringify([1]), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_array(sys_number("1")))))');
        assert.equal(compile(JSON.stringify([1, 2]), 'pfc', {
            pureMiddleCode: true
        }), 'sys_statements(sys_exp(sys_data(sys_array(sys_pair(sys_number("1"), sys_number("2"))))))');
    });
});
