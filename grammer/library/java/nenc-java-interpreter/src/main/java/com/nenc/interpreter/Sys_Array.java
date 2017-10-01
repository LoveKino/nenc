package com.nenc.interpreter;

public class Sys_Array implements ProgramTypes {
    private ProgramTypes[] list;

    public Sys_Array(ProgramTypes[] list) {
        this.list = list;
    }

    @Override
    public Object getValue(Context ctx) {
        Object[] result = new Object[this.list.length];
        for (int i = 0; i < this.list.length; i++) {
            result[i] = this.list[i].getValue(ctx);
        }
        return result;
    }
}
