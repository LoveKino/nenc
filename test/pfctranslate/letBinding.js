'use strict';

let {
    equalPfcTranslate
} = require('../util');

let testData = {
    'let a = 1': 'sys_statements(sys_letBinding(sys_pair(sys_variable("a"), sys_data(sys_number("1")))))',
    'let a': 'sys_statements(sys_letBinding(sys_pair(sys_variable("a"), sys_void())))',
    'let a = 1;': 'sys_statements(sys_pair(sys_letBinding(sys_pair(sys_variable("a"), sys_data(sys_number("1")))), sys_void()))',

    'let a = 1, b = 2': 'sys_statements(sys_letBinding(sys_pair(sys_pair(sys_variable("a"), sys_data(sys_number("1"))), sys_pair(sys_variable("b"), sys_data(sys_number("2"))))))',

    'let a = 1, b = 2, c = 3': 'sys_statements(sys_letBinding(sys_pair(sys_pair(sys_variable("a"), sys_data(sys_number("1"))), sys_pair(sys_pair(sys_variable("b"), sys_data(sys_number("2"))), sys_pair(sys_variable("c"), sys_data(sys_number("3")))))))',

    'let x = 1; + (x, 1)': 'sys_statements(sys_pair(sys_letBinding(sys_pair(sys_variable("x"), sys_data(sys_number("1")))), sys_exp(sys_application(sys_variable("+"), sys_pair(sys_variable("x"), sys_data(sys_number("1")))))))'
};

describe('basic', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name]);
        });
    }
});
