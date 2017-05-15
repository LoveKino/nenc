/**
 * provide basic function support for pfc middle code
 */

/**************************************************************
 * basic data container
 **************************************************************/

var Void = {};

var isVoid = function(v) {
    return v === Void;
};

function Pair(v1, v2) {
    this.v1 = v1;
    this.v2 = v2;
}

Pair.prototype.getValueList = function() {
    let result = [];
    if (isPair(this.v1)) {
        result = this.v1.getValueList();
    } else {
        result = [this.v1];
    }

    if (isPair(this.v2)) {
        result = result.concat(this.v2.getValueList());
    } else {
        result.push(this.v2);
    }

    return result;
};

var isPair = function(v) {
    return v instanceof Pair;
};

var Variable = function(variableName) {
    this.variableName = variableName;
};

var isVarible = function(v) {
    return v instanceof Variable;
};

var Abstraction = function(variables, bodyExp, context) {
    // TODO check, avoid repeated variable names
    this.variables = variables;
    this.bodyExp = bodyExp;
    this.context = context || null;

    this.fillMap = {};
    this.indexMap = {};
    this.fillCount = 0;
};

/**
 * fill param value at specific position
 */
var fillAbstractionVariable = function(abstraction, index, value) {
    abstraction.fillMap[index] = value;
    if (!abstraction.indexMap[index]) {
        abstraction.indexMap[index] = true;
        abstraction.fillCount++;
    }
};

/**
 * when all variables are assigned, this abstraction will become reducible
 */
var isAbstractionReducible = function(abstraction) {
    return abstraction.variables.length <= abstraction.fillCount;
};

var isAbstraction = function(v) {
    return v instanceof Abstraction;
};

var Application = function(caller, params) {
    this.caller = caller;
    this.params = params;
};

var isApplication = function(v) {
    return v instanceof Application;
};

var MetaMethod = function(method) {
    this.method = method;
};

var isMetaMethod = function(v) {
    return v instanceof MetaMethod;
};

/****************************************************
 * run program
 *****************************************************/
var sys_runProgram = function(program) {
    return runProgram(program, new Context(defaultContextMap, null));
};

// TODO system methods
var defaultContextMap = {
    '+': new MetaMethod(function(v1, v2) {
        return v1 + v2;
    }),

    '-': new MetaMethod(function(v1, v2) {
        return v1 - v2;
    }),

    '*': new MetaMethod(function(v1, v2) {
        return v1 * v2;
    }),

    '/': new MetaMethod(function(v1, v2) {
        return v1 / v2;
    })
};

var runProgram = function(program, ctx) {
    if (isVarible(program)) {
        return lookupVariable(ctx, program.variableName);
    } else if (isAbstraction(program)) {
        program.context = ctx;
        return program;
    } else if (isApplication(program)) {
        return runApplication(program, ctx);
    } else { // source data
        return program;
    }
};

var Context = function(variableMap, parent) {
    this.parent = parent;
    this.variableMap = variableMap;
};

var runApplication = function(application, ctx) {
    var callerRet = runProgram(application.caller, ctx);

    // TODO system methods
    if (!isAbstraction(callerRet) &&
        !isMetaMethod(callerRet)
    ) {
        throw new Error('Expect function to run application, but got ' + callerRet);
    }

    var paramsRet = [];
    var params = application.params;
    var len = params.length;
    for (var i = 0; i < len; i++) {
        paramsRet.push(runProgram(params[i], ctx));
    }

    // run abstraction
    if (isAbstraction(callerRet)) {
        return runAbstraction(callerRet, paramsRet);
    } else { // meta method
        return runMetaMethod(callerRet, paramsRet);
    }
};

var runMetaMethod = function(metaMethod, paramsRet) {
    return metaMethod.method.apply(undefined, paramsRet);
};

var runAbstraction = function(source, paramsRet) {
    // create a new abstraction
    var abstraction = new Abstraction(source.variables, source.bodyExp, source.context);
    // fill with some params
    for (var i = 0; i < paramsRet.length; i++) {
        fillAbstractionVariable(abstraction, i, paramsRet[i]);
    }

    if (isAbstractionReducible(abstraction)) {
        // take out all variables
        var variables = abstraction.variables;
        var fillMap = abstraction.fillMap;
        var variableMap = {};
        for (var j = 0; j < variables.length; j++) {
            var variableName = variables[j].variableName;
            variableMap[variableName] = fillMap[j];
        }
        // attach variables to context
        var newCtx = new Context(variableMap, source.context);
        // run body expression with new context
        return runProgram(abstraction.bodyExp, newCtx);
    }
    return abstraction;
};

var lookupVariable = function(ctx, variableName) {
    var variableMap = ctx.variableMap;
    // lookup variable map
    var value = variableMap[variableName];
    if (value !== undefined) {
        return value;
    } else {
        if (!ctx.parent) {
            throw new Error('Missing definition for variable ' + variableName);
        } else {
            return lookupVariable(ctx.parent, variableName);
        }
    }
};

/**************************************************************
 * main interfaces
 **************************************************************/

var sys_application = function(caller, rest) {
    var params = [];
    if (!isVoid(rest)) {
        if (isPair(rest)) {
            params = rest.getValueList();
        } else {
            params = [rest];
        }
    }
    return new Application(caller, params);
};

var sys_variable = function(varName) {
    return new Variable(varName);
};

var sys_abstraction = function(params, body) {
    var variables = [];
    if (!isVoid(params)) {
        if (isVarible(params)) {
            variables = [params];
        } else {
            variables = params.getValueList();
        }
    }
    return new Abstraction(variables, body);
};

var sys_void = function() {
    return Void;
};

var sys_pair = function(v1, v2) {
    return new Pair(v1, v2);
};

// composed data types
var sys_object = function(v) {
    if (isVoid(v)) return {};
    // get list of values
    // join to map
    var result = {};
    var list = v.getValueList();
    var i = 0,
        len = list.length;
    while (i < len) {
        var key = list[i];
        var value = list[i + 1];
        result[key] = value;
        i += 2;
    }

    return result;
};

var sys_array = function(v) {
    if (isVoid(v)) return [];
    // get list of values
    // join to list
    return v.getValueList();
};

// basic data types
var sys_string = function(str) {
    return str;
};

var sys_number = function(numberStr) {
    return Number(numberStr);
};

var sys_true = function() {
    return true;
};

var sys_false = function() {
    return false;
};

var sys_null = function() {
    return null;
};

var result = {
    sys_void,
    sys_pair,

    sys_variable,
    sys_abstraction,
    sys_application,

    sys_string,
    sys_number,
    sys_true,
    sys_false,
    sys_null,
    sys_object,
    sys_array,

    sys_runProgram
};

if (typeof module === 'object' && module) {
    module.exports = result;
}

return result;
