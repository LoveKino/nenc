package com.nenc.auto.test;
import java.util.HashMap;
import com.nenc.interpreter.*;

public class Test {
    public Object run() {
        // TODO Library import
        Sys_ModuleFactory moduleFactory = new Sys_ModuleFactory();

        moduleFactory.defineModule("/Users/yuer/workspaceforme/work/basis/language/nenc/repl", new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Abstraction(new Sys_Variable[] {new Sys_Variable("f")}, new Sys_Application(new Sys_Variable("std::if"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("true"), new ProgramTypes[] {}),new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("f"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("16")}),new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("2")})})})}),new Sys_Application(new Sys_Variable("std::error"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::string"), new ProgramTypes[] {new Sys_Raw("Fail to match function.")})})})), new ProgramTypes[] {new Sys_Abstraction(new Sys_Variable[] {new Sys_Variable("x"),new Sys_Variable("y")}, new Sys_Application(new Sys_Variable("std::if"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("<"), new ProgramTypes[] {new Sys_Variable("x"),new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("0")})}),new Sys_Application(new Sys_Variable("+"), new ProgramTypes[] {new Sys_Variable("x"),new Sys_Variable("y")}),new Sys_Application(new Sys_Variable("std::if"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("<"), new ProgramTypes[] {new Sys_Variable("x"),new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("10")})}),new Sys_Application(new Sys_Variable("-"), new ProgramTypes[] {new Sys_Variable("x"),new Sys_Variable("y")}),new Sys_Application(new Sys_Variable("std::if"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("<"), new ProgramTypes[] {new Sys_Variable("x"),new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("20")})}),new Sys_Application(new Sys_Variable("*"), new ProgramTypes[] {new Sys_Variable("x"),new Sys_Variable("y")}),new Sys_Application(new Sys_Variable("std::error"), new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::string"), new ProgramTypes[] {new Sys_Raw("Fail to match function.")})})})})}))})})}));

        return moduleFactory.importModule("/Users/yuer/workspaceforme/work/basis/language/nenc/repl");
    }
}
