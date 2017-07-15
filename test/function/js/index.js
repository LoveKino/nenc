'use strict';

let {
    equalJsApp
} = require('../../util');
let path = require('path');
let fs = require('fs');
let promisify = require('es6-promisify');

let readFile = promisify(fs.readFile);
let testDataDir = path.join(__dirname, '../../testData');

let testData = {
    'base': path.join(testDataDir, 'base.json'),
    'abstraction': path.join(testDataDir, 'abstraction.json'),
    'codeBlock': path.join(testDataDir, 'codeBlock.json'),
    'condition': path.join(testDataDir, 'condition.json'),
    'literal': path.join(testDataDir, 'literal.json'),
    'letBinding': path.join(testDataDir, 'letBinding.json'),
    'guard': path.join(testDataDir, 'guard.json')
};

for (let name in testData) {
    readFile(testData[name], 'utf-8').then((str) => {
        let part = JSON.parse(str);
        describe(name, () => {
            for (let code in part) {
                let target = part[code];
                it(name, () => {
                    equalJsApp(code, target);
                });
            }
        });
    });
}
