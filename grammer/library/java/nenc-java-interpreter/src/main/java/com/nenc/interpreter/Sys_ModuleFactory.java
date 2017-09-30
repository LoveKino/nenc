package com.nenc.interpreter;

import java.util.HashMap;

public class Sys_ModuleFactory {
    public static class ModuleCache {
        private ProgramTypes code;
        private Object value;
        private boolean resolve;

        public ModuleCache(ProgramTypes code) {
            this.code = code;
            this.value = null;
            this.resolve = false;
        }

        public Object getValue(Sys_ModuleFactory moduleFactory) {
            if (this.resolve) return this.value;

            this.value = ProgramRunner.runProgram(this.code, moduleFactory.moduleContext);
            this.resolve = true;

            return this.value;
        }
    }

    private HashMap<String, ModuleCache> modules;
    private Context moduleContext;

    public Sys_ModuleFactory() {
        this.modules = new HashMap<String, ModuleCache>();
        HashMap<String, IValue> moduleContextMap = new HashMap<String, IValue>();
        moduleContextMap.put("std::getModule", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("modulePath")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                String modulePath = (String) ctx.getVariable("modulePath").value.getValue(ctx);
                return Sys_ModuleFactory.this.importModule(modulePath);
            }
        }));

        this.moduleContext = new Context(moduleContextMap, null);
    }

    public void defineModule(String name, ProgramTypes code) {
        this.modules.put(name, new ModuleCache(code));
    }

    public Object importModule(String name) {
        return this.modules.get(name).getValue(this);
    }
}