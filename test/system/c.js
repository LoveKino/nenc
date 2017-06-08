'use strict';

let {
    compile
} = require('../..');
let child_process = require('child_process');
let fs = require('fs');
let promisify = require('es6-promisify');
let uuidv4 = require('uuid/v4');
let path = require('path');
let del = require('del');

let writeFile = promisify(fs.writeFile);
let exec = promisify(child_process.exec);

const FIXTURE_DIR = __dirname + '/fixture';
const NENC_SYSTEM_DIR = path.join(__dirname, '../../grammer/library/c');

let runCCode = async(code) => {
    let id = uuidv4();
    let filename = id + '.c';
    let outputfilename = id;
    let filePath = FIXTURE_DIR + '/' + filename;

    await writeFile(filePath, code, 'utf-8');
    let result = await exec(`gcc ${filename} -o ${outputfilename} ${NENC_SYSTEM_DIR}/*.c -I${NENC_SYSTEM_DIR} && ./${outputfilename}`, {
        cwd: FIXTURE_DIR
    });
    console.log( // eslint-disable-line
        result
    );

    await del([filePath, path.join(FIXTURE_DIR, outputfilename)]);
};

describe('system.c', () => {
    it('base', async() => {
        let cCode = compile(1, 'c');
        //await runCCode(cCode);
    });
});
