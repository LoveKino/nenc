'use strict';

let {
    compile
} = require('..');

let assert = require('assert');

describe('pfc-json', () => {
    it('base', () => {
        assert.equal(compile(JSON.stringify('a'), 'pfc', {
            pureMiddleCode: true
        }), 'sys_string("a")');
        assert.equal(compile(JSON.stringify(123), 'pfc', {
            pureMiddleCode: true
        }), 'sys_number("123")');
        assert.equal(compile(JSON.stringify(null), 'pfc', {
            pureMiddleCode: true
        }), 'sys_null("null")');
        assert.equal(compile(JSON.stringify(true), 'pfc', {
            pureMiddleCode: true
        }), 'sys_true("true")');
        assert.equal(compile(JSON.stringify(false), 'pfc', {
            pureMiddleCode: true
        }), 'sys_false("false")');
        /*
        assert.equal(compile(JSON.stringify([1, 'b']), 'pfc'), 'sys_array(sys_number("1"), sys_string("b"))');
        assert.equal(compile(JSON.stringify({
            a: 1,
            b: [3, 4, {
                d: 4
            }]
        }), 'pfc'), 'sys_object(sys_string("a"), sys_number("1"), sys_string("b"), sys_array(sys_number("3"), sys_number("4"), sys_object(sys_string("d"), sys_number("4"))))');
       */
    });

    it('object', () => {
        assert.equal(compile(JSON.stringify({}), 'pfc', {
            pureMiddleCode: true
        }), 'sys_object(sys_void())');

        assert.equal(compile(JSON.stringify({
            a: 1
        }), 'pfc', {
            pureMiddleCode: true
        }), 'sys_object(sys_pair(sys_string("a"), sys_number("1")))');

        assert.equal(compile(JSON.stringify({
            a: 1,
            b: '2'
        }), 'pfc', {
            pureMiddleCode: true
        }), 'sys_object(sys_pair(sys_pair(sys_string("a"), sys_number("1")), sys_pair(sys_string("b"), sys_string("2"))))');

        assert.equal(compile(JSON.stringify({
            a: 1,
            b: '2',
            c: null
        }), 'pfc', {
            pureMiddleCode: true
        }), 'sys_object(sys_pair(sys_pair(sys_string("a"), sys_number("1")), sys_pair(sys_pair(sys_string("b"), sys_string("2")), sys_pair(sys_string("c"), sys_null("null")))))');
    });

    it('array', () => {
        assert.equal(compile(JSON.stringify([]), 'pfc', {
            pureMiddleCode: true
        }), 'sys_array(sys_void())');
        assert.equal(compile(JSON.stringify([1]), 'pfc', {
            pureMiddleCode: true
        }), 'sys_array(sys_number("1"))');
        assert.equal(compile(JSON.stringify([1, 2]), 'pfc', {
            pureMiddleCode: true
        }), 'sys_array(sys_pair(sys_number("1"), sys_number("2")))');
    });
});
