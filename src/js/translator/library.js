'use strict';

let jsModuleLinkTpl = require('../../grammer-host/grammer-js/library/js/module.js.tpl.js');
let jsNodeLinkTpl = require('../../grammer-host/grammer-js/library/js/module.js.tpl.js');
let jsInterpreterSource = require('../../grammer-host/grammer-js/library/js/interpreterCode.js');

let javaModuleLinkTpl = require('../../grammer-host/grammer-js/library/java/module.java.tpl.js');
let javaMainLinkTpl = require('../../grammer-host/grammer-js/library/java/main.java.tpl.js');
let javaTestLinkTpl = require('../../grammer-host/grammer-js/library/java/test.java.tpl.js');

module.exports = {
    js: {
        linkTpl: {
            module: jsModuleLinkTpl,
            node: jsNodeLinkTpl
        },
        defaultLink: 'module',
        interpreterSource: jsInterpreterSource
    },

    java: {
        defaultLink: 'module',
        linkTpl: {
            module: javaModuleLinkTpl,
            main: javaMainLinkTpl,
            test: javaTestLinkTpl
        }
    }
};
