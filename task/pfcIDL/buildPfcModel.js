'use strict';

let path = require('path');
let fs = require('fs');
let promisify = require('es6-promisify');
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);
let {
    parse
} = require('pfc-idl');

let {
    translator
} = require('pfc-idl-model-translator');

let {
    PFC_DSL_IDL_PATH,
    PFC_MIDDLE_IDL_PATH
} = require('./constant');

const PFC_DSL_IDL_JS_PATH = path.join(__dirname, '../../grammer/library/js/nenc-js-interpreter/res/dslModel.js');
const PFC_MIDDLE_IDL_JS_PATH = path.join(__dirname, '../../grammer/library/js/nenc-js-interpreter/res/middleModel.js');

module.exports = async() => {
    await toJsModel(PFC_DSL_IDL_PATH, PFC_DSL_IDL_JS_PATH);
    await toJsModel(PFC_MIDDLE_IDL_PATH, PFC_MIDDLE_IDL_JS_PATH);
};

let toJsModel = async(filePath, targetPath) => {
    let str = await readFile(filePath, 'utf-8');
    let ast = parse(str);
    let names = getModelNames(ast);
    await writeFile(targetPath, `${translator(ast)}\nmodule.exports = {${names.join(', ')}};`, 'utf-8');
};

let getModelNames = (ast) => {
    let names = [];
    for (let name in ast) {
        if (ast[name].parser.type === 'Model') {
            names.push(name);
        }
    }

    return names;
};
