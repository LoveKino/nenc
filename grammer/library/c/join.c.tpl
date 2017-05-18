#include "system.h"

<%= custom_code %>

void* main() {
    void* (*sys_runProgram) (void *);
    void* (*sys_data) (void *);
    void* (*sys_number) (void *);

    sys_runProgram = NencSystemLibrary.sys_runProgram;
    sys_data = NencSystemLibrary.sys_data;
    sys_number = NencSystemLibrary.sys_number;

    void* result = sys_runProgram(<%= middle_code %>);
    printf("%d", result);

    return result;
}
