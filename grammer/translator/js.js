module.exports = [
    [
        ["S", ["EXP"]], "<%= $1%>"
    ],
    [
        ["EXP", ["JSON"]], "<%= $1%>"
    ],
    [
        ["EXP", ["variable"]], "<%= $1%>"
    ],

    [
        ["JSON", ["string"]], "<%= $1%>"
    ],
    [
        ["JSON", ["number"]], "<%= $1%>"
    ],

    [
        ["JSON", ["true"]], "<%= $1%>"
    ],
    [
        ["JSON", ["false"]], "<%= $1%>"
    ],
    [
        ["JSON", ["null"]], "<%= $1%>"
    ],
    [
        ["JSON", ["OBJECT"]], "<%= $1%>"
    ],
    [
        ["JSON", ["ARRAY"]], "<%= $1%>"
    ],

    [
        ["OBJECT", ["leftBrace", "KEY_VALUES", "rightBrace"]], "{<%= $2%>}"
    ],
    [
        ["OBJECT", ["leftBrace", "rightBrace"]], "{}"
    ],
    [
        ["KEY_VALUES", ["string", "colon", "JSON"]], "<%= $1%>:<%= $3%>"
    ],
    [
        ["KEY_VALUES", ["string", "colon", "JSON", "comma", "KEY_VALUES"]], "<%= $1%>:<%= $3%>,<%=$5%>"
    ],

    [
        ["ARRAY", ["leftBracket", "rightBracket"]], "[]"
    ],
    [
        ["ARRAY", ["leftBracket", "LIST_VALUES", "rightBracket"]], "[<%= $2%>]"
    ],
    [
        ["LIST_VALUES", ["JSON"]], "<%= $1%>"
    ],
    [
        ["LIST_VALUES", ["JSON", "comma", "LIST_VALUES"]], "<%= $1%>,<%= $3%>"
    ]
]
