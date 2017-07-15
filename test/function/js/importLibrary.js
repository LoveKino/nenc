'use strict';

let {
    equalJsApp
} = require('../../util');

let path = require('path');

describe('import library', () => {
    it('import library', () => {
        equalJsApp('__(10, 20)', 600, {
            library: [path.join(__dirname, './fixture/test0.js')]
        });
    });
});
