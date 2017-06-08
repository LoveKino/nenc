'use strict';

module.exports = function(addMetaMethod) {
    addMetaMethod('__', function(a, b) {
        return (a + b) * b;
    });
};
