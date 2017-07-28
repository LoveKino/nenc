package com.nenc.auto.test;
import java.util.HashMap;
import com.nenc.interpreter.*;

public class Test {
    public Object run() {
        Interpreter interpreter = new Interpreter();

        {HashMap<String, Object> t0 = new HashMap<String, Object>();
Object[] t1 = new Object[1];
t0.put("statements", t1);
HashMap<String, Object> t2 = new HashMap<String, Object>();
t1[0] = t2;
HashMap<String, Object> t3 = new HashMap<String, Object>();
t2.put("expression", t3);
String t4 = "123";
t3.put("value", t4);
String t5 = "number";
t3.put("type", t5);
String t6 = "expression";
t2.put("type", t6);
String t7 = "statements";
t0.put("type", t7);interpreter.defineModule("/Users/yuer/workspaceforme/work/opensource/language/nenc/repl", t0);}

        return interpreter.runProgram("/Users/yuer/workspaceforme/work/opensource/language/nenc/repl");
    }
}
