#ifndef NENC_LIBRARY_SYSTEM_H
#define NENC_LIBRARY_SYSTEM_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct nencSystemLibrary {
    void* (*sys_runProgram) (void* program);

    void* (*sys_void) (void* value);

    void* (*sys_pair) (void* v1, void* v2);

    void* (*sys_variable) (char* variableName); 

    void* (*sys_abstraction) (void* params, void* body);
    void* (*sys_application) (void* caller, void* rest);

    void* (*sys_data) (void*);
    
    void* (*sys_object) (void*);

    void* (*sys_array) (void*);

    void* (*sys_string) (void*);

    void* (*sys_number) (void*);

    void* (*sys_true) (void*);
    
    void* (*sys_false) (void*);

    void* (*sys_null) (void*);
};

extern const struct nencSystemLibrary NencSystemLibrary;

#endif
