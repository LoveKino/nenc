'use strict';

let {
    equalJsApp
} = require('../../util');

let testData = {
    '1? 2: 3': '2',
    '0? 2: 3': '3',
    '-(2, 2)? +(2, 3): {let a = 1; a}': 1,
    '1? 1? 4: 5 : 3': 4,
    '1? 0? 4: 5 : 3': 5,
    '1? {2? 4: null} : null': 4
};

describe('condition', () => {
    for (let name in testData) {
        let target = testData[name];
        it(name, () => {
            equalJsApp(name, target);
        });
    }
});
