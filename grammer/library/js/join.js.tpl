'use strict';

// support to es3
var sys_void, sys_pair,
    sys_module, sys_import,
    sys_application, sys_statements,
    sys_guarded_abstraction, sys_guarded_abstraction_line,
    sys_exp, sys_variable, sys_ordinary_abstraction, sys_letBinding, sys_condition,
    sys_runProgram,
    sys_data, sys_object, sys_array, sys_string,
    addMetaMethod;

// require system library
var nencJsInterpreter = require('nenc-js-interpreter');
    
!(function(module) {
    try {
        var _ = nencJsInterpreter;
        var dsl = _.sys_programDSL;
        sys_void = dsl.sys_void; 
        sys_pair = dsl.sys_pair; 

        sys_import = dsl.sys_import;
        sys_letBinding = dsl.sys_letBinding;
        sys_statements = dsl.sys_statements;
        sys_exp = dsl.sys_exp;
        sys_variable = dsl.sys_variable; 
        sys_ordinary_abstraction = dsl.sys_ordinary_abstraction;
        sys_application = dsl.sys_application;
        sys_condition = dsl.sys_condition;

        sys_guarded_abstraction = dsl.sys_guarded_abstraction, 
        sys_guarded_abstraction_line = dsl.sys_guarded_abstraction_line,

        sys_data = dsl.sys_data;
        sys_object = dsl.sys_object; 
        sys_array = dsl.sys_array;
        sys_string = dsl.sys_string;

        //
        sys_module = _.sys_module;
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
