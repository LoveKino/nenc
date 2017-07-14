'use strict';

let fs = require('fs');
let promisify = require('es6-promisify');
let bnfer = require('bnfer');
let {
    grammerTxtPath,
    grammerPath,
    pfcTranslatorJsonPath
} = require('./grammerResource');
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);

let generateGrammer = async(txtFile, jsonFile, pfcTranslatorJsonPath) => {
    let str = await readFile(txtFile, 'utf-8');
    let grammer = bnfer.parse(str);
    let productions = grammer.productions;

    let pfcMap = {};

    productions.map(([head, body, annotation]) => {
        let bodyStr = body.join(' ');
        if (!body.length) {
            bodyStr = 'EPSILON';
        }
        let key = `${head} := ${bodyStr}`;
        pfcMap[key] = annotation;
    });

    await writeFile(pfcTranslatorJsonPath, JSON.stringify(pfcMap), 'utf-8');
    await writeFile(jsonFile, JSON.stringify(grammer), 'utf-8');
};


module.exports = () => {
    return generateGrammer(grammerTxtPath, grammerPath, pfcTranslatorJsonPath);
};
