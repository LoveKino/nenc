#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "system.h"

/**************************************************************
 * provide basic c functions support for pfc middle code
 **************************************************************/

/**************************************************************
 * basic host language interfaces
 **************************************************************/

/**************************************************************
 * main interfaces
 **************************************************************/

void *sys_runProgram (void *program) {
    return NULL;
}

void *sys_data (void *data) {
    return NULL;
}

void *sys_number (void *str) {
    return NULL;
}

const struct nencSystemLibrary NencSystemLibrary = {
    .sys_runProgram = sys_runProgram,
    .sys_data = sys_data,
    .sys_number = sys_number
};
