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
let spawnp = require('spawnp');

let writeFile = promisify(fs.writeFile);
let readFile = promisify(fs.readFile);

const INTERPETER_JAR = path.join(__dirname, '../../../grammer/library/java/nenc-java-interpreter/build/libs/nenc-java-interpreter.jar');
// source java file
const javaFilePath = path.join(__dirname, './fixture/com/nenc/auto/test/TestMain.java');

let runNencJavaFile = async(file) => {
    try {
        // compile java file
        // cp grammer: join with ':', like .:${INTERPETER_JAR}
        await spawnp(`javac -cp ${INTERPETER_JAR} ${file}`, [], {
            cwd: path.join(__dirname, './fixture/com/nenc/auto/test'),
            stdio: 'inherit'
        });
    } catch (err) {
        console.log('-----------------------');
        console.log(`fail to compile java file ${file}, with jar ${INTERPETER_JAR}`);
        throw err;
    }

    /*
    try {
        // TODO compile test file
        await spawnp(`javac -cp .:${INTERPETER_JAR} ${TEST_MAIN}`, [], {
            cwd: MAIN_DIR,
            stdio: 'inherit'
        });

    } catch (err) {
        console.log('-----------------------');
        console.log(`fail to compile java test file ${TEST_MAIN}`);
        throw err;
    }
    */

    // run java file
    await spawnp(`java -cp .:${INTERPETER_JAR} com.nenc.auto.test.TestMain`, [], {
        cwd: path.join(__dirname, './fixture'),
        stdio: 'inherit'
    });
};

let testJava = async(source, expect) => {
    let code = compile(source, 'java', {
        packageName: 'com.nenc.auto.test',
        className: 'TestMain',
        expect: jsonToJavaPlainCode(expect),
        link: 'test'
    });

    await writeFile(javaFilePath, code, 'utf-8');
    await runNencJavaFile(javaFilePath);
};

let jsonToJavaPlainCode = (json) => {
    if (typeof json === 'string') return JSON.stringify(json);
    if (typeof json === 'number') return `new Double(${json})`;
    if (json === null) return 'null';
    if (typeof json === 'boolean') return json;

    if (Array.isArray(json)) {
        return `new Object [] { ${json.map(jsonToJavaPlainCode).join(', ')} }`;
    } else if (typeof json === 'object') {
        return `listToObject(new Object[] { ${objectToList(json).map(jsonToJavaPlainCode).join(', ')} })`;
    }
};

let objectToList = (obj) => {
    let list = [];
    for (let name in obj) {
        list.push(name);
        list.push(obj[name]);
    }

    return list;
};

const testDataDir = path.join(__dirname, '../../testData');

let testData = {
    'json': path.join(testDataDir, 'json.json'),
    'base': path.join(testDataDir, 'base.json'),
    'abstraction': path.join(testDataDir, 'abstraction.json'),
    'codeBlock': path.join(testDataDir, 'codeBlock.json'),
    'condition': path.join(testDataDir, 'condition.json'),
    'literal': path.join(testDataDir, 'literal.json'),
    'letBinding': path.join(testDataDir, 'letBinding.json'),
    'guard': path.join(testDataDir, 'guard.json')
};

for (let name in testData) {
    let str = fs.readFileSync(testData[name], 'utf-8');
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
}
