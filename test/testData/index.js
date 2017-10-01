const path = require('path');
const testDataDir = path.join(__dirname);

module.exports = {
    'json': path.join(testDataDir, 'json.json'),
    'base': path.join(testDataDir, 'base.json'),
    'abstraction': path.join(testDataDir, 'abstraction.json'),
    'codeBlock': path.join(testDataDir, 'codeBlock.json'),
    'condition': path.join(testDataDir, 'condition.json'),
    'literal': path.join(testDataDir, 'literal.json'),
    'letBinding': path.join(testDataDir, 'letBinding.json'),
    'guard': path.join(testDataDir, 'guard.json')
};
