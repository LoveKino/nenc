'use strict';

let {
    generateLR1Table,
    jsonToJsModule,
    textToJsModule
} = require('./util');

let path = require('path');

let systemLibJsModule = () => {
    return Promise.all([
        textToJsModule(
            path.join(__dirname, '../grammer/library/js/module.js.tpl'),
            path.join(__dirname, '../src/grammer-host/grammer-js/library/js/module.js.tpl.js')
        ),

        textToJsModule(
            path.join(__dirname, '../grammer/library/js/node.js.tpl'),
            path.join(__dirname, '../src/grammer-host/grammer-js/library/js/node.js.tpl.js')
        ),

        textToJsModule(
            path.join(__dirname, '../grammer/library/java/module.java.tpl'),
            path.join(__dirname, '../src/grammer-host/grammer-js/library/java/module.java.tpl.js')
        ),

        textToJsModule(
            path.join(__dirname, '../grammer/library/java/main.java.tpl'),
            path.join(__dirname, '../src/grammer-host/grammer-js/library/java/main.java.tpl.js')
        ),

        textToJsModule(
            path.join(__dirname, '../grammer/library/java/test.java.tpl'),
            path.join(__dirname, '../src/grammer-host/grammer-js/library/java/test.java.tpl.js')
        )
    ]);
};

module.exports = () => {
    return Promise.all([
        generateLR1Table(
            path.join(__dirname, '../grammer/grammer.json'),
            path.join(__dirname, '../grammer/LR1Table.json'),
            path.join(__dirname, '../src/grammer-host/grammer-js/LR1Table.js')),

        jsonToJsModule(path.join(__dirname, '../grammer/translator/pfc.json'),
            path.join(__dirname, '../src/grammer-host/grammer-js/translator/pfc.js')),

        systemLibJsModule()
    ]);
};
