'use strict';

let {
    compile
} = require('..');

let assert = require('assert');

describe('abstraction', () => {
    it('base', () => {
        assert.deepEqual(compile('() -> 1', 'pfc', {
            pureMiddleCode: true
        }), 'sys_abstraction(sys_void(), sys_number("1"))');
    });

    it('one param', () => {
        assert.deepEqual(compile('(a) -> 1', 'pfc', {
            pureMiddleCode: true
        }), 'sys_abstraction(sys_variable("a"), sys_number("1"))');
    });

    it('two params', () => {
        assert.deepEqual(compile('(a, b) -> 1', 'pfc', {
            pureMiddleCode: true
        }), 'sys_abstraction(sys_pair(sys_variable("a"), sys_variable("b")), sys_number("1"))');
    });

    it('three params', () => {
        assert.deepEqual(compile('(a, b, c) -> 1', 'pfc', {
            pureMiddleCode: true
        }), 'sys_abstraction(sys_pair(sys_variable("a"), sys_pair(sys_variable("b"), sys_variable("c"))), sys_number("1"))');
    });

    it('high order', () => {
        assert.deepEqual(compile('(a) -> (b) -> 1', 'pfc', {
            pureMiddleCode: true
        }), 'sys_abstraction(sys_variable("a"), sys_abstraction(sys_variable("b"), sys_number("1")))');
    });
});
