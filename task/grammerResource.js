'use strict';

let path = require('path');

const grammerTxtPath = path.join(__dirname, '../grammer/grammer.txt');
const grammerPath = path.join(__dirname, '../grammer/grammer.json');
const LR1TablePath = path.join(__dirname, '../grammer/LR1Table.json');

const pfcTranslatorJsonPath = path.join(__dirname, '../grammer/translator/pfc.json');

// opt translator
const jsOptTranslatorJsonPath = path.join(__dirname, '../grammer/library/js/optTranslator.json');
const cOptTranslatorJsonPath = path.join(__dirname, '../grammer/library/c/optTranslator.json');

// system library
const jsJoinTplPath = path.join(__dirname, '../grammer/library/js/join.js.tpl');
const cSystemCodePath = path.join(__dirname, '../grammer/library/c/system.c');
const cJoinTplPath = path.join(__dirname, '../grammer/library/c/join.c.tpl');

module.exports = {
    grammerTxtPath,
    grammerPath,
    LR1TablePath,
    pfcTranslatorJsonPath,
    jsOptTranslatorJsonPath,
    cOptTranslatorJsonPath,
    jsJoinTplPath,
    cSystemCodePath,
    cJoinTplPath
};
