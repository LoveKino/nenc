'use strict';

let astToJs = require('./astToJs');
let astToJava = require('./astToJava');

// TODO stream it
module.exports = (value, target) => {
    if (target === 'js') return astToJs(value);

    if (target === 'java') return astToJava(value);
};
