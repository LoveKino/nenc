'use strict';

let generateGrammer = require('./generateGrammer');
let buildGrammerForJsCompiler = require('./buildGrammerForJsCompiler');
let fs = require('fs');
let promisify = require('es6-promisify');
let path = require('path');

const interpreterJsCodeFile = path.join(__dirname, '../grammer/library/js/nenc-js-interpreter/lib/nenc-js-interpreter.js');
const interpreterJsTargetCodeFile = path.join(__dirname, '../src/grammer-host/grammer-js/library/js/interpreterCode.js');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

generateGrammer().then(async() => {
    // copy js interpreter code as a constant
    let code = await readFile(interpreterJsCodeFile, 'utf-8');

    await writeFile(interpreterJsTargetCodeFile, `module.exports=${JSON.stringify(code)}`, 'utf-8');
    await buildGrammerForJsCompiler();
});
