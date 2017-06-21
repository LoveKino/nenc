'use strict';

let {
    equalJsApp,
    equalJsJson
} = require('../../util');

let path = require('path');

let testData = {
    '[1, +(1, 1)]': [1, 2],
    '[{+(1, 2)}, {"a": 1}]': [3, {
        a: 1
    }],
    '{"a": +(3, 2)}': {
        a: 5
    },
    '{"a": {+(4, 5); 10}}': {
        a: 10
    }
};

describe('literal', () => {
    for (let name in testData) {
        let target = testData[name];
        it(name, () => {
            equalJsApp(name, target);
        });
    }
});
