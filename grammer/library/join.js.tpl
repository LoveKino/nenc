// require system library
// support to es3
var sys_void, sys_pair, sys_variable, sys_abstraction,
    sys_string, sys_number, sys_true, sys_false, sys_null, sys_object, sys_array;
    
!(function(module) {
    try {
        var _ = (function(){<%= system_code %>})();
        sys_void = _.sys_void; 
        sys_pair = _.sys_pair; 
        sys_variable = _.sys_variable; 
        sys_abstraction = _.sys_abstraction;
        sys_string = _.sys_string; 
        sys_number = _.sys_number; 
        sys_true = _.sys_true; 
        sys_false = _.sys_false; 
        sys_null = _.sys_null; 
        sys_object = _.sys_object; 
        sys_array = _.sys_array;
    }
    catch(err) {
        if(typeof console !== 'undefined') {
            console.log('error happend when try to import system code.');
        }
        throw err;
    }
})();

<%= custom_code %>

<%= middle_code %>
