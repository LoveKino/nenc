#include "system.h"



void* main() {
    void* (*sys_runProgram) (void *);
    void* (*sys_data) (void *);

    sys_runProgram = NencSystemLibrary.sys_runProgram;
    sys_data = NencSystemLibrary.sys_data;

    void* result = sys_runProgram(sys_exp(sys_data(1)));

    return result;
}
