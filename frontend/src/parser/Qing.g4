
grammar Qing;

fnct: 'function' fname=variable '(' args=arglist ')' '{' body=fbody '}';
arglist: (variable (',' variable)*)?;

fbody: inits=assignmentBlock loop=whileStmt;
whileStmt: 'while' '(' cond=condition ')' '{' body=whileBody '}';
whileBody:
    assigns=assignmentBlock #simpleLooop
    | preassigns=assignmentBlock? inner=whileStmt postassigns=assignmentBlock? #nestedLoop
    | cond=conditional #condLoop
    ;

assignmentBlock: assignment+;

assignment: left=variable EQ right=expression ';';

conditional: 'if' LPAREN cond=condition RPAREN '{' condtrue=assignmentBlock '}' 'else' '{' condfalse=assignmentBlock '}';

condition
   : left=expression op=relop right=expression
   ;


expression
   :  expression  POW expression
   |  expression  (TIMES | DIV)  expression
   |  expression  (PLUS | MINUS) expression
   |  LPAREN expression RPAREN
   |  (PLUS | MINUS)* atom
   ;

atom
   : scientific
   | variable
   ;

scientific
   : SCIENTIFIC_NUMBER
   ;

variable
   : VARIABLE
   ;

relop
   : EQUIV
   | NEQUIV
   | GT
   |GTE
   | LT
   | LTE
   ;




VARIABLE: VALID_ID_START VALID_ID_CHAR*;


fragment VALID_ID_START: ('a' .. 'z') | ('A' .. 'Z') | '_';


fragment VALID_ID_CHAR: VALID_ID_START | ('0' .. '9');


SCIENTIFIC_NUMBER: NUMBER (E SIGN? NUMBER)?;


fragment NUMBER: ('0' .. '9') + ('.' ('0' .. '9') +)?;


fragment E: 'E' | 'e';


fragment SIGN: ('+' | '-');

fragment WHILE: 'while';

LPAREN: '(';

RPAREN: ')';

PLUS: '+';

MINUS: '-';

TIMES: '*';

DIV: '/';

GT: '>';

GTE : '>=';

LT: '<';

LTE : '<=';

EQ: '=';

EQUIV: '==';

NEQUIV: '!=';

POINT: '.';

POW: '^';

WS
   : [ \r\n\t] + -> skip
   ;
