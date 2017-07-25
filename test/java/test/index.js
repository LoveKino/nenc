'use strict';

let {compile} = require('../../../');

describe('java:index', () => {
    it('test', () => {
        let code = compile('123', 'java');

        console.log(code);
    });
});
