'use strict';

let {
    equalPfcTranslate
} = require('../util');

let testData = {
    'import "./a/b"': 'sys_statements(sys_import("./a/b"))',
};

describe('import', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name]);
        });
    }
});
