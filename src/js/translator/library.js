'use strict';

let jsLinkTpl = require('../../../grammer-js/library/js/join.js.tpl.js');
let jsOptTranslator = require('../../../grammer-js/library/js/optTranslator.js');

let cSystemCode = require('../../../grammer-js/library/c/system.c.js');
let cLinkTpl = require('../../../grammer-js/library/c/join.c.tpl.js');
let cOptTransltor = require('../../../grammer-js/library/c/optTranslator.js');

let importJsLibrary = (libraries) => {
    let code = '';
    for (let i = 0; i < libraries.length; i++) {
        let library = libraries[i];
        code += `require("${library}")(addMetaMethod);\n`;
    }

    return code;
};

module.exports = {
    js: {
        joinTpl: jsLinkTpl,
        optTranslator: jsOptTranslator,
        importLibrary: importJsLibrary
    },

    c: {
        systemSource: cSystemCode,
        joinTpl: cLinkTpl,
        optTranslator: cOptTransltor
    }
};
