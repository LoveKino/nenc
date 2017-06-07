'use strict';

let {
    equalPfcTranslate
} = require('../util');

let testData = {
    '_abc': 'sys_variable("_abc")',
    'null': 'sys_data(sys_null())',
    '1234': 'sys_data(sys_number("1234"))',
};

describe('basic', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name]);
        });
    }
});
