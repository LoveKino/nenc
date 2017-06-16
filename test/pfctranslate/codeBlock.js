'use strict';

let {
    equalPfcTranslate
} = require('../util');

let testData = {
    '{let a=1;}': 'sys_statements(sys_exp(sys_application(sys_ordinary_abstraction(sys_void(), sys_statements(sys_pair(sys_letBinding(sys_pair(sys_variable("a"), sys_data(sys_number("1")))), sys_void()))), sys_void())))'
};

describe('code block', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name]);
        });
    }
});
