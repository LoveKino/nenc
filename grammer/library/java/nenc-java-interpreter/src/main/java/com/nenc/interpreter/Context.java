package com.nenc.interpreter;

import java.util.HashMap;

public class Context {
    private HashMap<String, Variable> contextMap;
    private Context parent;

    public Context(HashMap<String, Variable> contextMap, Context parent) {
        this.contextMap = contextMap;
        this.parent = parent;
    }

    public Variable getVariable(String name) {
        Variable m = this.contextMap.get(name);
        if(m != null) {
            return m;
        } else {
            return this.parent.getVariable(name);
        }
    }
}