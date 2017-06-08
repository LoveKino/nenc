'use strict';

let {
    equalJsApp,
} = require('../../util');

let testData = {
    // let binding
    'let x = 1; +(x, 1)': 2,
    'let x = 1, y = 2; + (x, y)': 3,
    'let x = 1; let z = + (x, 1); z': 2,
    'let x = 1; let y = () -> + (x, 1); y()': 2
};

describe('letbinding', () => {
    for (let name in testData) {
        let target = testData[name];
        it(name, () => {
            equalJsApp(name, target);
        });
    }
});
