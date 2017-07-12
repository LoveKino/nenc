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
    PFC_MODEL_IDL_PATH
} = require('./constant');

const PFC_MODLE_IDL_JS_PATH = path.join(__dirname, '../../grammer/library/js/nenc-js-interpreter/res/models.js');

module.exports = async() => {
    let str = await readFile(PFC_MODEL_IDL_PATH, 'utf-8');
    let ast = parse(str);
    let names = getModelNames(ast);
    await writeFile(PFC_MODLE_IDL_JS_PATH, `${translator(ast)}\nmodule.exports = {${names.join(', ')}};`, 'utf-8');
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
