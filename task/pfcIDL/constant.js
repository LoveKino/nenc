'use strict';

let path = require('path');

const PFC_IDL_DIR = path.join(__dirname, '../../grammer/translator/pfcIDL');

const PFC_DSL_IDL_PATH = path.join(PFC_IDL_DIR, 'DSL_IDL');

const PFC_MIDDLE_IDL_PATH = path.join(PFC_IDL_DIR, 'MIDDLE_IDL');

module.exports = {
    PFC_DSL_IDL_PATH,
    PFC_MIDDLE_IDL_PATH
};
