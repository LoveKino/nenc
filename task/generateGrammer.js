'use strict';

let {
    grammerTxtPath,
    grammerPath,
    pfcTranslatorJsonPath
} = require('./grammerResource');

let {
    generateGrammer
} = require('./util');

module.exports = () => {
    return generateGrammer(grammerTxtPath, grammerPath, pfcTranslatorJsonPath);
};
