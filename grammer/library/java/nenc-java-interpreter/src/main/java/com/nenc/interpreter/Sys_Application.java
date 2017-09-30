package com.nenc.interpreter;

public class Sys_Application implements ProgramTypes {
    private ProgramTypes fun;
    private ProgramTypes[] params;

    public Sys_Application(ProgramTypes fun, ProgramTypes[] params) {
        this.fun = fun;
        this.params = params;
    }

    @Override
    public Object getValue(Context ctx) {
        IFunction funInst = (IFunction) this.fun.getValue(ctx);
        return funInst.run(this.params, ctx);
    }
}