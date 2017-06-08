'use strict';

let {
    grammerTxtPath,
    grammerPath,
} = require('./grammerResource');

let {
    generateGrammer
} = require('./util');

module.exports = () => {
    return generateGrammer(grammerTxtPath, grammerPath);
};
