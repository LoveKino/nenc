'use strict';

let {
    equalPfcTranslate
} = require('../util');

let testData = {
    'a()': 'sys_application(sys_variable("a"), sys_void())',
    'a()()': 'sys_application(sys_application(sys_variable("a"), sys_void()), sys_void())',
    'a(1)': 'sys_application(sys_variable("a"), sys_data(sys_number("1")))',
    'a(true)': 'sys_application(sys_variable("a"), sys_data(sys_true()))',
    '((x) -> x)(true)': 'sys_application(sys_abstraction(sys_variable("x"), sys_variable("x")), sys_data(sys_true()))'
};

describe('application', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name]);
        });
    }
});
