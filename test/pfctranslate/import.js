'use strict';

let {
    equalPfcTranslate
} = require('../util');
let path = require('path');

let testData = {
    'import "./a/b" as A': `sys_statements(sys_import("${path.resolve(process.cwd(), './a/b')}", sys_variable("A")))`,
};

describe('import', () => {
    for (let name in testData) {
        it(name, () => {
            equalPfcTranslate(name, testData[name]);
        });
    }
});
