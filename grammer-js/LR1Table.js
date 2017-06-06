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
            "leftParenthesis": {
                "type": "shift",
                "state": 2
            },
            "leftBrace": {
                "type": "shift",
                "state": 8
            },
            "leftBracket": {
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
            "leftParenthesis": {
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
            "rightParenthesis": {
                "type": "shift",
                "state": 20
            },
            "variable": {
                "type": "shift",
                "state": 18
            },
            "leftParenthesis": {
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
            "rightBrace": {
                "type": "shift",
                "state": 24
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "rightBracket": {
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
            "leftBrace": {
                "type": "shift",
                "state": 31
            },
            "leftBracket": {
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
            "leftParenthesis": {
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
            "leftParenthesis": {
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
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "LIST_VARIABLES",
                    [
                        "variable"
                    ]
                ]
            },
            "comma": {
                "type": "shift",
                "state": 39
            }
        },
        {
            "rightParenthesis": {
                "type": "shift",
                "state": 40
            },
            "variable": {
                "type": "shift",
                "state": 18
            }
        },
        {
            "arrow": {
                "type": "shift",
                "state": 42
            }
        },
        {
            "rightParenthesis": {
                "type": "shift",
                "state": 43
            }
        },
        {
            "rightParenthesis": {
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
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "shift",
                "state": 46
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "shift",
                "state": 47
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "rightBracket": {
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
            "leftBrace": {
                "type": "shift",
                "state": 31
            },
            "leftBracket": {
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
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "LIST_VALUES",
                    [
                        "JSON"
                    ]
                ]
            },
            "comma": {
                "type": "shift",
                "state": 51
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "shift",
                "state": 52
            }
        },
        {
            "rightParenthesis": {
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
            "leftParenthesis": {
                "type": "shift",
                "state": 54
            },
            "leftBrace": {
                "type": "shift",
                "state": 61
            },
            "leftBracket": {
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
            "arrow": {
                "type": "shift",
                "state": 72
            }
        },
        {
            "rightParenthesis": {
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
            "leftParenthesis": {
                "type": "shift",
                "state": 2
            },
            "leftBrace": {
                "type": "shift",
                "state": 8
            },
            "leftBracket": {
                "type": "shift",
                "state": 9
            }
        },
        {
            "leftParenthesis": {
                "type": "reduce",
                "production": [
                    "CALLER",
                    [
                        "leftParenthesis",
                        "ABSTRACTION",
                        "rightParenthesis"
                    ]
                ]
            }
        },
        {
            "arrow": {
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
            "leftBrace": {
                "type": "shift",
                "state": 81
            },
            "leftBracket": {
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
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "shift",
                "state": 86
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
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
            "leftBrace": {
                "type": "shift",
                "state": 31
            },
            "leftBracket": {
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
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            "leftParenthesis": {
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
            "rightParenthesis": {
                "type": "shift",
                "state": 89
            },
            "variable": {
                "type": "shift",
                "state": 18
            },
            "leftParenthesis": {
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
                        "leftParenthesis",
                        "rightParenthesis"
                    ]
                ]
            },
            "leftParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "rightParenthesis"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            "comma": {
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
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            "comma": {
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
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            "comma": {
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
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            "comma": {
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
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "shift",
                "state": 91
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "rightBracket": {
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
            "leftBrace": {
                "type": "shift",
                "state": 31
            },
            "leftBracket": {
                "type": "shift",
                "state": 32
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "EXP_LIST",
                    [
                        "EXP"
                    ]
                ]
            },
            "comma": {
                "type": "shift",
                "state": 95
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            "leftParenthesis": {
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
            "leftParenthesis": {
                "type": "shift",
                "state": 96
            }
        },
        {
            "rightParenthesis": {
                "type": "shift",
                "state": 97
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "ABSTRACTION"
                    ]
                ]
            },
            "comma": {
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
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "JSON"
                    ]
                ]
            },
            "comma": {
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
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            "comma": {
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
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            "comma": {
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
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "LIST_VARIABLES",
                    [
                        "variable",
                        "comma",
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
            "leftParenthesis": {
                "type": "shift",
                "state": 99
            },
            "leftBrace": {
                "type": "shift",
                "state": 105
            },
            "leftBracket": {
                "type": "shift",
                "state": 106
            }
        },
        {
            "arrow": {
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
                        "leftParenthesis",
                        "rightParenthesis",
                        "arrow",
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
            "leftParenthesis": {
                "type": "shift",
                "state": 2
            },
            "leftBrace": {
                "type": "shift",
                "state": 8
            },
            "leftBracket": {
                "type": "shift",
                "state": 9
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "string"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "number"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "true"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "false"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "null"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "shift",
                "state": 116
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "rightBracket": {
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
            "leftBrace": {
                "type": "shift",
                "state": 31
            },
            "leftBracket": {
                "type": "shift",
                "state": 32
            }
        },
        {
            "rightBrace": {
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
            "comma": {
                "type": "shift",
                "state": 120
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "OBJECT"
                    ]
                ]
            },
            "comma": {
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
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "JSON",
                    [
                        "ARRAY"
                    ]
                ]
            },
            "comma": {
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
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "reduce",
                "production": [
                    "LIST_VALUES",
                    [
                        "JSON",
                        "comma",
                        "LIST_VALUES"
                    ]
                ]
            }
        },
        {
            "arrow": {
                "type": "shift",
                "state": 121
            }
        },
        {
            "rightParenthesis": {
                "type": "shift",
                "state": 122
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "shift",
                "state": 123
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
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
            "leftParenthesis": {
                "type": "shift",
                "state": 54
            },
            "leftBrace": {
                "type": "shift",
                "state": 61
            },
            "leftBracket": {
                "type": "shift",
                "state": 62
            }
        },
        {
            "rightParenthesis": {
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
            "leftParenthesis": {
                "type": "shift",
                "state": 54
            },
            "leftBrace": {
                "type": "shift",
                "state": 61
            },
            "leftBracket": {
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
                        "leftParenthesis",
                        "EXP_LIST",
                        "rightParenthesis"
                    ]
                ]
            },
            "leftParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "EXP_LIST",
                        "rightParenthesis"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "variable"
                    ]
                ]
            },
            "leftParenthesis": {
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
            "rightParenthesis": {
                "type": "shift",
                "state": 40
            },
            "variable": {
                "type": "shift",
                "state": 18
            },
            "leftParenthesis": {
                "type": "shift",
                "state": 19
            }
        },
        {
            "rightParenthesis": {
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
            "rightParenthesis": {
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
            "rightParenthesis": {
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
            "rightParenthesis": {
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
            "rightParenthesis": {
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
            "rightBrace": {
                "type": "shift",
                "state": 128
            },
            "string": {
                "type": "shift",
                "state": 23
            }
        },
        {
            "rightBracket": {
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
            "leftBrace": {
                "type": "shift",
                "state": 31
            },
            "leftBracket": {
                "type": "shift",
                "state": 32
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "leftParenthesis",
                        "rightParenthesis",
                        "arrow",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "EXP",
                    [
                        "APPLICATION"
                    ]
                ]
            },
            "leftParenthesis": {
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
            "leftParenthesis": {
                "type": "shift",
                "state": 132
            }
        },
        {
            "rightParenthesis": {
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
            "rightParenthesis": {
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
            "rightParenthesis": {
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
            "rightParenthesis": {
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
            "leftParenthesis": {
                "type": "shift",
                "state": 99
            },
            "leftBrace": {
                "type": "shift",
                "state": 105
            },
            "leftBracket": {
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
                        "leftParenthesis",
                        "LIST_VARIABLES",
                        "rightParenthesis",
                        "arrow",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "shift",
                "state": 134
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
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
            "leftParenthesis": {
                "type": "shift",
                "state": 54
            },
            "leftBrace": {
                "type": "shift",
                "state": 61
            },
            "leftBracket": {
                "type": "shift",
                "state": 62
            }
        },
        {
            "arrow": {
                "type": "shift",
                "state": 138
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "EXP_LIST",
                    [
                        "EXP",
                        "comma",
                        "EXP_LIST"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "rightParenthesis"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "rightParenthesis"
                    ]
                ]
            },
            "leftParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "rightParenthesis"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "shift",
                "state": 139
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "shift",
                "state": 140
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBracket": {
                "type": "shift",
                "state": 141
            }
        },
        {
            "rightParenthesis": {
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
            "leftParenthesis": {
                "type": "shift",
                "state": 54
            },
            "leftBrace": {
                "type": "shift",
                "state": 61
            },
            "leftBracket": {
                "type": "shift",
                "state": 62
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "leftParenthesis",
                        "LIST_VARIABLES",
                        "rightParenthesis",
                        "arrow",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightBrace": {
                "type": "reduce",
                "production": [
                    "KEY_VALUES",
                    [
                        "string",
                        "colon",
                        "JSON",
                        "comma",
                        "KEY_VALUES"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "leftParenthesis",
                        "rightParenthesis",
                        "arrow",
                        "EXP"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "leftParenthesis",
                        "rightParenthesis",
                        "arrow",
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
            "leftParenthesis": {
                "type": "shift",
                "state": 54
            },
            "leftBrace": {
                "type": "shift",
                "state": 61
            },
            "leftBracket": {
                "type": "shift",
                "state": 62
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "EXP_LIST",
                        "rightParenthesis"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "EXP_LIST",
                        "rightParenthesis"
                    ]
                ]
            },
            "leftParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "EXP_LIST",
                        "rightParenthesis"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "OBJECT",
                    [
                        "leftBrace",
                        "KEY_VALUES",
                        "rightBrace"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "ARRAY",
                    [
                        "leftBracket",
                        "LIST_VALUES",
                        "rightBracket"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "rightParenthesis"
                    ]
                ]
            },
            "leftParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "rightParenthesis"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "shift",
                "state": 145
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "leftParenthesis",
                        "LIST_VARIABLES",
                        "rightParenthesis",
                        "arrow",
                        "EXP"
                    ]
                ]
            },
            "comma": {
                "type": "reduce",
                "production": [
                    "ABSTRACTION",
                    [
                        "leftParenthesis",
                        "LIST_VARIABLES",
                        "rightParenthesis",
                        "arrow",
                        "EXP"
                    ]
                ]
            }
        },
        {
            "rightParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "EXP_LIST",
                        "rightParenthesis"
                    ]
                ]
            },
            "leftParenthesis": {
                "type": "reduce",
                "production": [
                    "APPLICATION",
                    [
                        "CALLER",
                        "leftParenthesis",
                        "EXP_LIST",
                        "rightParenthesis"
                    ]
                ]
            }
        }
    ]
}