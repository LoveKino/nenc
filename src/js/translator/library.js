'use strict';

let jsLinkTpl = require('../../../grammer-host/grammer-js/library/js/join.js.tpl.js');

let cSystemCode = require('../../../grammer-host/grammer-js/library/c/system.c.js');
let cLinkTpl = require('../../../grammer-host/grammer-js/library/c/join.c.tpl.js');

let javaLinkTpl = require('../../../grammer-host/grammer-js/library/java/join.java.tpl.js');

module.exports = {
    js: {
        joinTpl: jsLinkTpl
    },

    c: {
        systemSource: cSystemCode,
        joinTpl: cLinkTpl
    },

    java: {
        joinTpl: javaLinkTpl
    }
};
