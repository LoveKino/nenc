package com.nenc.interpreter;

import java.util.HashMap;

/**
 * define nenc module class
 *
 * cache result
 */

public class Module {
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
