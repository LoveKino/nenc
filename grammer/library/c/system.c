#ifndef NENC_LIBRARY_SYSTEM_C
#define NENC_LIBRARY_SYSTEM_C

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
static void *sys_runProgram (void *program) {
    return NULL;
}

static void* sys_void () {
    return NULL;
}

static void* sys_pair (void* v1, void* v2) {
    return NULL;
}

static void* sys_variable (char* variableName) {
    return NULL;
}

static void* sys_abstraction (void* params, void* body) {
    return NULL;
}

static void* sys_application (void* caller, void* rest) {
    return NULL;
}

/**
 * basic data
 */
static void* sys_data (void *data) {
    return NULL;
}

static void* sys_object (void* obj) {
    return NULL;
}

static void* sys_array (void* arr) {
    return NULL;
}

const struct nencSystemLibrary NencSystemLibrary = {
    .sys_runProgram = sys_runProgram,

    .sys_void = sys_void,
    .sys_pair = sys_pair,

    .sys_variable = sys_variable,
    .sys_abstraction = sys_abstraction,
    .sys_application = sys_application,

    .sys_data = sys_data,
    .sys_object = sys_object,
    .sys_array = sys_array
};

#endif
