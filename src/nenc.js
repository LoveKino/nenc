'use strict';

console.log('--------------------');
console.log(__dirname);

let {
    compile
} = require('./js');

let yargs = require('yargs');

const help = `Usage: nenc
    --code    nenc source code
    --target   target language, java | js
    --help  help`;

yargs.usage(help).demandOption([]).help('h').alias('h', 'help');

let {
    argv
} = yargs;

let jsCode = compile(argv.code, 'js');

console.log(eval(jsCode));
