'use strict';

let {
    equalPfcTranslate
} = require('../util');

let testData = {
    '() -> 1': 'sys_statements(sys_exp(sys_abstraction(sys_void(), sys_data(sys_number("1")))))',
    '(a) -> 1': 'sys_statements(sys_exp(sys_abstraction(sys_variable("a"), sys_data(sys_number("1")))))',
    '(a, b) -> 1': 'sys_statements(sys_exp(sys_abstraction(sys_pair(sys_variable("a"), sys_variable("b")), sys_data(sys_number("1")))))',
    '(a, b, c) -> 1': 'sys_statements(sys_exp(sys_abstraction(sys_pair(sys_variable("a"), sys_pair(sys_variable("b"), sys_variable("c"))), sys_data(sys_number("1")))))',
    '(a) -> (b) -> 1': 'sys_statements(sys_exp(sys_abstraction(sys_variable("a"), sys_abstraction(sys_variable("b"), sys_data(sys_number("1"))))))'
};

describe('abstraction', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name]);
        });
    }
});
