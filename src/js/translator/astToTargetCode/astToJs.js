let astToJs = (value) => {
    let type = value.type;

    switch (type) {
        case 'application':
            return `new Sys_Application(${astToJs(value.fun)}, [${value.params.map(astToJs).join(',')}])`
        case 'abstraction':
            return `new Sys_Abstraction([${value.variables.map(astToJs).join(',')}], ${astToJs(value.body)})`;
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

module.exports = astToJs;
