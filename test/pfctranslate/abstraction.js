'use strict';

let {
    equalPfcTranslate
} = require('../util');

let testData = {
    '() -> 1': 'sys_statements(sys_exp(sys_guarded_abstraction(sys_guarded_abstraction_line(sys_ordinary_abstraction(sys_void(), sys_data(sys_number("1"))), sys_void()))))',
    '(a) -> 1': 'sys_statements(sys_exp(sys_guarded_abstraction(sys_guarded_abstraction_line(sys_ordinary_abstraction(sys_variable("a"), sys_data(sys_number("1"))), sys_void()))))',
    '(a, b) -> 1': 'sys_statements(sys_exp(sys_guarded_abstraction(sys_guarded_abstraction_line(sys_ordinary_abstraction(sys_pair(sys_variable("a"), sys_variable("b")), sys_data(sys_number("1"))), sys_void()))))',
    '(a, b, c) -> 1': 'sys_statements(sys_exp(sys_guarded_abstraction(sys_guarded_abstraction_line(sys_ordinary_abstraction(sys_pair(sys_variable("a"), sys_pair(sys_variable("b"), sys_variable("c"))), sys_data(sys_number("1"))), sys_void()))))',
    '(a) -> (b) -> 1': 'sys_statements(sys_exp(sys_guarded_abstraction(sys_guarded_abstraction_line(sys_ordinary_abstraction(sys_variable("a"), sys_guarded_abstraction(sys_guarded_abstraction_line(sys_ordinary_abstraction(sys_variable("b"), sys_data(sys_number("1"))), sys_void()))), sys_void()))))',
    '((a) -> + (a, 1))(1)': 'sys_statements(sys_exp(sys_application(sys_guarded_abstraction(sys_guarded_abstraction_line(sys_ordinary_abstraction(sys_variable("a"), sys_application(sys_variable("+"), sys_pair(sys_variable("a"), sys_data(sys_number("1"))))), sys_void())), sys_data(sys_number("1")))))',
    '(a) -> {4; 5}': 'sys_statements(sys_exp(sys_guarded_abstraction(sys_guarded_abstraction_line(sys_ordinary_abstraction(sys_variable("a"), sys_application(sys_ordinary_abstraction(sys_void(), sys_statements(sys_pair(sys_exp(sys_data(sys_number("4"))), sys_exp(sys_data(sys_number("5")))))), sys_void())), sys_void()))))',
    '((a) -> {+ (a, 1)})(1)': 'sys_statements(sys_exp(sys_application(sys_guarded_abstraction(sys_guarded_abstraction_line(sys_ordinary_abstraction(sys_variable("a"), sys_application(sys_ordinary_abstraction(sys_void(), sys_statements(sys_exp(sys_application(sys_variable("+"), sys_pair(sys_variable("a"), sys_data(sys_number("1"))))))), sys_void())), sys_void())), sys_data(sys_number("1")))))'
};

describe('abstraction', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name]);
        });
    }
});
