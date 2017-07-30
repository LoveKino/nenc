package com.nenc.interpreter;

import java.util.HashMap;

public class Interpreter {
    private HashMap<String, Module> moduleMap = new HashMap<String, Module>();

    private Object importModule(String name) {
        Module module = moduleMap.get(name);
        if(module.getResolved()) {
            return module.getModuleValue();
        } else {
            // run programe and save result
            HashMap<String, Object> moduleCode = (HashMap<String, Object>)module.getModuleCode();
            Object result = Core.runProgram(moduleCode, null);
            module.resolve(result);
            return result;
        }
    }

    public Object runProgram(String modulePath) {
        return this.importModule(modulePath);
    }

    public void defineModule(String modulePath, Object moduleCode) {
        moduleMap.put(modulePath, new Module(moduleCode));
    }

    public void addMetaMethod() {
    }

    public void addLazyMetaMethod() {
    }
}

/**
 * define nenc module class
 *
 * cache result
 */
class Module {
    private Object moduleCode;
    private boolean resolved = false;
    private Object moduleValue;

    public Module(Object moduleCode) {
        this.moduleCode = moduleCode;
    }

    public boolean getResolved() {
        return this.resolved;
    }

    public void resolve(Object moduleResult) {
        this.resolved = true;
        this.moduleValue = moduleResult;
    }

    public Object getModuleValue() {
        return this.moduleValue;
    }

    public Object getModuleCode() {
        return this.moduleCode;
    }
}

/**
 * core algorithm for interpreter
 */
class Core {
    public static Object runProgram(HashMap<String, Object> moduleCode, HashMap<String, Object> ctx) {
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
        }

        return null;
    }
}
