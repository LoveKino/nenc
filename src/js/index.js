'use strict';

let processer = require('./processer');
let path = require('path');

// for test, a better way is to compile from stream
let compile = (str, target, opts) => {
    let virtualFilePath = path.join(process.cwd(), 'repl');
    let {
        handleChunk, assembleWithTpl
    } = processer(target, opts, {
        currentFile: virtualFilePath
    });
    handleChunk(str);

    return assembleWithTpl([{
        filePath: virtualFilePath,
        code: handleChunk(null)
    }], virtualFilePath);
};

/**
 * only support for nodeJs, not for browser
 */
let compileFile = (indexPath, target, opts) => {
    let tasks = {},
        count = 0,
        moduleSources = [];

    let errored = false;
    let cwd = process.cwd();
    indexPath = path.resolve(cwd, indexPath);

    let {
        assembleWithTpl
    } = processer(target, opts);

    return new Promise((resolve, reject) => {
        let loadModule = (modulePath) => {
            if (errored) return;

            tasks[modulePath] = compileFileTask(modulePath, target, opts, {
                loadModule
            });
            count++;

            tasks[modulePath].then((moduleCode) => {
                moduleSources.push({
                    code: moduleCode,
                    filePath: modulePath
                });
                count--;
                delete tasks[modulePath];

                if (count === 0) {
                    resolve(assembleWithTpl(moduleSources, indexPath));
                }
            }).catch(err => {
                count--;
                delete tasks[modulePath];
                errored = true;
                reject(err);
            });
        };

        loadModule(indexPath);
    });
};

// TODO max io configuration
let compileFileTask = (filePath, target, opts, {
    loadModule
}) => {
    let {
        handleChunk
    } = processer(target, opts, {
        loadModule, currentFile: filePath
    });

    let fs = eval('require("fs")');

    let stream = fs.createReadStream(filePath, {
        encoding: 'utf-8',
        autoClose: true
    });

    return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => {
            try {
                let part = chunk.toString();
                // compile those part string
                handleChunk(part);
            } catch (err) {
                reject(err);
            }
        });

        stream.on('end', () => {
            try {
                let ret = handleChunk(null);
                resolve(ret);
            } catch (err) {
                reject(err);
            }
        });

        stream.on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = {
    processer,
    compile,
    compileFile
};
