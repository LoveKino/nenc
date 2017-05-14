module.exports = [
    [
        ["S", ["EXP"]], "<%= $1%>"
    ],
    [
        ["EXP", ["variable"]], "sys_variable(\"<%= $1%>\")"
    ],

    [
        ["EXP", ["ABSTRACTION"]], "<%= $1%>"
    ],

    [
        ["ABSTRACTION", ["leftParenthesis", "rightParenthesis", "arrow", "EXP"]],
        "sys_abstraction(sys_void(), <%= $4%>)"
    ],

    [
        ["ABSTRACTION", ["leftParenthesis", "LIST_VARIABLES", "rightParenthesis", "arrow", "EXP"]],
        "sys_abstraction(<%= $2%>, <%= $5%>)"
    ],

    [
        ["LIST_VARIABLES", ["variable"]], "sys_variable(\"<%= $1%>\")"
    ],

    [
        ["LIST_VARIABLES", ["variable", "comma", "LIST_VARIABLES"]], "sys_pair(sys_variable(\"<%= $1%>\"), <%= $3%>)"
    ],

    [
        ["EXP", ["JSON"]], "<%= $1%>"
    ],

    [
        ["JSON", ["string"]], "sys_string(<%= $1%>)"
    ],
    [
        ["JSON", ["number"]], "sys_number(\"<%= $1%>\")"
    ],
    [
        ["JSON", ["true"]], "sys_true(\"<%= $1%>\")"
    ],
    [
        ["JSON", ["false"]], "sys_false(\"<%= $1%>\")"
    ],
    [
        ["JSON", ["null"]], "sys_null(\"<%= $1%>\")"
    ],

    [
        ["JSON", ["OBJECT"]], "<%= $1%>"
    ],
    [
        ["JSON", ["ARRAY"]], "<%= $1%>"
    ],

    [
        ["OBJECT", ["leftBrace", "KEY_VALUES", "rightBrace"]], "sys_object(<%= $2%>)"
    ],
    [
        ["OBJECT", ["leftBrace", "rightBrace"]], "sys_object(sys_void())"
    ],
    [
        ["KEY_VALUES", ["string", "colon", "JSON"]], "sys_pair(sys_string(<%= $1%>), <%= $3%>)"
    ],
    [
        ["KEY_VALUES", ["string", "colon", "JSON", "comma", "KEY_VALUES"]], "sys_pair(sys_pair(sys_string(<%= $1%>), <%= $3%>), <%=$5%>)"
    ],

    [
        ["ARRAY", ["leftBracket", "rightBracket"]], "sys_array(sys_void())"
    ],
    [
        ["ARRAY", ["leftBracket", "LIST_VALUES", "rightBracket"]], "sys_array(<%= $2%>)"
    ],
    [
        ["LIST_VALUES", ["JSON"]], "<%= $1%>"
    ],
    [
        ["LIST_VALUES", ["JSON", "comma", "LIST_VALUES"]], "sys_pair(<%= $1%>, <%= $3%>)"
    ]
]
