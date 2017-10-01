'use strict';
let path = require('path');

const grammerTxtPath = path.join(__dirname, '../grammer/grammer.txt');
const grammerPath = path.join(__dirname, '../grammer/grammer.json');
const LR1TablePath = path.join(__dirname, '../grammer/LR1Table.json');

const pfcTranslatorJsonPath = path.join(__dirname, '../grammer/translator/pfc.json');

// system library
const jsJoinTplPath = path.join(__dirname, '../grammer/library/js/join.js.tpl');
const javaJoinTplPath = path.join(__dirname, '../grammer/library/java/join.java.tpl');

module.exports = {
    grammerTxtPath,
    grammerPath,
    LR1TablePath,
    pfcTranslatorJsonPath,
    jsJoinTplPath,
    javaJoinTplPath
};
