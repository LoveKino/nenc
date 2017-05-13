'use strict';

let {
    compile
} = require('..');

let assert = require('assert');

describe('pfc', () => {
    it('base', () => {
        assert.equal(compile(JSON.stringify('a'), 'pfc'), 'sys_string("a")');
        assert.equal(compile(JSON.stringify(123), 'pfc'), 'sys_number("123")');
        assert.equal(compile(JSON.stringify(null), 'pfc'), 'sys_null("null")');
        assert.equal(compile(JSON.stringify(true), 'pfc'), 'sys_true("true")');
        assert.equal(compile(JSON.stringify(false), 'pfc'), 'sys_false("false")');
        assert.equal(compile(JSON.stringify([1, 'b']), 'pfc'), 'sys_array(sys_number("1"), sys_string("b"))');
        assert.equal(compile(JSON.stringify({
            a: 1
        }), 'pfc'), 'sys_object(sys_string("a"), sys_number("1"))');
        assert.equal(compile(JSON.stringify({
            a: 1,
            b: [3, 4, {
                d: 4
            }]
        }), 'pfc'), 'sys_object(sys_string("a"), sys_number("1"), sys_string("b"), sys_array(sys_number("3"), sys_number("4"), sys_object(sys_string("d"), sys_number("4"))))');
    });
});
