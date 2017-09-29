'use strict';

let {
    compile
} = require('../../../');
let fs = require('fs');
let promisify = require('es6-promisify');
let path = require('path');
let {
    template
} = require('../../../src/js/util');
let astToTargetCode = require('../../../src/js/translator/astToTargetCode');
let spawnp = require('spawnp');

let writeFile = promisify(fs.writeFile);
let readFile = promisify(fs.readFile);

const INTERPETER_JAR = path.join(__dirname, '../../../grammer/library/java/nenc-java-interpreter/build/libs/nenc-java-interpreter.jar');
const TEST_MAIN = path.join(__dirname, './fixture/TestMain.java');
const MAIN_DIR = path.join(__dirname, './fixture');

let runNencJavaFile = async(file) => {
    // compile java file
    await spawnp(`javac -cp ${INTERPETER_JAR} ${file}`);

    // TODO compile test file
    await spawnp(`javac -cp .:${INTERPETER_JAR} ${TEST_MAIN}`, [], {
        cwd: MAIN_DIR,
        stdio: 'inherit'
    });

    // run
    await spawnp(`java -cp .:${INTERPETER_JAR} TestMain`, [], {
        cwd: MAIN_DIR,
        stdio: 'inherit'
    });
};

let testJava = async(source, expect) => {
    let code = compile(source, 'java');
    // source java file
    let javaFilePath = path.join(__dirname, './fixture/com/nenc/auto/test/Test.java');
    await writeFile(javaFilePath, code, 'utf-8');

    let testMainTpl = path.join(__dirname, './fixture/TestMain.java.tpl');
    let tplStr = await readFile(testMainTpl, 'utf-8');
    // write test main java file
    let testMainJava = template({
        expect: astToTargetCode(expect, 'java')
    })(tplStr);
    await writeFile(TEST_MAIN, testMainJava, 'utf-8');
    await runNencJavaFile(javaFilePath);
};

const testDataDir = path.join(__dirname, '../../testData');

let testData = {
    'json': path.join(testDataDir, 'json.json'),
};

for (let name in testData) {
    readFile(testData[name], 'utf-8').then((str) => {
        let part = JSON.parse(str);
        describe(`java: ${name}`, () => {
            let index = 0;
            for (let code in part) {
                let target = part[code];
                index++;
                it(`${index}. ${code}`, async() => {
                    await testJava(code, target);
                });
            }
        });
    });
}
