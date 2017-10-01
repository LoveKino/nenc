package com.nenc.interpreter;

public class Sys_Variable implements ProgramTypes {
    private String variableName;

    public Sys_Variable(String variableName) {
        this.variableName = variableName;
    }

    public String getVariableName() {
        return this.variableName;
    }

    @Override
    public Object getValue(Context ctx) {
        Object result = null;

        Context.VariableNameContextPair pair = ctx.getVariable(this.variableName);

        if (pair.value instanceof ProgramTypes) {
            result = ((ProgramTypes) pair.value).getValue(ctx);
            pair.context.cacheValue(this.variableName, new PrimitiveValue(result));
        } else {
            result = pair.value.getValue(ctx);
        }

        return result;
    }

    @Override
    public String toString() {
        return this.variableName;
    }
}