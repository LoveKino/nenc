'use strict';

let {
    equalJsApp
} = require('../../util');

let testData = {
    '{10}': 10,
    '{let a = 1; + (a, 10)}': 11,
    '{(x) -> +(x, 1); -(3, 2)}': 1,
    'let a = {let b = 3; + (b, 5)}; a': 8
};

describe('system.js', () => {
    for (let name in testData) {
        let target = testData[name];
        it(name, () => {
            equalJsApp(name, target);
        });
    }
});
