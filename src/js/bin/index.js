let {
    compiler
} = require('..');

let yargs = require('yargs');

const help = `Usage: nenc
    --target   target language, java | js
    --help  help`;

yargs.usage(help).demandOption([]).help('h').alias('h', 'help');
