'use strict';

// support to es3
var sys_void, sys_pair,
    sys_module, sys_import,
    sys_application, sys_statements,
    sys_exp, sys_variable, sys_ordinary_abstraction, sys_letBinding, sys_condition,
    sys_runProgram,
    sys_data, sys_object, sys_array, sys_string,
    addMetaMethod;

// require system library
var nencJsInterpreter = require('nenc-js-interpreter');
    
!(function(module) {
    try {
        var _ = nencJsInterpreter;
        sys_void = _.sys_void; 
        sys_pair = _.sys_pair; 

        sys_module = _.sys_module;
        sys_import = _.sys_import;
        sys_letBinding = _.sys_letBinding;
        sys_statements = _.sys_statements;
        sys_exp = _.sys_exp;
        sys_variable = _.sys_variable; 
        sys_ordinary_abstraction = _.sys_ordinary_abstraction;
        sys_application = _.sys_application;
        sys_condition = _.sys_condition;

        sys_data = _.sys_data;
        sys_object = _.sys_object; 
        sys_array = _.sys_array;
        sys_string = _.sys_string;

        sys_runProgram = _.sys_runProgram;
        addMetaMethod = _.addMetaMethod;
    }
    catch(err) {
        if(typeof console !== 'undefined') {
            console.log('error happend when try to import system code.');
        }
        throw err;
    }
})();

try {
<%= libraryImportCode %>
} catch(err) {
    console.log('error happened when try to import library code.');
    throw err;
}

<%= custom_code %>

(function() {
<%= middle_code %>

    var __program__result__ = sys_runProgram("<%= indexPath %>");

    // exports result
    if(typeof module === 'object' && module) {
        module.exports = __program__result__;
    }
    return __program__result__;
})();
