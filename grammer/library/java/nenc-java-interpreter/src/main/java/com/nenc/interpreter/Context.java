package com.nenc.interpreter;

import java.util.HashMap;
import java.util.Iterator;

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
        return this.findVariable(name, this);
    }

    private VariableNameContextPair findVariable(String name, Context source) {
        IValue m = this.contextMap.get(name);
        if (m != null) {
            return new VariableNameContextPair(m, this);
        } else {
            if (this.parent == null) {
                throw new Error("Missing definition for variable " + name + ". Context Chain is: " + source.getContextChainInfo());
            }
            return this.parent.findVariable(name, source);
        }
    }

    public String getContextChainInfo() {
        String parentInfo = "";
        if (this.parent != null) {
            parentInfo = this.parent.getContextChainInfo();
        }

        return parentInfo + "->" + this.getContextInfo();
    }

    public String getContextInfo() {
        Iterator it = this.contextMap.entrySet().iterator();

        String cur = "[  ";

        while (it.hasNext()) {
            HashMap.Entry pair = (HashMap.Entry) it.next();
            String key = (String) pair.getKey();
            cur += key + "  ";
        }
        cur += "]";

        return cur;
    }

    @Override
    public String toString() {
        return "[Context]" + this.getContextChainInfo();
    }

    public void cacheValue(String key, IValue value) {
        this.contextMap.put(key, value);
    }
}