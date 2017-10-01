package com.nenc.interpreter;

import java.util.HashMap;

public class SystemContextMap {
    private static HashMap<String, IValue> systemContextMap = initSystemContext();

    private SystemContextMap() {
    }

    public static boolean toBool(Object obj) {
        if (obj instanceof Boolean) return (boolean) obj;
        if (obj instanceof Integer) return !((Integer) obj).equals(0);
        if (obj instanceof String) return !((String) obj).equals("");
        if (obj instanceof Double) return !((Double) obj).equals(0.0);
        if (obj instanceof Float) return !((Float) obj).equals(0);
        return !obj.equals(null);
    }

    private static HashMap<String, IValue> initSystemContext() {
        HashMap<String, IValue> variableMap = new HashMap<>();

        // true
        variableMap.put("true", new Sys_Abstraction(new Sys_Variable[]{}, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                return true;
            }
        }));

        // false
        variableMap.put("false", new Sys_Abstraction(new Sys_Variable[]{}, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                return false;
            }
        }));

        // null
        variableMap.put("null", new Sys_Abstraction(new Sys_Variable[]{}, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                return null;
            }
        }));

        // +
        variableMap.put("+", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("v1"),
                new Sys_Variable("v2")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                double v1 = (double) ctx.getVariable("v1").value.getValue(ctx);
                double v2 = (double) ctx.getVariable("v2").value.getValue(ctx);

                return v1 + v2;
            }
        }));

        // -
        variableMap.put("-", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("v1"),
                new Sys_Variable("v2")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                double v1 = (double) ctx.getVariable("v1").value.getValue(ctx);
                double v2 = (double) ctx.getVariable("v2").value.getValue(ctx);

                return v1 - v2;
            }
        }));

        // *
        variableMap.put("*", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("v1"),
                new Sys_Variable("v2")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                double v1 = (double) ctx.getVariable("v1").value.getValue(ctx);
                double v2 = (double) ctx.getVariable("v2").value.getValue(ctx);

                return v1 * v2;
            }
        }));

        // /
        variableMap.put("/", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("v1"),
                new Sys_Variable("v2")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                double v1 = (double) ctx.getVariable("v1").value.getValue(ctx);
                double v2 = (double) ctx.getVariable("v2").value.getValue(ctx);

                return v1 / v2;
            }
        }));

        // >
        variableMap.put(">", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("v1"),
                new Sys_Variable("v2")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                double v1 = (double) ctx.getVariable("v1").value.getValue(ctx);
                double v2 = (double) ctx.getVariable("v2").value.getValue(ctx);

                return v1 > v2;
            }
        }));

        // >
        variableMap.put("<", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("v1"),
                new Sys_Variable("v2")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                double v1 = (double) ctx.getVariable("v1").value.getValue(ctx);
                double v2 = (double) ctx.getVariable("v2").value.getValue(ctx);

                return v1 < v2;
            }
        }));

        // &&
        variableMap.put("&&", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("v1"),
                new Sys_Variable("v2")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                boolean v1 = toBool(ctx.getVariable("v1").value.getValue(ctx));
                if (!v1) return false;
                return toBool(ctx.getVariable("v2").value.getValue(ctx));
            }
        }));

        // ||
        variableMap.put("||", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("v1"),
                new Sys_Variable("v2")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                boolean v1 = toBool(ctx.getVariable("v1").value.getValue(ctx));
                if (v1) return true;
                return toBool(ctx.getVariable("v2").value.getValue(ctx));
            }
        }));

        // std::if
        variableMap.put("std::if", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("c"),
                new Sys_Variable("p1"),
                new Sys_Variable("p2")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                boolean c = toBool(ctx.getVariable("c").value.getValue(ctx));
                if (c) {
                    return ctx.getVariable("p1").value.getValue(ctx);
                } else {
                    return ctx.getVariable("p2").value.getValue(ctx);
                }
            }
        }));

        // std::error
        variableMap.put("std::error", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("error")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                throw new Error((String) ctx.getVariable("error").value.getValue(ctx));
            }
        }));

        // std::number
        variableMap.put("std::number", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("num")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                String numStr = (String) ctx.getVariable("num").value.getValue(ctx);
                return Double.parseDouble(numStr);
            }
        }));

        // std::string
        variableMap.put("std::string", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("str")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                return (String) ctx.getVariable("str").value.getValue(ctx);
            }
        }));

        // std::object
        variableMap.put("std::object", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("list")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                Object[] list = (Object[]) ctx.getVariable("list").value.getValue(ctx);
                HashMap<String, Object> result = new <String, Object>HashMap();
                int i = 0;
                while (i < list.length - 1) {
                    String key = (String) list[i];
                    i++;
                    Object value = list[i];
                    result.put(key, value);
                }
                return result;
            }
        }));

        // std::object
        variableMap.put("std::statements", new Sys_Abstraction(new Sys_Variable[]{
                new Sys_Variable("statements")
        }, new ProgramTypes() {
            @Override
            public Object getValue(Context ctx) {
                Object[] statements = (Object[]) ctx.getVariable("statements").value.getValue(ctx);
                Object result = null;
                for (int i = 0; i < statements.length; i++) {
                    result = statements[i];
                }
                return result;
            }
        }));

        return variableMap;
    }

    public static HashMap<String, IValue> getSystemContextMap() {
        return systemContextMap;
    }
}
