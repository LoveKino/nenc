package com.nenc.interpreter;

public class LazyCode implements ProgramTypes{
    private ProgramTypes code;
    private Context context;

    // for Lazy Evaluation, fix the context.
    public LazyCode(ProgramTypes code, Context context) {
        this.code = code;
        this.context = context;
    }

    @Override
    public Object getValue(Context ctx) {
        return this.code.getValue(this.context);
    }

    @Override
    public String toString() {
        return "[LazyCode]" + "context: " + context.toString() + ", code" + code.toString();
    }
}