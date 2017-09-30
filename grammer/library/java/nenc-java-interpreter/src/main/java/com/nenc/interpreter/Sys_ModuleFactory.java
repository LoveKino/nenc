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

        public Object getValue() {
            if (this.resolve) return this.value;

            this.value = ProgramRunner.runProgram(this.code);
            this.resolve = true;

            return this.value;
        }
    }

    private HashMap<String, ModuleCache> modules;

    public Sys_ModuleFactory() {
        this.modules = new HashMap<String, ModuleCache>();
    }

    public void defineModule(String name, ProgramTypes code) {
        this.modules.put(name, new ModuleCache(code));
    }

    public Object importModule(String name) {
        return this.modules.get(name).getValue();
    }
}