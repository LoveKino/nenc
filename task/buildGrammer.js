'use strict';

let generateGrammer = require('./generateGrammer');

let buildGrammerForJsCompiler = require('./buildGrammerForJsCompiler');

generateGrammer().then(() => {
    buildGrammerForJsCompiler();
});
