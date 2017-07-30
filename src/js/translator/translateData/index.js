'use strict';

// TODO stream it
module.exports = (value, target, {
    baseName
} = {}) => {
    if (target === 'js') return JSON.stringify(value);

    if (target === 'java') return translateDataToJava(value, baseName);
};

/**
 * translate json object to java code
 */
let translateDataToJava = (value, baseName = 't') => {
    let stack = [{
        valueNode: value
    }];
    let codeLines = [];
    let count = -1;

    while (stack.length) {
        let {
            valueNode, parentType, parentVarName, index
        } = stack.pop();
        count++;
        let varName = `${baseName}${count}`;

        if (Array.isArray(valueNode)) {
            codeLines.push(`Object[] ${varName} = new Object[${valueNode.length}];`);
            for (let i = 0; i < valueNode.length; i++) {
                stack.push({
                    valueNode: valueNode[i],
                    parentType: 'array',
                    parentVarName: varName,
                    index: i
                });
            }
        } else if (isObject(valueNode)) {
            codeLines.push(`HashMap<String, Object> ${varName} = new HashMap<String, Object>();`);
            for (let name in valueNode) {
                stack.push({
                    valueNode: valueNode[name],
                    parentType: 'hashMap',
                    parentVarName: varName,
                    index: name
                });
            }
        } else if (typeof valueNode === 'number') {
            codeLines.push(`double ${varName} = ${valueNode};`);
        } else if (typeof valueNode === 'boolean') {
            codeLines.push(`Boolean ${varName} = ${valueNode};`);
        } else if (typeof valueNode === 'string') {
            codeLines.push(`String ${varName} = "${valueNode}";`);
        } else if (valueNode === null) {
            codeLines.push(`Object ${varName} = null;`);
        }

        if (parentType === 'hashMap') {
            codeLines.push(`${parentVarName}.put("${index}", ${varName});`);
        } else if (parentType === 'array') {
            codeLines.push(`${parentVarName}[${index}] = ${varName};`);
        }
    }

    return codeLines.join('\n');
};

let isObject = (v) => v && typeof v === 'object';
