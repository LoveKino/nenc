#include "system.h"

<%= custom_code %>

int main() {
    void* (*sys_runProgram) (void *);
    void* (*sys_data) (void *);
    void* (*sys_number) (void *);

    sys_runProgram = NencSystemLibrary.sys_runProgram;
    sys_data = NencSystemLibrary.sys_data;
    sys_number = NencSystemLibrary.sys_number;

    sys_runProgram(<%= middle_code %>);
    return 0;
}
