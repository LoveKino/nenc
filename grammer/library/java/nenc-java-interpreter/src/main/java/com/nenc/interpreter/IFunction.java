package com.nenc.interpreter;

public interface IFunction {
    public Object run(ProgramTypes[] params, Context runtimeCtx);
}
