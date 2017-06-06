#ifndef NENC_LIBRARY_SYSTEM_H
#define NENC_LIBRARY_SYSTEM_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct nencSystemLibraryData {
    int type;
    void* content;
};

struct nencSystemLibraryPair {
    void* v1;
    void* v2;
};

struct nencSystemLibrary {
    void* (*sys_runProgram) (void* program);

    void* (*sys_void) ();

    void* (*sys_pair) (void* v1, void* v2);

    void* (*sys_variable) (char* variableName); 

    void* (*sys_abstraction) (void* params, void* body);

    void* (*sys_application) (void* caller, void* rest);

    void* (*sys_data) (void* data);
    
    void* (*sys_object) (void* obj);

    void* (*sys_array) (void* arr);
};

extern const struct nencSystemLibrary NencSystemLibrary;

#endif
