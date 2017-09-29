package com.nenc.interpreter;

public interface Method extends Variable {
    public Object run(Object[] params) throws Exception;
};
