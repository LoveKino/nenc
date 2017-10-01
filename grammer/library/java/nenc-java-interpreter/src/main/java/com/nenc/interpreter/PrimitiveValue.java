package com.nenc.interpreter;

public class PrimitiveValue implements IValue {
    private Object value;
    public PrimitiveValue(Object value) {
        this.value = value;
    }

    @Override
    public Object getValue(Context ctx) {
        return this.value;
    }

    @Override
    public String toString() {
        return "[PrimitiveValue]" + value.toString();
    };
}
