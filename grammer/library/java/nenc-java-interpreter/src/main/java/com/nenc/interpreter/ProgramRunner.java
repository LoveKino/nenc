package com.nenc.interpreter;

import java.util.HashMap;

public class ProgramRunner {
    private static Context systemContext = new Context(SystemContextMap.getSystemContextMap(), null);
    public static Object runProgram(ProgramTypes programData, HashMap<String, IValue> contextMap) {
        return programData.getValue(new Context(contextMap, systemContext));
    }
}