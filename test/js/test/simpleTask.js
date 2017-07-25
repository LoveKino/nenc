'use strict';

let {
    equalJsApp
} = require('../util');

let path = require('path');
let fs = require('fs');
let promisify = require('es6-promisify');

let readFile = promisify(fs.readFile);

let simpleTaskDir = path.join(__dirname, './fixture/simpleTask');

describe('simpleTask', () => {
    it('AddTwoBinary', () => {
        return readFile(path.join(simpleTaskDir, 'AddTwoBinary.nenc'), 'utf-8').then((str) => {
            equalJsApp(str, 10);
        });
    });
});
