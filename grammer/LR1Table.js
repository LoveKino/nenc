module.exports = {
    "GOTO": [
        {
            "S": 10,
            "EXP": 11,
            "ABSTRACTION": 12,
            "JSON": 13,
            "OBJECT": 14,
            "ARRAY": 15
        },
        {},
        {
            "LIST_VARIABLES": 18
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 21
        },
        {
            "JSON": 30,
            "OBJECT": 31,
            "ARRAY": 32,
            "LIST_VALUES": 33
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
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 40
        },
        {
            "JSON": 30,
            "OBJECT": 31,
            "ARRAY": 32,
            "LIST_VALUES": 42
        },
        {},
        {},
        {},
        {},
        {},
        {
            "LIST_VARIABLES": 45
        },
        {
            "EXP": 46,
            "ABSTRACTION": 12,
            "JSON": 13,
            "OBJECT": 14,
            "ARRAY": 15
        },
        {},
        {
            "JSON": 55,
            "OBJECT": 56,
            "ARRAY": 57
        },
        {},
        {},
        {},
        {},
        {},
        {
            "JSON": 30,
            "OBJECT": 31,
            "ARRAY": 32,
            "LIST_VALUES": 60
        },
        {},
        {},
        {},
        {
            "EXP": 61,
            "ABSTRACTION": 12,
            "JSON": 13,
            "OBJECT": 14,
            "ARRAY": 15
        },
        {},
        {},
        {},
        {},
        {},
        {
            "KEY_VALUES": 63
        },
        {
            "JSON": 30,
            "OBJECT": 31,
            "ARRAY": 32,
            "LIST_VALUES": 65
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
            "KEY_VALUES": 69
        },
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
            }
        },
        {
            "rightParenthesis": {
                "type": "shift",
                "state": 17
            },
            "variable": {
                "type": "shift",
                "state": 16
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
                "state": 20
            },
            "string": {
                "type": "shift",
                "state": 19
            }
        },
        {
            "rightBracket": {
                "type": "shift",
                "state": 29
            },
            "string": {
                "type": "shift",
                "state": 22
            },
            "number": {
                "type": "shift",
                "state": 23
            },
            "true": {
                "type": "shift",
                "state": 24
            },
            "false": {
                "type": "shift",
                "state": 25
            },
            "null": {
                "type": "shift",
                "state": 26
            },
            "leftBrace": {
                "type": "shift",
                "state": 27
            },
            "leftBracket": {
                "type": "shift",
                "state": 28
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
                "state": 34
            }
        },
        {
            "arrow": {
                "type": "shift",
                "state": 35
            }
        },
        {
            "rightParenthesis": {
                "type": "shift",
                "state": 36
            }
        },
        {
            "colon": {
                "type": "shift",
                "state": 37
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
                "state": 38
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
                "state": 39
            },
            "string": {
                "type": "shift",
                "state": 19
            }
        },
        {
            "rightBracket": {
                "type": "shift",
                "state": 41
            },
            "string": {
                "type": "shift",
                "state": 22
            },
            "number": {
                "type": "shift",
                "state": 23
            },
            "true": {
                "type": "shift",
                "state": 24
            },
            "false": {
                "type": "shift",
                "state": 25
            },
            "null": {
                "type": "shift",
                "state": 26
            },
            "leftBrace": {
                "type": "shift",
                "state": 27
            },
            "leftBracket": {
                "type": "shift",
                "state": 28
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
                "state": 43
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
                "state": 44
            }
        },
        {
            "variable": {
                "type": "shift",
                "state": 16
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
            "arrow": {
                "type": "shift",
                "state": 47
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 48
            },
            "number": {
                "type": "shift",
                "state": 49
            },
            "true": {
                "type": "shift",
                "state": 50
            },
            "false": {
                "type": "shift",
                "state": 51
            },
            "null": {
                "type": "shift",
                "state": 52
            },
            "leftBrace": {
                "type": "shift",
                "state": 53
            },
            "leftBracket": {
                "type": "shift",
                "state": 54
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
                "state": 58
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
                "state": 59
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 22
            },
            "number": {
                "type": "shift",
                "state": 23
            },
            "true": {
                "type": "shift",
                "state": 24
            },
            "false": {
                "type": "shift",
                "state": 25
            },
            "null": {
                "type": "shift",
                "state": 26
            },
            "leftBrace": {
                "type": "shift",
                "state": 27
            },
            "leftBracket": {
                "type": "shift",
                "state": 28
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
                "state": 62
            },
            "string": {
                "type": "shift",
                "state": 19
            }
        },
        {
            "rightBracket": {
                "type": "shift",
                "state": 64
            },
            "string": {
                "type": "shift",
                "state": 22
            },
            "number": {
                "type": "shift",
                "state": 23
            },
            "true": {
                "type": "shift",
                "state": 24
            },
            "false": {
                "type": "shift",
                "state": 25
            },
            "null": {
                "type": "shift",
                "state": 26
            },
            "leftBrace": {
                "type": "shift",
                "state": 27
            },
            "leftBracket": {
                "type": "shift",
                "state": 28
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
                "state": 66
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
                "state": 67
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
                "state": 68
            }
        },
        {
            "string": {
                "type": "shift",
                "state": 19
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
        }
    ]
}