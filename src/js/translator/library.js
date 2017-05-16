'use strict';

let jsSystemCode = require('../../../grammer-js/library/js/system.js.js');
let jsLinkTpl = require('../../../grammer-js/library/js/join.js.tpl.js');

let cSystemCode = require('../../../grammer-js/library/c/system.c.js');
let cLinkTpl = require('../../../grammer-js/library/c/join.c.tpl.js');

module.exports = {
    js: {
        systemSource: jsSystemCode,
        joinTpl: jsLinkTpl
    },

    c: {
        systemSource: cSystemCode,
        joinTpl: cLinkTpl
    }
};
