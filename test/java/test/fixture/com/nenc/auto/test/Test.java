package com.nenc.auto.test;
import java.util.HashMap;
import com.nenc.interpreter.*;

public class Test {
    public Object run() {
        Sys_ModuleFactory moduleFactory = new Sys_ModuleFactory();

        moduleFactory.defineModule("/Users/yuer/workspaceforme/work/basis/language/nenc/repl", new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::object"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::string"), new ProgramTypes[] {new Sys_Raw("a")}),new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::object"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::string"), new ProgramTypes[] {new Sys_Raw("b")}),new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::object"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::string"), new ProgramTypes[] {new Sys_Raw("c")}),new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("1")})})}),new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("2")})})}),new Sys_Application(new Sys_Variable("std::statements"), new ProgramTypes[] {new Sys_Array(new ProgramTypes[] {new Sys_Application(new Sys_Variable("std::number"), new ProgramTypes[] {new Sys_Raw("3")})})})})})})})})})})})})})})})})})}));

        return moduleFactory.importModule("/Users/yuer/workspaceforme/work/basis/language/nenc/repl");
    }
}
