'use strict';

let generateGrammer = require('./generateGrammer');

let buildGrammerForJsCompiler = require('./buildGrammerForJsCompiler');

let buildPfcIDL = require('./pfcIDL');

generateGrammer().then(async () => {
    await buildGrammerForJsCompiler();
    await buildPfcIDL();
});
