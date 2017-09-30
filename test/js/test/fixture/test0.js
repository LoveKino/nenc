'use strict';

module.exports = function({
    Sys_Abstraction,
    Sys_Variable
}) {
    return {
        '__': new Sys_Abstraction([
            new Sys_Variable('a'),
            new Sys_Variable('b')
        ], {
            getValue: (ctx) => {
                var a = ctx.lookupVariable('a').value.getValue(ctx);
                var b = ctx.lookupVariable('b').value.getValue(ctx);

                return (a + b) * b;
            }
        })
    }
};
