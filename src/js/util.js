'use strict';

let textFlowPFCCompiler = require('text-flow-pfc-compiler');

let template = (context) => (tpl) => {
    let ast = textFlowPFCCompiler.parseStrToAst(tpl, {
        startDelimiter: '${{',
        endDelimiter: '}}'
    });
    textFlowPFCCompiler.checkASTWithContext(ast, () => context);
    let arr = textFlowPFCCompiler.executeAST(ast, () => context);
    return pfcArrayToText(arr);
};

let pfcArrayToText = (arr) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item.type === 'text') {
            result += item.text;
        } else if (item.type === 'pfc') {
            result += item.value;
        }
    }

    return result;
};

module.exports = {
    template,
    pfcArrayToText
};
