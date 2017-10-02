'use strict';

let streamTokenSpliter = require('stream-token-parser');

let {
    LR
} = require('syntaxer');

let translator = require('./translator');

let {
    ACTION, GOTO
} = require('../grammer-host/grammer-js/LR1Table');

let tokenTypes = require('../grammer-host/grammer-js/tokenTypes');

let processTokens = (rawTokens) => {
    let tokens = [];
    for (let i = 0; i < rawTokens.length; i++) {
        let token = rawTokens[i];

        if (token.name !== 'whitespace') { // ignore white space
            tokens.push(token);
        }
    }

    return tokens;
};

let processer = (target = 'js', opts, moduleOptions) => {
    let tokenSpliter = streamTokenSpliter.parser(tokenTypes);
    let {
        translate, getCode, assembleWithTpl
    } = translator(target, opts, moduleOptions);

    let lrParse = LR(ACTION, GOTO, {
        // when reduce prodcution, translate at the sametime
        reduceHandler: (production, reducedTokens, ast) => {
            translate(production, reducedTokens, ast);
        }
    });

    /**
     * chunk string
     */
    let handleChunk = (chunk) => {
        let str = chunk && chunk.toString();
        let tokens = processTokens(tokenSpliter(str));


        for (let i = 0; i < tokens.length; i++) {
            lrParse(tokens[i]);
        }

        // means finished chunks
        if (chunk === null) {
            let ast = lrParse(null);
            return getCode(ast);
        }
    };

    return {
        handleChunk, assembleWithTpl
    };
};

module.exports = processer;
