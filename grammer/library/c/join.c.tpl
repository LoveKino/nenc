#include "system.h"

<%= custom_code %>

void* <%= exportName %>() {
    void* (*sys_runProgram) (void *);
    void* (*sys_data) (void *);

    sys_runProgram = NencSystemLibrary.sys_runProgram;
    sys_data = NencSystemLibrary.sys_data;

    void* result = sys_runProgram(<%= middle_code %>);

    return result;
}
