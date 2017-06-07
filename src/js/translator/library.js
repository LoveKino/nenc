'use strict';

let jsLinkTpl = require('../../../grammer-js/library/js/join.js.tpl.js');
let jsOptTranslator = require('../../../grammer-js/library/js/optTranslator.js');

let cSystemCode = require('../../../grammer-js/library/c/system.c.js');
let cLinkTpl = require('../../../grammer-js/library/c/join.c.tpl.js');
let cOptTransltor = require('../../../grammer-js/library/c/optTranslator.js');

module.exports = {
    js: {
        joinTpl: jsLinkTpl,
        optTranslator: jsOptTranslator
    },

    c: {
        systemSource: cSystemCode,
        joinTpl: cLinkTpl,
        optTranslator: cOptTransltor
    }
};
