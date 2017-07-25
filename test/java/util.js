'use strict';

let {
    compileFile
} = require('../..');

let log = console.log; // eslint-disable-line

let equalJavaFileApp = (filePath, result, options) => {
    return compileFile(filePath, 'java', options).then((javaCode) => {
    });
};

module.exports = {
    equalJavaFileApp
};
