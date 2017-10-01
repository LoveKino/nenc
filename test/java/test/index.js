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
const TEST_MAIN = path.join(__dirname, './fixture/TestMain.java');
const MAIN_DIR = path.join(__dirname, './fixture');

let runNencJavaFile = async(file) => {
    try {
        // compile java file
        await spawnp(`javac -cp ${INTERPETER_JAR} ${file}`, [], {
            cwd: MAIN_DIR,
            stdio: 'inherit'
        });
    } catch (err) {
        console.log('-----------------------');
        console.log(`fail to compile java file ${file}, with jar ${INTERPETER_JAR}`);
        throw err;
    }

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
        expect: jsonToJavaPlainCode(expect)
    })(tplStr);

    await writeFile(TEST_MAIN, testMainJava, 'utf-8');
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
