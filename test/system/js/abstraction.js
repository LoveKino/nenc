'use strict';

let {
    equalJsApp
} = require('../../util');

let testData = {
    'let succ = (x) -> + (x, 1); succ(6)': 7,
    'let test = (x, y) -> {let tmp = + (x, 5); -(y, tmp)}; test(5, 2)': -8,
    'let test = (x) -> {let succ = (x) -> +(x, 1); succ(x)}; test(5)': 6
};

describe('abstraction', () => {
    for (let name in testData) {
        let target = testData[name];
        it(name, () => {
            equalJsApp(name, target);
        });
    }
});
