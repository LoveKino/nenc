#ifndef NENC_LIBRARY_SYSTEM_H
#define NENC_LIBRARY_SYSTEM_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct nencSystemLibrary {
    void* (*sys_runProgram) (void *);

    void* (*sys_data) (void *);

    void* (*sys_number) (void *);
};

extern const struct nencSystemLibrary NencSystemLibrary;

#endif
