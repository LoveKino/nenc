package com.nenc.interpreter;

import java.util.HashMap;

/**
 * core algorithm for interpreter
 */
class Core {
    public static Object runProgram(HashMap<String, Object> moduleCode, HashMap<String, Object> ctx) throws Exception {
        String type = (String) moduleCode.get("type");

        if(type == "statements") {
            Object result = null;
            Object[] statements = (Object[]) moduleCode.get("statements");
            for (int i = 0; i < statements.length; i++) {
                result = runProgram((HashMap<String, Object>)statements[i], ctx);
            }
            return result;
        }  else if (type == "expression") {
            return runProgram((HashMap<String, Object>)moduleCode.get("expression"), ctx);
        } else if (type == "number") {
            return Integer.parseInt((String) moduleCode.get("value"));
        } else if (type == "string") {
            return moduleCode.get("value");
        } else if (type == "true") {
            return true;
        } else if (type == "false") {
            return false;
        } else if (type == "object") {
            HashMap<String, Object> result = new HashMap<String, Object>();
            Object[] list = (Object[]) moduleCode.get("value");
            int i = 0;
            while (i < list.length - 1) {
                String key = (String) list[i];
                i++;
                Object value = runProgram((HashMap<String, Object>) list[i], ctx);
                result.put(key, value);
            }
            return result;
        } else if (type == "array") {
            Object[] list = (Object[]) moduleCode.get("value");
            Object[] result = new Object[list.length];
            for (int i = 0; i < list.length; i++) {
                result[i] = runProgram((HashMap<String, Object>)list[i], ctx);
            }
            return result;
        } else if(type == "abstraction") {
            moduleCode.put("context", ctx);
            return moduleCode;
        }  else if (type == "variable") {
            // lookup variable
            HashMap<String, Object> variable = lookupVariable(ctx, (String) moduleCode.get("variableName"));
            if (variable.get("type") == "metaMethod" || variable.get("type") == "lazyMetaMethod") {
                return variable;
            }
            if (variable.get("resolved") != null) {
                return variable.get("value");
            }

            Object variableValue = runProgram((HashMap<String, Object>)variable.get("code"), (HashMap<String, Object>)variable.get("context"));
            variable.put("value", variableValue);
            variable.put("resolved", true);

            return variableValue;
        } else if(type == "application") {
            Object[] params = (Object[]) moduleCode.get("params");
            HashMap<String, Object> fun = (HashMap<String, Object>)runProgram((HashMap<String, Object>) moduleCode.get("fun"), ctx);

            String funType = (String) fun.get("type");
            if(funType == "metaMethod") {
                // for meta method, resolve all params immediately
                Object[] paramRets = new Object[params.length];
                for (int i = 0; i < params.length; i++) {
                    paramRets[i] = runProgram((HashMap<String, Object>) params[i], ctx);
                }
    
                //return applyMethod(fun.method, paramRets);
            } else if(funType == "lazyMetaMethod") {
            } else if (funType == "abstraction") {
            }
        }

        return null;
    }

    public static HashMap<String, Object> lookupVariable(HashMap<String, Object> ctx, String variableName) throws Exception {
        HashMap<String, Object> variableMap = (HashMap<String, Object>) ctx.get("variableMap");

        // lookup variable map
        HashMap<String, Object> value = (HashMap<String, Object>) variableMap.get(variableName);
        if (value != null) {
            return value;
        } else {
            HashMap<String, Object> parent = (HashMap<String, Object>) ctx.get("parent");
            if (parent == null) {
                throw new Exception("Missing definition for variable " + variableName);
            } else {
                return lookupVariable(parent, variableName);
            }
        }
    }
}
