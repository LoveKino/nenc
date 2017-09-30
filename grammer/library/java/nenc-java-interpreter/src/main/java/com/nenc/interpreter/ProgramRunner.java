package com.nenc.interpreter;

public class ProgramRunner {
    public static Object runProgram(ProgramTypes programData) {
        return programData.getValue(SystemContext.getSystemContext());
    }
}
