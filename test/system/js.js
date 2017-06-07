'use strict';

let {
    equalJsApp,
    equalJsJson
} = require('../util');

let testData = {
    '+(1, 2)': 3,
    '-(1, 2)': -1,
    '+(1, +(3, 4))': 8,
    '-(1, +(3, 4))': -6,
    '((x, y) -> +(x, -(y, 1)))(3, 4)': 6,
    '((x) -> (y) -> +(x, y))(3)(3)': 6,
    '(() -> 10)()': 10
};

describe('system.js', () => {
    it('json', () => {
        equalJsJson(1);
        equalJsJson(null);
        equalJsJson('abc');
        equalJsJson(true);
        equalJsJson(false);
        equalJsJson({
            a: 1
        });
        equalJsJson([2, 4]);
        equalJsJson({
            a: {
                b: {
                    c: [1, 2, 3]
                }
            }
        });
    });

    for (let name in testData) {
        let target = testData[name];
        it(name, () => {
            equalJsApp(name, target);
        });
    }
});
