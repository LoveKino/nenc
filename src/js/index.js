'use strict';

let streamTokenSpliter = require('stream-token-parser');

let {
    LR
} = require('syntaxer');

let translator = require('./translator');

let {
    ACTION, GOTO
} = require('../../grammer-host/grammer-js/LR1Table');

let tokenTypes = require('../../grammer-host/grammer-js/tokenTypes');

let tokenSpliter = streamTokenSpliter.parser(tokenTypes);

let processTokens = (rawTokens) => {
    let tokens = [];
    for (let i = 0; i < rawTokens.length; i++) {
        let {
            text, tokenType
        } = rawTokens[i];

        let name = tokenType.name;

        if (name !== 'whitespace') { // ignore white space
            tokens.push({
                text,
                name
            });
        }
    }

    return tokens;
};

/**
 * chunk string
 */
let processer = (target = 'js', opts) => {
    let {
        translate, getCode
    } = translator(target, opts);

    let lrParse = LR(ACTION, GOTO, {
        // when reduce prodcution, translate at the sametime
        reduceHandler: (production, reducedTokens, ast) => {
            translate(production, reducedTokens, ast);
        }
    });

    let process = (chunk) => {
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

    return process;
};

// for test
let compile = (str, target, opts) => {
    let process = processer(target, opts);
    process(str);
    return process(null);
};

module.exports = {
    processer,
    compile
};
