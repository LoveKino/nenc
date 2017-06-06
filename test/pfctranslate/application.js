'use strict';

let {
    compile
} = require('../..');

let assert = require('assert');

describe('application', () => {
    it('variable calling', () => {
        assert.deepEqual(compile('a()', 'pfc', {
            pureMiddleCode: true
        }), 'sys_application(sys_variable("a"), sys_void())');
    });

    it('variable calling in row', () => {
        assert.deepEqual(compile('a()()', 'pfc', {
            pureMiddleCode: true
        }), 'sys_application(sys_application(sys_variable("a"), sys_void()), sys_void())');
    });

    it('param', () => {
        assert.deepEqual(compile('a(1)', 'pfc', {
            pureMiddleCode: true
        }), 'sys_application(sys_variable("a"), sys_data(sys_number("1")))');
    });

    it('param: boolean', () => {
        assert.deepEqual(compile('a(true)', 'pfc', {
            pureMiddleCode: true
        }), 'sys_application(sys_variable("a"), sys_data(sys_true()))');
    });

    it('abstraction', () => {
        assert.deepEqual(compile('((x) -> x)(true)', 'pfc', {
            pureMiddleCode: true
        }), 'sys_application(sys_abstraction(sys_variable("x"), sys_variable("x")), sys_data(sys_true()))');
    });
});
