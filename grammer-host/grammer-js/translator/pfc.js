module.exports = {"S := PROGRAM":"$1","PROGRAM := STATEMENTS":"sys_statements($1)","STATEMENTS := NONE_EMPTY_STATEMENTS":"$1","STATEMENTS := EPSILON":"sys_void()","NONE_EMPTY_STATEMENTS := STATEMENT":"$1","NONE_EMPTY_STATEMENTS := STATEMENT ; STATEMENTS":"sys_pair($1, $3)","STATEMENT := EXP":"sys_exp($1)","STATEMENT := LET_EXPRESSION":"$1","STATEMENT := IMPORT_EXPRESSION":"$1","IMPORT_EXPRESSION := import string as variable":"sys_import($2, sys_variable($4))","LET_EXPRESSION := let VARIABLE_DEFINITION_LIST":"sys_letBinding($2)","VARIABLE_DEFINITION_LIST := VARIABLE_DEFINITION":"$1","VARIABLE_DEFINITION_LIST := VARIABLE_DEFINITION , VARIABLE_DEFINITION_LIST":"sys_pair($1, $3)","VARIABLE_DEFINITION := variable":"sys_pair(sys_variable($1), sys_void())","VARIABLE_DEFINITION := variable = EXP":"sys_pair(sys_variable($1), $3)","EXP := DATA":"sys_data($1)","EXP := variable":"sys_variable($1)","EXP := ABSTRACTION":"$1","EXP := APPLICATION":"$1","EXP := CODE_BLOCK_EXP":"$1","EXP := CONDITION_EXP":"$1","CODE_BLOCK_EXP := { NONE_EMPTY_STATEMENTS }":"sys_application(sys_ordinary_abstraction(sys_void(), sys_statements($2)), sys_void())","CONDITION_EXP := EXP ? EXP : EXP":"sys_condition($1, $3, $5)","APPLICATION := CALLER ( )":"sys_application($1, sys_void())","APPLICATION := CALLER ( EXP_LIST )":"sys_application($1, $3)","CALLER := variable":"sys_variable($1)","CALLER := APPLICATION":"$1","CALLER := ( ABSTRACTION )":"$2","EXP_LIST := EXP":"$1","EXP_LIST := EXP , EXP_LIST":"sys_pair($1, $3)","ABSTRACTION := GUARDED_ABSTRACTION_LIST":"sys_guarded_abstraction($1)","GUARDED_ABSTRACTION_LIST := GUARDED_ABSTRACTION":"$1","GUARDED_ABSTRACTION_LIST := GUARDED_ABSTRACTION verticalBar GUARDED_ABSTRACTION_LIST":"sys_pair($1, $3)","GUARDED_ABSTRACTION := ORDINARY_ABSTRACTION":"sys_guarded_abstraction_line($1, sys_void())","GUARDED_ABSTRACTION := ORDINARY_ABSTRACTION , EXP_LIST":"sys_guarded_abstraction_line($1, $3)","ORDINARY_ABSTRACTION := ( ) -> EXP":"sys_ordinary_abstraction(sys_void(), $4)","ORDINARY_ABSTRACTION := ( LIST_VARIABLES ) -> EXP":"sys_ordinary_abstraction($2, $5)","LIST_VARIABLES := variable":"sys_variable($1)","LIST_VARIABLES := variable , LIST_VARIABLES":"sys_pair(sys_variable($1), $3)","DATA := string":"sys_string($1)","DATA := number":"sys_number($1)","DATA := OBJECT":"$1","DATA := ARRAY":"$1","DATA := true":"sys_true()","DATA := false":"sys_false()","DATA := null":"sys_null()","OBJECT := { KEY_VALUES }":"sys_object($2)","OBJECT := { }":"sys_object(sys_void())","KEY_VALUES := string : PROGRAM":"sys_pair(sys_string($1), $3)","KEY_VALUES := string : PROGRAM , KEY_VALUES":"sys_pair(sys_pair(sys_string($1), $3), $5)","ARRAY := [ ]":"sys_array(sys_void())","ARRAY := [ LIST_VALUES ]":"sys_array($2)","LIST_VALUES := PROGRAM":"$1","LIST_VALUES := PROGRAM , LIST_VALUES":"sys_pair($1, $3)"}