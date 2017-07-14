'use strict';

let fs = require('fs');
let promisify = require('es6-promisify');
let {
    buildLR1Table
} = require('syntaxer');
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);

let generateLR1Table = (grammerPath, LR1TablePath, LR1TableJsPath) => {
    return readFile(grammerPath, 'utf-8').then((grammerStr) => {
        let grammer = JSON.parse(grammerStr);
        let table = buildLR1Table(grammer);

        let tableStr = JSON.stringify(table, null, 4);

        return Promise.all([
            writeFile(LR1TablePath, tableStr, 'utf-8'),
            writeFile(LR1TableJsPath, `module.exports = ${tableStr}`, 'utf-8')
        ]);
    });
};

let jsonToJsModule = (jsonPath, jsPath) => {
    return readFile(jsonPath, 'utf-8').then((jsonStr) => {
        let code = `module.exports = ${jsonStr}`;

        return writeFile(jsPath, code, 'utf-8');
    });
};

let textToJsModule = (codePath, jsPath) => {
    return readFile(codePath, 'utf-8').then((str) => {
        let code = `module.exports = ${JSON.stringify(str)}`;

        return writeFile(jsPath, code, 'utf-8');
    });
};

module.exports = {
    generateLR1Table,
    jsonToJsModule,
    textToJsModule
};
