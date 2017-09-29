'use strict';

var sys_module, sys_runProgram, addMetaMethod, Sys_Statements, Sys_Application, Sys_Abstraction, Sys_Variable, Sys_Array, nencModuleFactory;

// require system library
var nencJsInterpreter = require('nenc-js-interpreter');
    
!(function(module) {
    try {
        var _ = nencJsInterpreter;
        sys_module = _.sys_module;
        sys_runProgram = _.sys_runProgram;
        addMetaMethod = _.addMetaMethod;

        Sys_Application = _.Sys_Application;
        Sys_Abstraction = _.Sys_Abstraction;
        Sys_Variable = _.Sys_Variable;
        Sys_Array = _.Sys_Array;
        nencModuleFactory = new _.NencModuleFactory();
    } catch(err) {
        if(typeof console !== 'undefined') {
            console.log('error happend when try to import system code.');
        }
        throw err;
    }
})();

try {
// require libraries
{: join(concatLibraries(libraries, "require('${{library}}')(addMetaMethod);"), "") :}
} catch(err) {
    console.log('error happened when try to import library code.');
    throw err;
}

{: custom_code :}

(function() {
// modules
{: join(concatModuleSources(moduleSources, "nencModuleFactory.defineModule(${{encodeString(filePath)}}, ${{code}});"), "") :}

    var __program__result__ = nencModuleFactory.importModule("{: indexPath :}");

    // exports result
    if(typeof module === 'object' && module) {
        module.exports = __program__result__;
    }
    return __program__result__;
})();
