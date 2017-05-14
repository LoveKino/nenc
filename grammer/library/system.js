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

var Abstraction = function(variables, bodyExp) {
    this.variables = variables;
    this.bodyExp = bodyExp;
};

var isAbstraction = function(v) {
    return v instanceof Abstraction;
};

/**************************************************************
 * main interfaces
 **************************************************************/

var sys_variable = function(varName) {
    return new Variable(varName);
};

var sys_abstraction = function(params, body) {
    var variables = [];
    if (!isVoid(params)) {
        variables = params.getValueList();
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
    return numberStr;
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

    sys_string,
    sys_number,
    sys_true,
    sys_false,
    sys_null,
    sys_object,
    sys_array
};

if (typeof module === 'object' && module) {
    module.exports = result;
}

return result;
