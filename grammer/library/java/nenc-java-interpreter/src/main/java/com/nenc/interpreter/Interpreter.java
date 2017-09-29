package com.nenc.interpreter;

import java.util.HashMap;

public class Interpreter {
    private HashMap<String, Module> moduleMap = new HashMap<String, Module>();

    private Object importModule(String name) throws Exception {
        Module module = moduleMap.get(name);
        if(module.getResolved()) {
            return module.getModuleValue();
        } else {
            // run programe and save result
            HashMap<String, Object> moduleCode = (HashMap<String, Object>) module.getModuleCode();
            Object result = Core.runProgram(moduleCode, null);
            module.resolve(result);
            return result;
        }
    }

    public Object runProgram(String modulePath) throws Exception {
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