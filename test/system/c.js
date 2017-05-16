'use strict';

let {
    compile
} = require('../..');

describe('system.c', () => {
    it('base', () => {
        let cCode = compile(1, 'c');
        console.log(cCode);
    });
});
