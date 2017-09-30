let astToJava = (value) => {
    let type = value.type;

    switch (type) {
        case 'application':
            return `new Sys_Application(${astToJava(value.fun)}, new ProgramTypes[] {${value.params.map(astToJava).join(',')}})`
        case 'abstraction':
            return `new Sys_Abstraction(new Sys_Variable[] {${value.variables.map(astToJava).join(',')}}, ${astToJava(value.body)})`;
        case 'variable':
            return `new Sys_Variable(${JSON.stringify(value.variableName)})`;
        case 'array':
            return `new Sys_Array(new ProgramTypes[] {${value.value.map(astToJava).join(',')}})`;

            // virtual mid data structure
        case 'raw':
            return `new Sys_Raw(${JSON.stringify(value.value)})`;

        default:
            throw new Error(`Unexpected type ${type}, value is ${JSON.stringify(value)}.`);
    }
};

module.exports = astToJava;
