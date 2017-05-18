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

let textToJsModule = (codePath, jsPath) => {
    return readFile(codePath, 'utf-8').then((str) => {
        let code = `module.exports = ${JSON.stringify(str)}`;

        return writeFile(jsPath, code, 'utf-8');
    });
};

//
const grammerPath = path.join(__dirname, '../grammer/grammer.json');
const LR1TablePath = path.join(__dirname, '../grammer/LR1Table.json');
const LR1TableJsPath = path.join(__dirname, '../grammer-js/LR1Table.js');

const pfcTranslatorJsonPath = path.join(__dirname, '../grammer/translator/pfc.json');
const pfcTranslatorJsPath = path.join(__dirname, '../grammer-js/translator/pfc.js');

// opt translator
const jsOptTranslatorJsonPath = path.join(__dirname, '../grammer/library/js/optTranslator.json');
const jsOptTranslatorJsPath = path.join(__dirname, '../grammer-js/library/js/optTranslator.js');
const cOptTranslatorJsonPath = path.join(__dirname, '../grammer/library/c/optTranslator.json');
const cOptTranslatorJsPath = path.join(__dirname, '../grammer-js/library/c/optTranslator.js');

// system library
const jsSystemCodePath = path.join(__dirname, '../grammer/library/js/system.js');
const jsTargetJsSystemCodePath = path.join(__dirname, '../grammer-js/library/js/system.js.js');
const jsJoinTplPath = path.join(__dirname, '../grammer/library/js/join.js.tpl');
const jsTargetJsJoinTplPath = path.join(__dirname, '../grammer-js/library/js/join.js.tpl.js');
const cSystemCodePath = path.join(__dirname, '../grammer/library/c/system.c');
const jsTargetCSystemCodePath = path.join(__dirname, '../grammer-js/library/c/system.c.js');
const cJoinTplPath = path.join(__dirname, '../grammer/library/c/join.c.tpl');
const jsTargetCJoinTplPath = path.join(__dirname, '../grammer-js/library/c/join.c.tpl.js');

generateLR1Table(grammerPath, LR1TablePath, LR1TableJsPath);
jsonToJsModule(pfcTranslatorJsonPath, pfcTranslatorJsPath);
textToJsModule(jsSystemCodePath, jsTargetJsSystemCodePath);
textToJsModule(jsJoinTplPath, jsTargetJsJoinTplPath);
textToJsModule(cSystemCodePath, jsTargetCSystemCodePath);
textToJsModule(cJoinTplPath, jsTargetCJoinTplPath);
jsonToJsModule(jsOptTranslatorJsonPath, jsOptTranslatorJsPath);
jsonToJsModule(cOptTranslatorJsonPath, cOptTranslatorJsPath);
