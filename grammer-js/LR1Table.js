module.exports = {
    "GOTO": [
        {
            "S": 10,
            "EXP": 11,
            "APPLICATION": 12,
            "CALLER": 13,
            "ABSTRACTION": 14,
            "JSON": 15,
            "OBJECT": 16,
            "ARRAY": 17
        },
        {},
        {
            "ABSTRACTION": 21,
            "LIST_VARIABLES": 22
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 25
        },
        {
            "JSON": 34,
            "OBJECT": 35,
            "ARRAY": 36,
            "LIST_VALUES": 37
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "LIST_VARIABLES": 41
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 48
        },
        {
            "JSON": 34,
            "OBJECT": 35,
            "ARRAY": 36,
            "LIST_VALUES": 50
        },
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 63,
            "APPLICATION": 64,
            "CALLER": 65,
            "EXP_LIST": 66,
            "ABSTRACTION": 67,
            "JSON": 68,
            "OBJECT": 69,
            "ARRAY": 70
        },
        {
            "LIST_VARIABLES": 71
        },
        {},
        {},
        {
            "EXP": 74,
            "APPLICATION": 12,
            "CALLER": 13,
            "ABSTRACTION": 14,
            "JSON": 15,
            "OBJECT": 16,
            "ARRAY": 17
        },
        {},
        {},
        {
            "JSON": 83,
            "OBJECT": 84,
            "ARRAY": 85
        },
        {},
        {},
        {},
        {},
        {},
        {
            "JSON": 34,
            "OBJECT": 35,
            "ARRAY": 36,
            "LIST_VALUES": 88
        },
        {},
        {},
        {
            "ABSTRACTION": 21,
            "LIST_VARIABLES": 90
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 92
        },
        {
            "JSON": 34,
            "OBJECT": 35,
            "ARRAY": 36,
            "LIST_VALUES": 94
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 107,
            "APPLICATION": 108,
            "CALLER": 109,
            "ABSTRACTION": 110,
            "JSON": 111,
            "OBJECT": 112,
            "ARRAY": 113
        },
        {},
        {},
        {
            "EXP": 115,
            "APPLICATION": 12,
            "CALLER": 13,
            "ABSTRACTION": 14,
            "JSON": 15,
            "OBJECT": 16,
            "ARRAY": 17
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 117
        },
        {
            "JSON": 34,
            "OBJECT": 35,
            "ARRAY": 36,
            "LIST_VALUES": 119
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 63,
            "APPLICATION": 64,
            "CALLER": 65,
            "EXP_LIST": 125,
            "ABSTRACTION": 67,
            "JSON": 68,
            "OBJECT": 69,
            "ARRAY": 70
        },
        {
            "EXP": 63,
            "APPLICATION": 64,
            "CALLER": 65,
            "EXP_LIST": 127,
            "ABSTRACTION": 67,
            "JSON": 68,
            "OBJECT": 69,
            "ARRAY": 70
        },
        {},
        {},
        {
            "ABSTRACTION": 21,
            "LIST_VARIABLES": 41
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 129
        },
        {
            "JSON": 34,
            "OBJECT": 35,
            "ARRAY": 36,
            "LIST_VALUES": 131
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 133,
            "APPLICATION": 108,
            "CALLER": 109,
            "ABSTRACTION": 110,
            "JSON": 111,
            "OBJECT": 112,
            "ARRAY": 113
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 136
        },
        {
            "EXP": 137,
            "APPLICATION": 64,
            "CALLER": 65,
            "ABSTRACTION": 67,
            "JSON": 68,
            "OBJECT": 69,
            "ARRAY": 70
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 63,
            "APPLICATION": 64,
            "CALLER": 65,
            "EXP_LIST": 143,
            "ABSTRACTION": 67,
            "JSON": 68,
            "OBJECT": 69,
            "ARRAY": 70
        },
        {},
        {},
        {},
        {},
        {},
        {
            "EXP": 144,
            "APPLICATION": 64,
            "CALLER": 65,
            "ABSTRACTION": 67,
            "JSON": 68,
            "OBJECT": 69,
            "ARRAY": 70
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ],
    "ACTION": [
        {
            "variable": {
                "type": "shift",
                "state": 1
            },
            "string": {
                "type": "shift",
                "state": 3
            },
            "number": {
                "type": "shift",
                "state": 4
            },
            "true": {
                "type": "shift",
                "state": 5
            },
            "false": {
                "type": "shift",
                "state": 6
            },
            "null": {
                "type": "shift",
                "state": 7
            },
            "(": {
                "type": "shift",
                "state": 2
            },
            "{": {
                "type": "shift",
                "state": 8
            },
            "[": {
                "type": "shift",
                "state": 9
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "variable"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 20
            },
            "variable": {
                "type": "shift",
                "state": 18
            },
            "(": {
                "type": "shift",
                "state": 19
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 24
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 33
            },
            "string": {
                "type": "shift",
                "state": 26
            },
            "number": {
                "type": "shift",
                "state": 27
            },
            "true": {
                "type": "shift",
                "state": 28
            },
            "false": {
                "type": "shift",
                "state": 29
            },
            "null": {
                "type": "shift",
                "state": 30
            },
            "{": {
                "type": "shift",
                "state": 31
            },
            "[": {
                "type": "shift",
                "state": 32
            }
        },
        {
            "$": {
                "type": "accept"
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "S",
                    [
                        "EXP"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "APPLICATION"
                    ]
                ]
            }
        },
        {
            "(": {
                "type": "shift",
                "state": 38
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "LIST_VARIABLES",
                    [
                        "variable"
                    ]
                ]
            },
            ",": {
                "type": "shift",
                "state": 39
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 40
            },
            "variable": {
                "type": "shift",
                "state": 18
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 42
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 43
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 44
            }
        },
        {
            "colon": {
                "type": "shift",
                "state": 45
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 46
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 47
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 49
            },
            "string": {
                "type": "shift",
                "state": 26
            },
            "number": {
                "type": "shift",
                "state": 27
            },
            "true": {
                "type": "shift",
                "state": 28
            },
            "false": {
                "type": "shift",
                "state": 29
            },
            "null": {
                "type": "shift",
                "state": 30
            },
            "{": {
                "type": "shift",
                "state": 31
            },
            "[": {
                "type": "shift",
                "state": 32
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "LIST_VALUES",
                    [
                        "JSON"
                    ]
                ]
            },
            ",": {
                "type": "shift",
                "state": 51
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 52
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 55
            },
            "variable": {
                "type": "shift",
                "state": 53
            },
            "string": {
                "type": "shift",
                "state": 56
            },
            "number": {
                "type": "shift",
                "state": 57
            },
            "true": {
                "type": "shift",
                "state": 58
            },
            "false": {
                "type": "shift",
                "state": 59
            },
            "null": {
                "type": "shift",
                "state": 60
            },
            "(": {
                "type": "shift",
                "state": 54
            },
            "{": {
                "type": "shift",
                "state": 61
            },
            "[": {
                "type": "shift",
                "state": 62
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 18
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 72
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 73
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 1
            },
            "string": {
                "type": "shift",
                "state": 3
            },
            "number": {
                "type": "shift",
                "state": 4
            },
            "true": {
                "type": "shift",
                "state": 5
            },
            "false": {
                "type": "shift",
                "state": 6
            },
            "null": {
                "type": "shift",
                "state": 7
            },
            "(": {
                "type": "shift",
                "state": 2
            },
            "{": {
                "type": "shift",
                "state": 8
            },
            "[": {
                "type": "shift",
                "state": 9
            }
        },
        {
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "(",
                        "ABSTRACTION",
                        ")"
                    ]
                ]
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 75
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 76
            },
            "number": {
                "type": "shift",
                "state": 77
            },
            "true": {
                "type": "shift",
                "state": 78
            },
            "false": {
                "type": "shift",
                "state": 79
            },
            "null": {
                "type": "shift",
                "state": 80
            },
            "{": {
                "type": "shift",
                "state": 81
            },
            "[": {
                "type": "shift",
                "state": 82
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 86
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 87
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 26
            },
            "number": {
                "type": "shift",
                "state": 27
            },
            "true": {
                "type": "shift",
                "state": 28
            },
            "false": {
                "type": "shift",
                "state": 29
            },
            "null": {
                "type": "shift",
                "state": 30
            },
            "{": {
                "type": "shift",
                "state": 31
            },
            "[": {
                "type": "shift",
                "state": 32
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "variable"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 89
            },
            "variable": {
                "type": "shift",
                "state": 18
            },
            "(": {
                "type": "shift",
                "state": 19
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 91
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 93
            },
            "string": {
                "type": "shift",
                "state": 26
            },
            "number": {
                "type": "shift",
                "state": 27
            },
            "true": {
                "type": "shift",
                "state": 28
            },
            "false": {
                "type": "shift",
                "state": 29
            },
            "null": {
                "type": "shift",
                "state": 30
            },
            "{": {
                "type": "shift",
                "state": 31
            },
            "[": {
                "type": "shift",
                "state": 32
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP_LIST",
                    [
                        "EXP"
                    ]
                ]
            },
            ",": {
                "type": "shift",
                "state": 95
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "APPLICATION"
                    ]
                ]
            }
        },
        {
            "(": {
                "type": "shift",
                "state": 96
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 97
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "LIST_VARIABLES",
                    [
                        "variable",
                        ",",
                        "LIST_VARIABLES"
                    ]
                ]
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 98
            },
            "string": {
                "type": "shift",
                "state": 100
            },
            "number": {
                "type": "shift",
                "state": 101
            },
            "true": {
                "type": "shift",
                "state": 102
            },
            "false": {
                "type": "shift",
                "state": 103
            },
            "null": {
                "type": "shift",
                "state": 104
            },
            "(": {
                "type": "shift",
                "state": 99
            },
            "{": {
                "type": "shift",
                "state": 105
            },
            "[": {
                "type": "shift",
                "state": 106
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 114
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 1
            },
            "string": {
                "type": "shift",
                "state": 3
            },
            "number": {
                "type": "shift",
                "state": 4
            },
            "true": {
                "type": "shift",
                "state": 5
            },
            "false": {
                "type": "shift",
                "state": 6
            },
            "null": {
                "type": "shift",
                "state": 7
            },
            "(": {
                "type": "shift",
                "state": 2
            },
            "{": {
                "type": "shift",
                "state": 8
            },
            "[": {
                "type": "shift",
                "state": 9
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 116
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 118
            },
            "string": {
                "type": "shift",
                "state": 26
            },
            "number": {
                "type": "shift",
                "state": 27
            },
            "true": {
                "type": "shift",
                "state": 28
            },
            "false": {
                "type": "shift",
                "state": 29
            },
            "null": {
                "type": "shift",
                "state": 30
            },
            "{": {
                "type": "shift",
                "state": 31
            },
            "[": {
                "type": "shift",
                "state": 32
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "KEY_VALUES",
                    [
                        "string",
                        "colon",
                        "JSON"
                    ]
                ]
            },
            ",": {
                "type": "shift",
                "state": 120
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "reduce",
                "production": [
                    "LIST_VALUES",
                    [
                        "JSON",
                        ",",
                        "LIST_VALUES"
                    ]
                ]
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 121
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 122
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 123
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 124
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 53
            },
            "string": {
                "type": "shift",
                "state": 56
            },
            "number": {
                "type": "shift",
                "state": 57
            },
            "true": {
                "type": "shift",
                "state": 58
            },
            "false": {
                "type": "shift",
                "state": 59
            },
            "null": {
                "type": "shift",
                "state": 60
            },
            "(": {
                "type": "shift",
                "state": 54
            },
            "{": {
                "type": "shift",
                "state": 61
            },
            "[": {
                "type": "shift",
                "state": 62
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 126
            },
            "variable": {
                "type": "shift",
                "state": 53
            },
            "string": {
                "type": "shift",
                "state": 56
            },
            "number": {
                "type": "shift",
                "state": 57
            },
            "true": {
                "type": "shift",
                "state": 58
            },
            "false": {
                "type": "shift",
                "state": 59
            },
            "null": {
                "type": "shift",
                "state": 60
            },
            "(": {
                "type": "shift",
                "state": 54
            },
            "{": {
                "type": "shift",
                "state": 61
            },
            "[": {
                "type": "shift",
                "state": 62
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "variable"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 40
            },
            "variable": {
                "type": "shift",
                "state": 18
            },
            "(": {
                "type": "shift",
                "state": 19
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 128
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 130
            },
            "string": {
                "type": "shift",
                "state": 26
            },
            "number": {
                "type": "shift",
                "state": 27
            },
            "true": {
                "type": "shift",
                "state": 28
            },
            "false": {
                "type": "shift",
                "state": 29
            },
            "null": {
                "type": "shift",
                "state": 30
            },
            "{": {
                "type": "shift",
                "state": 31
            },
            "[": {
                "type": "shift",
                "state": 32
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "APPLICATION"
                    ]
                ]
            }
        },
        {
            "(": {
                "type": "shift",
                "state": 132
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 98
            },
            "string": {
                "type": "shift",
                "state": 100
            },
            "number": {
                "type": "shift",
                "state": 101
            },
            "true": {
                "type": "shift",
                "state": 102
            },
            "false": {
                "type": "shift",
                "state": 103
            },
            "null": {
                "type": "shift",
                "state": 104
            },
            "(": {
                "type": "shift",
                "state": 99
            },
            "{": {
                "type": "shift",
                "state": 105
            },
            "[": {
                "type": "shift",
                "state": 106
            }
        },
        {
            "$": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        "LIST_VARIABLES",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 134
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 135
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 53
            },
            "string": {
                "type": "shift",
                "state": 56
            },
            "number": {
                "type": "shift",
                "state": 57
            },
            "true": {
                "type": "shift",
                "state": 58
            },
            "false": {
                "type": "shift",
                "state": 59
            },
            "null": {
                "type": "shift",
                "state": 60
            },
            "(": {
                "type": "shift",
                "state": 54
            },
            "{": {
                "type": "shift",
                "state": 61
            },
            "[": {
                "type": "shift",
                "state": 62
            }
        },
        {
            "->": {
                "type": "shift",
                "state": 138
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "EXP_LIST",
                    [
                        "EXP",
                        ",",
                        "EXP_LIST"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 139
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "shift",
                "state": 140
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "]"
                    ]
                ]
            }
        },
        {
            "]": {
                "type": "shift",
                "state": 141
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 142
            },
            "variable": {
                "type": "shift",
                "state": 53
            },
            "string": {
                "type": "shift",
                "state": 56
            },
            "number": {
                "type": "shift",
                "state": 57
            },
            "true": {
                "type": "shift",
                "state": 58
            },
            "false": {
                "type": "shift",
                "state": 59
            },
            "null": {
                "type": "shift",
                "state": 60
            },
            "(": {
                "type": "shift",
                "state": 54
            },
            "{": {
                "type": "shift",
                "state": 61
            },
            "[": {
                "type": "shift",
                "state": 62
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        "LIST_VARIABLES",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            "}": {
                "type": "reduce",
                "production": [
                    "KEY_VALUES",
                    [
                        "string",
                        "colon",
                        "JSON",
                        ",",
                        "KEY_VALUES"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 53
            },
            "string": {
                "type": "shift",
                "state": 56
            },
            "number": {
                "type": "shift",
                "state": 57
            },
            "true": {
                "type": "shift",
                "state": 58
            },
            "false": {
                "type": "shift",
                "state": 59
            },
            "null": {
                "type": "shift",
                "state": 60
            },
            "(": {
                "type": "shift",
                "state": 54
            },
            "{": {
                "type": "shift",
                "state": 61
            },
            "[": {
                "type": "shift",
                "state": 62
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "{",
                        "KEY_VALUES",
                        "}"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "[",
                        "LIST_VALUES",
                        "]"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        ")"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "shift",
                "state": 145
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        "LIST_VARIABLES",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            },
            ",": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "(",
                        "LIST_VARIABLES",
                        ")",
                        "->",
                        "EXP"
                    ]
                ]
            }
        },
        {
            ")": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            },
            "(": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "(",
                        "EXP_LIST",
                        ")"
                    ]
                ]
            }
        }
    ]
}