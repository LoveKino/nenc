'use strict';

let {
    grammerTxtPath,
    grammerPath,
    LR1TablePath,
    pfcTranslatorJsonPath,
    jsOptTranslatorJsonPath,
    cOptTranslatorJsonPath,
    jsJoinTplPath,
    cSystemCodePath,
    cJoinTplPath
} = require('./grammerResource');

let {
    generateLR1Table,
    jsonToJsModule,
    textToJsModule,
    generateGrammer
} = require('./util');

let path = require('path');

//
const LR1TableJsPath = path.join(__dirname, '../grammer-js/LR1Table.js');

const pfcTranslatorJsPath = path.join(__dirname, '../grammer-js/translator/pfc.js');

// opt translator
const jsOptTranslatorJsPath = path.join(__dirname, '../grammer-js/library/js/optTranslator.js');
const cOptTranslatorJsPath = path.join(__dirname, '../grammer-js/library/c/optTranslator.js');

// system library
const jsTargetJsJoinTplPath = path.join(__dirname, '../grammer-js/library/js/join.js.tpl.js');
const jsTargetCSystemCodePath = path.join(__dirname, '../grammer-js/library/c/system.c.js');
const jsTargetCJoinTplPath = path.join(__dirname, '../grammer-js/library/c/join.c.tpl.js');

let systemLibJsModule = () => {
    return Promise.all([
        textToJsModule(jsJoinTplPath, jsTargetJsJoinTplPath),
        textToJsModule(cSystemCodePath, jsTargetCSystemCodePath),
        textToJsModule(cJoinTplPath, jsTargetCJoinTplPath)
    ]);
};

module.exports = () => {
    return generateGrammer(grammerTxtPath, grammerPath).then(() => {
        return Promise.all([
            generateLR1Table(grammerPath, LR1TablePath, LR1TableJsPath),

            jsonToJsModule(pfcTranslatorJsonPath, pfcTranslatorJsPath),

            systemLibJsModule(),

            jsonToJsModule(jsOptTranslatorJsonPath, jsOptTranslatorJsPath),
            jsonToJsModule(cOptTranslatorJsonPath, cOptTranslatorJsPath)
        ]);
    });
};
