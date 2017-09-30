package com.nenc.interpreter;

public class ProgramRunner {
    public static Object runProgram(ProgramTypes programData, Context parent) {
        return programData.getValue(new Context(SystemContextMap.getSystemContextMap(), parent));
    }
}
