package com.nenc.auto.test;
import java.util.HashMap;
// import interpreter library
import com.nenc.interpreter.*;

public class TestMain {
    public static void main(String[] argv) throws Exception {
        Sys_ModuleFactory moduleFactory = new Sys_ModuleFactory();

        // code from nenc compiling
        moduleFactory.defineModule("/Users/yuer/workspaceforme/work/basis/language/nenc/repl", new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Application(new Sys_Abstraction(new Sys_Variable[] {new Sys_Variable("x")}, new Sys_Application(new Sys_Variable("std::if"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("true"), new ProgramTypes[] {}),new Sys_Abstraction(new Sys_Variable[] {new Sys_Variable("y")}, new Sys_Application(new Sys_Variable("std::if"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("true"), new ProgramTypes[] {}),new Sys_Application(new Sys_Variable("+"), new ProgramTypes[] {new Sys_Variable("x"),new Sys_Variable("y")}),new Sys_Application(new Sys_Variable("std::error"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::string"), new ProgramTypes[] {new Sys_Raw("Fail to match function.")})})})),new Sys_Application(new Sys_Variable("std::error"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::string"), new ProgramTypes[] {new Sys_Raw("Fail to match function.")})})})), new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("3")})}), new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("3")})})})}));

        Object result = moduleFactory.importModule("/Users/yuer/workspaceforme/work/basis/language/nenc/repl");

        // compare result and expectation
        assertJsonEqual(result, new Double(6));
    }

    public static HashMap<String, Object> listToObject(Object[] list) {
        HashMap<String, Object> result = new HashMap<String, Object> ();
        int i = 0;
        while(i < list.length - 1) {
            String key = (String)list[i];
            i++;
            Object value = list[i];
            result.put(key, value);
        }
        return result;
    }

    public static void assertJsonEqual(Object real, Object expect) throws Exception {
        if(real == null) {
            if(expect != null) {
                throw new Exception(notEqualString(real, expect));
            }
        }
        else if(real instanceof Double) {
            if(!(expect instanceof Double)) {
                throw new Exception(notEqualString(real, expect));
            }
            if(!expect.equals(real)) {
                throw new Exception(notEqualString(real, expect));
            }
        } else if(real instanceof String) {
            if(!(expect instanceof String)) {
                throw new Exception(notEqualString(real, expect));
            }
            if(!expect.equals(real)) {
                throw new Exception(notEqualString(real, expect));
            }
        } else if(real instanceof Object[]) {
            if(!(expect instanceof Object[])) {
                throw new Exception(notEqualString(real, expect));
            }
            Object[] realArr = (Object[]) real;
            Object[] expectArr = (Object[]) expect;
            //
            if(realArr.length != expectArr.length) {
                throw new Exception(notEqualString(realArr, expectArr));
            } else {
                for(int i = 0; i < realArr.length; i++) {
                    assertJsonEqual(realArr[i], expectArr[i]);
                }
            }
        } else if(real instanceof HashMap) {
            if(!(expect instanceof HashMap)) {
                throw new Exception(notEqualString(real, expect));
            }
            // TODO
        }
    }

    private static String notEqualString(Object real, Object expect) {
        return "real is not equal to expect. real is " + real + ", expect is " + expect;
    }
}
