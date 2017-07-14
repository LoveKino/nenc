'use strict';

let template = require('lodash.template');
let translateProdcution = require('./translateProduction');
let {
    wrapModule
} = require('./pfcTranslator');
let libraryMap = require('./library');
let path = require('path');

let defaultExportNameMap = {
    'c': 'main'
};

/**
 * translate ast to target middle code
 */
module.exports = (target, opts = {}, {
    loadModule, currentFile
} = {}) => {
    let {
        systemSource, joinTpl, optTranslator, importLibrary
    } = libraryMap[target] || {};

    let tplFun = template(joinTpl);

    /**
     * This will be called everytime when reduce production
     */
    let translate = (production, midNode) => {
        if (production[0] === 'IMPORT_EXPRESSION') {
            let token = midNode.children[1].token;
            let modulePath = token.text.substring(1, token.text.length - 1);
            modulePath = path.resolve(path.dirname(currentFile), modulePath);
            token.text = `"${modulePath}"`;

            // add new module loading task
            loadModule && loadModule(modulePath);
        }

        // translate current node
        let code = translateProdcution(production, midNode, target, optTranslator);
        midNode.values = midNode.values || [];
        midNode.values[target] = code;
    };

    let getCode = (ast) => {
        let middleCode = ast.children[0].values[target];
        if (opts.pureMiddleCode) return middleCode;

        // module wrapper
        return wrapModule(currentFile, middleCode);
    };

    let assembleWithTpl = (middleCode, indexPath) => {
        if (opts.pureMiddleCode) return middleCode;

        let libraryImportCode = '';

        if (opts.library && importLibrary) {
            libraryImportCode = importLibrary(opts.library);
        }

        return tplFun({
            system_code: opts.system_code || systemSource,
            custom_code: opts.custom_code || '',
            middle_code: middleCode,
            libraryImportCode,
            indexPath,
            exportName: opts.exportName || defaultExportNameMap[target]
        });
    };

    return {
        translate,
        getCode,
        assembleWithTpl
    };
};
