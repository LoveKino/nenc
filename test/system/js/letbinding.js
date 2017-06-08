'use strict';

let {
    equalJsApp,
} = require('../../util');

let insideFun = `let x = 1;
let f = (y) -> {
    let insideFun = (v, u) -> + (v, u);
    insideFun(x, y);
};

let c = f(10);

+ (c, f(1));
`;

let testData = {
    // let binding
    'let x = 1; +(x, 1)': 2,
    'let x = 1, y = 2; + (x, y)': 3,
    'let x = 1; let z = + (x, 1); z': 2,
    'let x = 1; let y = () -> + (x, 1); y()': 2,
    [insideFun]: 13
};

describe('letbinding', () => {
    for (let name in testData) {
        let target = testData[name];
        it(name, () => {
            equalJsApp(name, target);
        });
    }
});
