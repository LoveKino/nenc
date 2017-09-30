'use strict';

let textFlowPFCCompiler = require('text-flow-pfc-compiler');
let translateProdcution = require('./translateProduction');
let libraryMap = require('./library');
let path = require('path');
let astToTargetCode = require('./astToTargetCode');
let {
    template,
    pfcArrayToText
} = require('../util');

let defaultExportNameMap = {
    'c': 'main'
};

/**
 * translate ast to target middle code
 */
module.exports = (target, opts = {}, {
    loadModule,
    currentFile
} = {}) => {
    let {
        systemSource,
        joinTpl,
        optTranslator
    } = libraryMap[target] || {};

    let linkerAst = textFlowPFCCompiler.parseStrToAst(joinTpl);

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
        translateProdcution(production, midNode, optTranslator);
    };

    let getCode = (ast) => {
        return astToTargetCode(ast.children[0].value, target);
    };

    let assembleWithTpl = (moduleSources, indexPath) => {
        let sandboxer = () => {
            return {
                // java package
                packageName: opts.packageName || 'com.nenc.auto.test',
                className: opts.className || 'Test',

                system_code: opts.system_code || systemSource,
                custom_code: opts.custom_code || '',
                library: opts.library, // string
                indexPath,
                moduleSources,
                concatModuleSources: (moduleSources, tpl) => {
                    let middleCodes = [];
                    for (let i = 0; i < moduleSources.length; i++) {
                        let {
                            code,
                            filePath
                        } = moduleSources[i];
                        middleCodes.push(template({
                            filePath,
                            code,
                            encodeString: (str) => `"${str}"`
                        })(tpl));
                    }

                    return middleCodes;
                },
                useLibrary: (library, tpl, def) => {
                    if(!library) return def;
                    return template({
                        library,
                        stringify: (str) => JSON.stringify(str)
                    })(tpl);
                },
                join: (list, str) => list.join(str),
                exportName: opts.exportName || defaultExportNameMap[target],
                stringify: (str) => JSON.stringify(str)
            };
        };

        textFlowPFCCompiler.checkASTWithContext(linkerAst, sandboxer);

        let arr = textFlowPFCCompiler.executeAST(linkerAst, sandboxer);

        return pfcArrayToText(arr);
    };

    return {
        translate,
        getCode,
        assembleWithTpl
    };
};
