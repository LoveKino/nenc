'use strict';

let {
    compile
} = require('../../../');
let child_process = require('child_process');
let fs = require('fs');
let promisify = require('es6-promisify');
let path = require('path');

let exec = promisify(child_process.exec);
let writeFile = promisify(fs.writeFile);

const INTERPETER_JAR = path.join(__dirname, '../../../grammer/library/java/nenc-java-interpreter/build/libs/nenc-java-interpreter.jar');

const TEST_MAIN = path.join(__dirname, './fixture/TestMain.java');

const MAIN_DIR = path.join(__dirname, './fixture');

let runNencJavaFile = async(file) => {
    // compile java file
    await exec(`javac -cp ${INTERPETER_JAR} ${file}`);

    // TODO compile test file
    await exec(`javac -cp .:${INTERPETER_JAR} ${TEST_MAIN}`, {
        cwd: MAIN_DIR
    });

    // run
    await exec(`java -cp .:${INTERPETER_JAR} TestMain`, {
        cwd: MAIN_DIR
    });
};

describe('java:index', () => {
    it('test', async() => {
        let code = compile('123', 'java');
        // source java file
        let javaFilePath = path.join(__dirname, './fixture/com/nenc/auto/test/Test.java');
        await writeFile(javaFilePath, code, 'utf-8');
        await runNencJavaFile(javaFilePath);
    });
});
