'use strict';

let {
    equalJsFileApp
} = require('../../util');

let path = require('path');

let testFiles = {
    './fixture/import/0/a.nenc': 10,
    './fixture/import/1/a.nenc': 20
};

describe('system.js.import', () => {
    for (let name in testFiles) {
        it(name, () => {
            return equalJsFileApp(path.join(__dirname, name), testFiles[name]);
        });
    }
});
