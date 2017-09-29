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
Object[] t4 = new Object[2];
t3.put("value", t4);
HashMap<String, Object> t5 = new HashMap<String, Object>();
t4[1] = t5;
Object[] t6 = new Object[1];
t5.put("statements", t6);
HashMap<String, Object> t7 = new HashMap<String, Object>();
t6[0] = t7;
HashMap<String, Object> t8 = new HashMap<String, Object>();
t7.put("expression", t8);
String t9 = "4";
t8.put("value", t9);
String t10 = "number";
t8.put("type", t10);
String t11 = "expression";
t7.put("type", t11);
String t12 = "statements";
t5.put("type", t12);
HashMap<String, Object> t13 = new HashMap<String, Object>();
t4[0] = t13;
Object[] t14 = new Object[1];
t13.put("statements", t14);
HashMap<String, Object> t15 = new HashMap<String, Object>();
t14[0] = t15;
HashMap<String, Object> t16 = new HashMap<String, Object>();
t15.put("expression", t16);
String t17 = "2";
t16.put("value", t17);
String t18 = "number";
t16.put("type", t18);
String t19 = "expression";
t15.put("type", t19);
String t20 = "statements";
t13.put("type", t20);
String t21 = "array";
t3.put("type", t21);
String t22 = "expression";
t2.put("type", t22);
String t23 = "statements";
t0.put("type", t23);interpreter.defineModule("/Users/yuer/workspaceforme/work/basis/language/nenc/repl", t0);}

        return interpreter.runProgram("/Users/yuer/workspaceforme/work/basis/language/nenc/repl");
    }
}
