'use strict';

let {
    equalPfcTranslate
} = require('../util');

let testData = {
    '1': 'sys_statements(sys_exp(sys_data(1)))',
    '1.3e10': 'sys_statements(sys_exp(sys_data(1.3e10)))',
    'true': 'sys_statements(sys_exp(sys_data(true)))',
    'false': 'sys_statements(sys_exp(sys_data(false)))',
    '"abc"': 'sys_statements(sys_exp(sys_data("abc")))'
};

describe('basic', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name], 'js');
        });
    }
});
