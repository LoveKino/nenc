'use strict';

let jsLinkTpl = require('../../../grammer-host/grammer-js/library/js/join.js.tpl.js');

let javaLinkTpl = require('../../../grammer-host/grammer-js/library/java/join.java.tpl.js');

let jsInterpreterSource = require('../../../grammer-host/grammer-js/library/js/interpreterCode.js');

module.exports = {
    js: {
        joinTpl: jsLinkTpl,
        interpreterSource: jsInterpreterSource
    },

    java: {
        joinTpl: javaLinkTpl
    }
};
