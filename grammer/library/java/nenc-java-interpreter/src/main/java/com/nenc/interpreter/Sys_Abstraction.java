package com.nenc.interpreter;

import java.util.Arrays;
import java.util.HashMap;

public class Sys_Abstraction implements ProgramTypes {
    private Sys_Variable[] variables;
    private ProgramTypes body;

    public Sys_Abstraction(Sys_Variable[] variables, ProgramTypes body) {
        this.variables = variables;
        this.body = body;
    }

    @Override
    public String toString() {
        String variables = "";
        for (int i = 0; i < this.variables.length; i++) {
            variables += this.variables[i].toString();
        }
        return "[Sys_Abstraction]" + "variables:[" + variables + "]" + "body:" + body.toString();
    }

    @Override
    public Object getValue(Context ctx) {
        return new Abstraction(this.variables, this.body, ctx);
    }

    public static class Abstraction implements IFunction {
        private Sys_Variable[] variables;
        private ProgramTypes body;
        private Context definitionCtx;

        public Abstraction(Sys_Variable[] variables, ProgramTypes body, Context ctx) {
            this.variables = variables;
            this.body = body;
            this.definitionCtx = ctx;
        }

        @Override
        public String toString() {
            String variables = "[  ";
            for (int i = 0; i < this.variables.length; i++) {
                variables += this.variables[i].toString() + "  ";
            }
            variables += "]";

            return "variables" + variables;
        }

        @Override
        public Object run(ProgramTypes[] params, Context runtimeCtx) {
            /**
             * resolve params by runtime context
             * fill params values to variables
             * add new variables as new definition context as abstraction
             */
            HashMap<String, IValue> curVarMap = new HashMap<String, IValue>();
            int argLen = params.length, varLen = this.variables.length;
            int minLen = Math.min(argLen, varLen);

            for (int i = 0; i < minLen; i++) {
                curVarMap.put(this.variables[i].getVariableName(), new LazyCode(params[i], runtimeCtx));
            }

            Context newCtx = new Context(curVarMap, this.definitionCtx);

            if (argLen >= varLen) {
                return this.body.getValue(newCtx);
            } else {
                Sys_Variable[] rest = Arrays.copyOfRange(this.variables, argLen, varLen);
                return new Abstraction(rest, this.body, newCtx);
            }
        }
    }
}