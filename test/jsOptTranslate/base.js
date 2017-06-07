'use strict';

let {
    equalPfcTranslate
} = require('../util');

let testData = {
    '1': 'sys_data(1)',
    '1.3e10': 'sys_data(1.3e10)',
    'true': 'sys_data(true)',
    'false': 'sys_data(false)',
    '"abc"': 'sys_data("abc")'
};

describe('basic', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name], 'js');
        });
    }
});
