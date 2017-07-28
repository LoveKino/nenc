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
            Object moduleCode = module.getModuleCode();
            Object result = Core.runProgram(moduleCode);
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
    public static Object runProgram(Object moduleCode) {
        return null;
    }
}
