'use strict';

// TODO stream it
module.exports = (value, target, {
    baseName
} = {}) => {
    if (target === 'js') {
        return translateASTToJs(value);
    };

    if (target === 'java') return translateASTToJava(value, baseName);
};

let translateASTToJs = (value) => {
    let str = astToJs(value);
    return str;
};

let astToJs = (value) => {
    let type = value.type;

    switch (type) {
        case 'application':
            return `new Sys_Application(${astToJs(value.fun)}, [${value.params.map(astToJs).join(',')}])`
        case 'abstraction':
            return `new Sys_Abstraction([${value.variables.map(({variableName}) => JSON.stringify(variableName)).join(',')}], ${astToJs(value.body)})`;
        case 'variable':
            return `new Sys_Variable(${JSON.stringify(value.variableName)})`;
        case 'array':
            return `new Sys_Array([${value.value.map(astToJs).join(',')}])`;

            // virtual mid data structure
        case 'raw':
            return JSON.stringify(value.value);

        default:
            throw new Error(`Unexpected type ${type}, value is ${JSON.stringify(value)}.`);
    }
};


/**
 * translate json object to java code
 */
let translateASTToJava = (value, baseName = 't') => {
    let stack = [{
        valueNode: value
    }];
    let codeLines = [];
    let count = -1;

    while (stack.length) {
        let {
            valueNode,
            parentType,
            parentVarName,
            index
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
