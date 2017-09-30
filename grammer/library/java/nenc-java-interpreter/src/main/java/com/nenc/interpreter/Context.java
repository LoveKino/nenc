package com.nenc.interpreter;

import java.util.HashMap;

public class Context {
    // variable Name to value
    private HashMap<String, IValue> contextMap;
    private Context parent;

    public Context(HashMap<String, IValue> contextMap, Context parent) {
        this.contextMap = contextMap;
        this.parent = parent;
    }

    public class VariableNameContextPair {
        public IValue value;
        public Context context;

        public VariableNameContextPair(IValue value, Context context) {
            this.value = value;
            this.context = context;
        }
    }

    public VariableNameContextPair getVariable(String name) {
        IValue m = this.contextMap.get(name);
        if(m != null) {
           return new VariableNameContextPair(m, this);
        } else {
            if(this.parent == null) {
                throw new Error("Missing definition for variable " + name);
            }
            return this.parent.getVariable(name);
        }
    }

    public void cacheValue(String key, IValue value) {
        this.contextMap.put(key, value);
    }
}