'use strict';

let {
    equalJsApp
} = require('../../util');

let code1 = `
let f = (x, y) -> +(x, y), >(x, 0)
      | (x, y) -> -(x, y);
f(1, 2);`;

let code2 = `
let f = (x, y) -> +(x, y), >(x, 0)
      | (x, y) -> -(x, y);

f(-1, 2);`;

let code3 = `
let f = (x, y) -> +(x, y), <(x, 0)
      | (x, y) -> -(x, y), <(x, 10)
      | (x, y) -> *(x, y), <(x, 20);

f(16, 2);`;

let testData = {
    [code1]: 3,
    [code2]: -3,
    [code3]: 32
};

describe('guard', () => {
    for (let name in testData) {
        let target = testData[name];
        it(name, () => {
            equalJsApp(name, target);
        });
    }
});
