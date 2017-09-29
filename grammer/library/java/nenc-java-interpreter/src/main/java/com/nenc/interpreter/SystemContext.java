package com.nenc.interpreter;

import java.util.HashMap;

/**
 * define system context
 */
public class SystemContext {
    // default context
    private static Context systemContext;
    static {
        HashMap<String, Variable> systemContextMap =  new HashMap<String, Variable>();
        systemContextMap.put("+", new Method() {
            public Object run(Object[] params) throws Exception {
                Object t1 = params[0];
                Object t2 = params[1];
                if(t1 instanceof Double && t2 instanceof Double) {
                    return (Double) t1 + (Double) t2;
                }

                if(t1 instanceof String && t2 instanceof String) {
                    return (String) t1 + (String) t2;
                }

                throw new Exception("unmatching param types for function +.");
            }
        });

        systemContextMap.put("-", new Method() {
            public Object run(Object[] params) throws Exception {
                Object t1 = params[0];
                Object t2 = params[1];
                if(t1 instanceof Double && t2 instanceof Double) {
                    return (Double) t1 - (Double) t2;
                }

                throw new Exception("unmatching param types for function -.");
            }
        });

        systemContext = new Context(systemContextMap, null);
    }

    public static Context getSystemContext() {
        return systemContext;
    }
}