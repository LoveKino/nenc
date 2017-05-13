'use strict';

let fs = require('fs');
let path = require('path');
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

//
const grammerPath = path.join(__dirname, '../grammer/grammer.json');
const LR1TablePath = path.join(__dirname, '../grammer/LR1Table.json');
const LR1TableJsPath = path.join(__dirname, '../grammer/LR1Table.js');

const jsTranslatorJsonPath = path.join(__dirname, '../grammer/translator/js.json');
const jsTranslatorJsPath = path.join(__dirname, '../grammer/translator/js.js');
const pfcTranslatorJsonPath = path.join(__dirname, '../grammer/translator/pfc.json');
const pfcTranslatorJsPath = path.join(__dirname, '../grammer/translator/pfc.js');

generateLR1Table(grammerPath, LR1TablePath, LR1TableJsPath);
jsonToJsModule(jsTranslatorJsonPath, jsTranslatorJsPath);
jsonToJsModule(pfcTranslatorJsonPath, pfcTranslatorJsPath);
