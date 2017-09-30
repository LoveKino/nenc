package com.nenc.interpreter;

public class Sys_Raw implements ProgramTypes {
    private Object value;

    public Sys_Raw(Object value) {
        this.value = value;
    }

    @Override
    public Object getValue(Context ctx) {
        return this.value;
    }
}
