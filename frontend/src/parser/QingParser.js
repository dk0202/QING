// Generated from Qing.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var QingListener = require('./QingListener').QingListener;
var QingVisitor = require('./QingVisitor').QingVisitor;

var grammarFileName = "Qing.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001c\u0088\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003+",
    "\n\u0003\f\u0003\u000e\u0003.\u000b\u0003\u0005\u00030\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006?\n\u0006\u0003\u0006\u0003\u0006\u0005\u0006C\n\u0006",
    "\u0003\u0006\u0005\u0006F\n\u0006\u0003\u0007\u0006\u0007I\n\u0007\r",
    "\u0007\u000e\u0007J\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000bh",
    "\n\u000b\f\u000b\u000e\u000bk\u000b\u000b\u0003\u000b\u0005\u000bn\n",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000by\n\u000b\f\u000b",
    "\u000e\u000b|\u000b\u000b\u0003\f\u0003\f\u0005\f\u0080\n\f\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0002\u0003\u0014\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u0002\u0005\u0003\u0002\u000f\u0010\u0003\u0002",
    "\u0011\u0012\u0004\u0002\u0013\u0016\u0018\u0019\u0002\u0086\u0002\u001e",
    "\u0003\u0002\u0002\u0002\u0004/\u0003\u0002\u0002\u0002\u00061\u0003",
    "\u0002\u0002\u0002\b4\u0003\u0002\u0002\u0002\nE\u0003\u0002\u0002\u0002",
    "\fH\u0003\u0002\u0002\u0002\u000eL\u0003\u0002\u0002\u0002\u0010Q\u0003",
    "\u0002\u0002\u0002\u0012]\u0003\u0002\u0002\u0002\u0014m\u0003\u0002",
    "\u0002\u0002\u0016\u007f\u0003\u0002\u0002\u0002\u0018\u0081\u0003\u0002",
    "\u0002\u0002\u001a\u0083\u0003\u0002\u0002\u0002\u001c\u0085\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0007\u0003\u0002\u0002\u001f \u0005\u001a",
    "\u000e\u0002 !\u0007\r\u0002\u0002!\"\u0005\u0004\u0003\u0002\"#\u0007",
    "\u000e\u0002\u0002#$\u0007\u0004\u0002\u0002$%\u0005\u0006\u0004\u0002",
    "%&\u0007\u0005\u0002\u0002&\u0003\u0003\u0002\u0002\u0002\',\u0005\u001a",
    "\u000e\u0002()\u0007\u0006\u0002\u0002)+\u0005\u001a\u000e\u0002*(\u0003",
    "\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002",
    ",-\u0003\u0002\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002",
    "\u0002/\'\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020\u0005\u0003",
    "\u0002\u0002\u000212\u0005\f\u0007\u000223\u0005\b\u0005\u00023\u0007",
    "\u0003\u0002\u0002\u000245\u0007\u0007\u0002\u000256\u0007\r\u0002\u0002",
    "67\u0005\u0012\n\u000278\u0007\u000e\u0002\u000289\u0007\u0004\u0002",
    "\u00029:\u0005\n\u0006\u0002:;\u0007\u0005\u0002\u0002;\t\u0003\u0002",
    "\u0002\u0002<F\u0005\f\u0007\u0002=?\u0005\f\u0007\u0002>=\u0003\u0002",
    "\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@B\u0005",
    "\b\u0005\u0002AC\u0005\f\u0007\u0002BA\u0003\u0002\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002DF\u0005\u0010\t\u0002E",
    "<\u0003\u0002\u0002\u0002E>\u0003\u0002\u0002\u0002ED\u0003\u0002\u0002",
    "\u0002F\u000b\u0003\u0002\u0002\u0002GI\u0005\u000e\b\u0002HG\u0003",
    "\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002",
    "JK\u0003\u0002\u0002\u0002K\r\u0003\u0002\u0002\u0002LM\u0005\u001a",
    "\u000e\u0002MN\u0007\u0017\u0002\u0002NO\u0005\u0014\u000b\u0002OP\u0007",
    "\b\u0002\u0002P\u000f\u0003\u0002\u0002\u0002QR\u0007\t\u0002\u0002",
    "RS\u0007\r\u0002\u0002ST\u0005\u0012\n\u0002TU\u0007\u000e\u0002\u0002",
    "UV\u0007\u0004\u0002\u0002VW\u0005\f\u0007\u0002WX\u0007\u0005\u0002",
    "\u0002XY\u0007\n\u0002\u0002YZ\u0007\u0004\u0002\u0002Z[\u0005\f\u0007",
    "\u0002[\\\u0007\u0005\u0002\u0002\\\u0011\u0003\u0002\u0002\u0002]^",
    "\u0005\u0014\u000b\u0002^_\u0005\u001c\u000f\u0002_`\u0005\u0014\u000b",
    "\u0002`\u0013\u0003\u0002\u0002\u0002ab\b\u000b\u0001\u0002bc\u0007",
    "\r\u0002\u0002cd\u0005\u0014\u000b\u0002de\u0007\u000e\u0002\u0002e",
    "n\u0003\u0002\u0002\u0002fh\t\u0002\u0002\u0002gf\u0003\u0002\u0002",
    "\u0002hk\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002",
    "\u0002\u0002jl\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002ln\u0005",
    "\u0016\f\u0002ma\u0003\u0002\u0002\u0002mi\u0003\u0002\u0002\u0002n",
    "z\u0003\u0002\u0002\u0002op\f\u0007\u0002\u0002pq\u0007\u001b\u0002",
    "\u0002qy\u0005\u0014\u000b\brs\f\u0006\u0002\u0002st\t\u0003\u0002\u0002",
    "ty\u0005\u0014\u000b\u0007uv\f\u0005\u0002\u0002vw\t\u0002\u0002\u0002",
    "wy\u0005\u0014\u000b\u0006xo\u0003\u0002\u0002\u0002xr\u0003\u0002\u0002",
    "\u0002xu\u0003\u0002\u0002\u0002y|\u0003\u0002\u0002\u0002zx\u0003\u0002",
    "\u0002\u0002z{\u0003\u0002\u0002\u0002{\u0015\u0003\u0002\u0002\u0002",
    "|z\u0003\u0002\u0002\u0002}\u0080\u0005\u0018\r\u0002~\u0080\u0005\u001a",
    "\u000e\u0002\u007f}\u0003\u0002\u0002\u0002\u007f~\u0003\u0002\u0002",
    "\u0002\u0080\u0017\u0003\u0002\u0002\u0002\u0081\u0082\u0007\f\u0002",
    "\u0002\u0082\u0019\u0003\u0002\u0002\u0002\u0083\u0084\u0007\u000b\u0002",
    "\u0002\u0084\u001b\u0003\u0002\u0002\u0002\u0085\u0086\t\u0004\u0002",
    "\u0002\u0086\u001d\u0003\u0002\u0002\u0002\r,/>BEJimxz\u007f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'function'", "'{'", "'}'", "','", "'while'", 
                     "';'", "'if'", "'else'", null, null, "'('", "')'", 
                     "'+'", "'-'", "'*'", "'/'", "'>'", "'>='", "'<'", "'<='", 
                     "'='", "'=='", "'!='", "'.'", "'^'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      "VARIABLE", "SCIENTIFIC_NUMBER", "LPAREN", "RPAREN", 
                      "PLUS", "MINUS", "TIMES", "DIV", "GT", "GTE", "LT", 
                      "LTE", "EQ", "EQUIV", "NEQUIV", "POINT", "POW", "WS" ];

var ruleNames =  [ "fnct", "arglist", "fbody", "whileStmt", "whileBody", 
                   "assignmentBlock", "assignment", "conditional", "condition", 
                   "expression", "atom", "scientific", "variable", "relop" ];

function QingParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

QingParser.prototype = Object.create(antlr4.Parser.prototype);
QingParser.prototype.constructor = QingParser;

Object.defineProperty(QingParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

QingParser.EOF = antlr4.Token.EOF;
QingParser.T__0 = 1;
QingParser.T__1 = 2;
QingParser.T__2 = 3;
QingParser.T__3 = 4;
QingParser.T__4 = 5;
QingParser.T__5 = 6;
QingParser.T__6 = 7;
QingParser.T__7 = 8;
QingParser.VARIABLE = 9;
QingParser.SCIENTIFIC_NUMBER = 10;
QingParser.LPAREN = 11;
QingParser.RPAREN = 12;
QingParser.PLUS = 13;
QingParser.MINUS = 14;
QingParser.TIMES = 15;
QingParser.DIV = 16;
QingParser.GT = 17;
QingParser.GTE = 18;
QingParser.LT = 19;
QingParser.LTE = 20;
QingParser.EQ = 21;
QingParser.EQUIV = 22;
QingParser.NEQUIV = 23;
QingParser.POINT = 24;
QingParser.POW = 25;
QingParser.WS = 26;

QingParser.RULE_fnct = 0;
QingParser.RULE_arglist = 1;
QingParser.RULE_fbody = 2;
QingParser.RULE_whileStmt = 3;
QingParser.RULE_whileBody = 4;
QingParser.RULE_assignmentBlock = 5;
QingParser.RULE_assignment = 6;
QingParser.RULE_conditional = 7;
QingParser.RULE_condition = 8;
QingParser.RULE_expression = 9;
QingParser.RULE_atom = 10;
QingParser.RULE_scientific = 11;
QingParser.RULE_variable = 12;
QingParser.RULE_relop = 13;

function FnctContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_fnct;
    this.fname = null; // VariableContext
    this.args = null; // ArglistContext
    this.body = null; // FbodyContext
    return this;
}

FnctContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FnctContext.prototype.constructor = FnctContext;

FnctContext.prototype.LPAREN = function() {
    return this.getToken(QingParser.LPAREN, 0);
};

FnctContext.prototype.RPAREN = function() {
    return this.getToken(QingParser.RPAREN, 0);
};

FnctContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

FnctContext.prototype.arglist = function() {
    return this.getTypedRuleContext(ArglistContext,0);
};

FnctContext.prototype.fbody = function() {
    return this.getTypedRuleContext(FbodyContext,0);
};

FnctContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterFnct(this);
	}
};

FnctContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitFnct(this);
	}
};

FnctContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitFnct(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.FnctContext = FnctContext;

QingParser.prototype.fnct = function() {

    var localctx = new FnctContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QingParser.RULE_fnct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.match(QingParser.T__0);
        this.state = 29;
        localctx.fname = this.variable();
        this.state = 30;
        this.match(QingParser.LPAREN);
        this.state = 31;
        localctx.args = this.arglist();
        this.state = 32;
        this.match(QingParser.RPAREN);
        this.state = 33;
        this.match(QingParser.T__1);
        this.state = 34;
        localctx.body = this.fbody();
        this.state = 35;
        this.match(QingParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArglistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_arglist;
    return this;
}

ArglistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArglistContext.prototype.constructor = ArglistContext;

ArglistContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

ArglistContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterArglist(this);
	}
};

ArglistContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitArglist(this);
	}
};

ArglistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitArglist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.ArglistContext = ArglistContext;

QingParser.prototype.arglist = function() {

    var localctx = new ArglistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QingParser.RULE_arglist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===QingParser.VARIABLE) {
            this.state = 37;
            this.variable();
            this.state = 42;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===QingParser.T__3) {
                this.state = 38;
                this.match(QingParser.T__3);
                this.state = 39;
                this.variable();
                this.state = 44;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FbodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_fbody;
    this.inits = null; // AssignmentBlockContext
    this.loop = null; // WhileStmtContext
    return this;
}

FbodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FbodyContext.prototype.constructor = FbodyContext;

FbodyContext.prototype.assignmentBlock = function() {
    return this.getTypedRuleContext(AssignmentBlockContext,0);
};

FbodyContext.prototype.whileStmt = function() {
    return this.getTypedRuleContext(WhileStmtContext,0);
};

FbodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterFbody(this);
	}
};

FbodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitFbody(this);
	}
};

FbodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitFbody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.FbodyContext = FbodyContext;

QingParser.prototype.fbody = function() {

    var localctx = new FbodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, QingParser.RULE_fbody);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        localctx.inits = this.assignmentBlock();
        this.state = 48;
        localctx.loop = this.whileStmt();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_whileStmt;
    this.cond = null; // ConditionContext
    this.body = null; // WhileBodyContext
    return this;
}

WhileStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStmtContext.prototype.constructor = WhileStmtContext;

WhileStmtContext.prototype.LPAREN = function() {
    return this.getToken(QingParser.LPAREN, 0);
};

WhileStmtContext.prototype.RPAREN = function() {
    return this.getToken(QingParser.RPAREN, 0);
};

WhileStmtContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

WhileStmtContext.prototype.whileBody = function() {
    return this.getTypedRuleContext(WhileBodyContext,0);
};

WhileStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterWhileStmt(this);
	}
};

WhileStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitWhileStmt(this);
	}
};

WhileStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitWhileStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.WhileStmtContext = WhileStmtContext;

QingParser.prototype.whileStmt = function() {

    var localctx = new WhileStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, QingParser.RULE_whileStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(QingParser.T__4);
        this.state = 51;
        this.match(QingParser.LPAREN);
        this.state = 52;
        localctx.cond = this.condition();
        this.state = 53;
        this.match(QingParser.RPAREN);
        this.state = 54;
        this.match(QingParser.T__1);
        this.state = 55;
        localctx.body = this.whileBody();
        this.state = 56;
        this.match(QingParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_whileBody;
    return this;
}

WhileBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileBodyContext.prototype.constructor = WhileBodyContext;


 
WhileBodyContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CondLoopContext(parser, ctx) {
	WhileBodyContext.call(this, parser);
    this.cond = null; // ConditionalContext;
    WhileBodyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondLoopContext.prototype = Object.create(WhileBodyContext.prototype);
CondLoopContext.prototype.constructor = CondLoopContext;

QingParser.CondLoopContext = CondLoopContext;

CondLoopContext.prototype.conditional = function() {
    return this.getTypedRuleContext(ConditionalContext,0);
};
CondLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterCondLoop(this);
	}
};

CondLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitCondLoop(this);
	}
};

CondLoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitCondLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SimpleLooopContext(parser, ctx) {
	WhileBodyContext.call(this, parser);
    this.assigns = null; // AssignmentBlockContext;
    WhileBodyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SimpleLooopContext.prototype = Object.create(WhileBodyContext.prototype);
SimpleLooopContext.prototype.constructor = SimpleLooopContext;

QingParser.SimpleLooopContext = SimpleLooopContext;

SimpleLooopContext.prototype.assignmentBlock = function() {
    return this.getTypedRuleContext(AssignmentBlockContext,0);
};
SimpleLooopContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterSimpleLooop(this);
	}
};

SimpleLooopContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitSimpleLooop(this);
	}
};

SimpleLooopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitSimpleLooop(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NestedLoopContext(parser, ctx) {
	WhileBodyContext.call(this, parser);
    this.preassigns = null; // AssignmentBlockContext;
    this.inner = null; // WhileStmtContext;
    this.postassigns = null; // AssignmentBlockContext;
    WhileBodyContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NestedLoopContext.prototype = Object.create(WhileBodyContext.prototype);
NestedLoopContext.prototype.constructor = NestedLoopContext;

QingParser.NestedLoopContext = NestedLoopContext;

NestedLoopContext.prototype.whileStmt = function() {
    return this.getTypedRuleContext(WhileStmtContext,0);
};

NestedLoopContext.prototype.assignmentBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignmentBlockContext);
    } else {
        return this.getTypedRuleContext(AssignmentBlockContext,i);
    }
};
NestedLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterNestedLoop(this);
	}
};

NestedLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitNestedLoop(this);
	}
};

NestedLoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitNestedLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};



QingParser.WhileBodyContext = WhileBodyContext;

QingParser.prototype.whileBody = function() {

    var localctx = new WhileBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, QingParser.RULE_whileBody);
    var _la = 0; // Token type
    try {
        this.state = 67;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            localctx = new SimpleLooopContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 58;
            localctx.assigns = this.assignmentBlock();
            break;

        case 2:
            localctx = new NestedLoopContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===QingParser.VARIABLE) {
                this.state = 59;
                localctx.preassigns = this.assignmentBlock();
            }

            this.state = 62;
            localctx.inner = this.whileStmt();
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===QingParser.VARIABLE) {
                this.state = 63;
                localctx.postassigns = this.assignmentBlock();
            }

            break;

        case 3:
            localctx = new CondLoopContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 66;
            localctx.cond = this.conditional();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_assignmentBlock;
    return this;
}

AssignmentBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentBlockContext.prototype.constructor = AssignmentBlockContext;

AssignmentBlockContext.prototype.assignment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignmentContext);
    } else {
        return this.getTypedRuleContext(AssignmentContext,i);
    }
};

AssignmentBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterAssignmentBlock(this);
	}
};

AssignmentBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitAssignmentBlock(this);
	}
};

AssignmentBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitAssignmentBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.AssignmentBlockContext = AssignmentBlockContext;

QingParser.prototype.assignmentBlock = function() {

    var localctx = new AssignmentBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, QingParser.RULE_assignmentBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 69;
            this.assignment();
            this.state = 72; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===QingParser.VARIABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_assignment;
    this.left = null; // VariableContext
    this.right = null; // ExpressionContext
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.EQ = function() {
    return this.getToken(QingParser.EQ, 0);
};

AssignmentContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitAssignment(this);
	}
};

AssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.AssignmentContext = AssignmentContext;

QingParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, QingParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        localctx.left = this.variable();
        this.state = 75;
        this.match(QingParser.EQ);
        this.state = 76;
        localctx.right = this.expression(0);
        this.state = 77;
        this.match(QingParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_conditional;
    this.cond = null; // ConditionContext
    this.condtrue = null; // AssignmentBlockContext
    this.condfalse = null; // AssignmentBlockContext
    return this;
}

ConditionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalContext.prototype.constructor = ConditionalContext;

ConditionalContext.prototype.LPAREN = function() {
    return this.getToken(QingParser.LPAREN, 0);
};

ConditionalContext.prototype.RPAREN = function() {
    return this.getToken(QingParser.RPAREN, 0);
};

ConditionalContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ConditionalContext.prototype.assignmentBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AssignmentBlockContext);
    } else {
        return this.getTypedRuleContext(AssignmentBlockContext,i);
    }
};

ConditionalContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterConditional(this);
	}
};

ConditionalContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitConditional(this);
	}
};

ConditionalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitConditional(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.ConditionalContext = ConditionalContext;

QingParser.prototype.conditional = function() {

    var localctx = new ConditionalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, QingParser.RULE_conditional);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(QingParser.T__6);
        this.state = 80;
        this.match(QingParser.LPAREN);
        this.state = 81;
        localctx.cond = this.condition();
        this.state = 82;
        this.match(QingParser.RPAREN);
        this.state = 83;
        this.match(QingParser.T__1);
        this.state = 84;
        localctx.condtrue = this.assignmentBlock();
        this.state = 85;
        this.match(QingParser.T__2);
        this.state = 86;
        this.match(QingParser.T__7);
        this.state = 87;
        this.match(QingParser.T__1);
        this.state = 88;
        localctx.condfalse = this.assignmentBlock();
        this.state = 89;
        this.match(QingParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_condition;
    this.left = null; // ExpressionContext
    this.op = null; // RelopContext
    this.right = null; // ExpressionContext
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ConditionContext.prototype.relop = function() {
    return this.getTypedRuleContext(RelopContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitCondition(this);
	}
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.ConditionContext = ConditionContext;

QingParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, QingParser.RULE_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        localctx.left = this.expression(0);
        this.state = 92;
        localctx.op = this.relop();
        this.state = 93;
        localctx.right = this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.LPAREN = function() {
    return this.getToken(QingParser.LPAREN, 0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.RPAREN = function() {
    return this.getToken(QingParser.RPAREN, 0);
};

ExpressionContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ExpressionContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QingParser.PLUS);
    } else {
        return this.getToken(QingParser.PLUS, i);
    }
};


ExpressionContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(QingParser.MINUS);
    } else {
        return this.getToken(QingParser.MINUS, i);
    }
};


ExpressionContext.prototype.POW = function() {
    return this.getToken(QingParser.POW, 0);
};

ExpressionContext.prototype.TIMES = function() {
    return this.getToken(QingParser.TIMES, 0);
};

ExpressionContext.prototype.DIV = function() {
    return this.getToken(QingParser.DIV, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



QingParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, QingParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QingParser.LPAREN:
            this.state = 96;
            this.match(QingParser.LPAREN);
            this.state = 97;
            this.expression(0);
            this.state = 98;
            this.match(QingParser.RPAREN);
            break;
        case QingParser.VARIABLE:
        case QingParser.SCIENTIFIC_NUMBER:
        case QingParser.PLUS:
        case QingParser.MINUS:
            this.state = 103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===QingParser.PLUS || _la===QingParser.MINUS) {
                this.state = 100;
                _la = this._input.LA(1);
                if(!(_la===QingParser.PLUS || _la===QingParser.MINUS)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 105;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 106;
            this.atom();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 120;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 118;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, QingParser.RULE_expression);
                    this.state = 109;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 110;
                    this.match(QingParser.POW);
                    this.state = 111;
                    this.expression(6);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, QingParser.RULE_expression);
                    this.state = 112;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 113;
                    _la = this._input.LA(1);
                    if(!(_la===QingParser.TIMES || _la===QingParser.DIV)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 114;
                    this.expression(5);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, QingParser.RULE_expression);
                    this.state = 115;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 116;
                    _la = this._input.LA(1);
                    if(!(_la===QingParser.PLUS || _la===QingParser.MINUS)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 117;
                    this.expression(4);
                    break;

                } 
            }
            this.state = 122;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.scientific = function() {
    return this.getTypedRuleContext(ScientificContext,0);
};

AtomContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.AtomContext = AtomContext;

QingParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, QingParser.RULE_atom);
    try {
        this.state = 125;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QingParser.SCIENTIFIC_NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 123;
            this.scientific();
            break;
        case QingParser.VARIABLE:
            this.enterOuterAlt(localctx, 2);
            this.state = 124;
            this.variable();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ScientificContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_scientific;
    return this;
}

ScientificContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScientificContext.prototype.constructor = ScientificContext;

ScientificContext.prototype.SCIENTIFIC_NUMBER = function() {
    return this.getToken(QingParser.SCIENTIFIC_NUMBER, 0);
};

ScientificContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterScientific(this);
	}
};

ScientificContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitScientific(this);
	}
};

ScientificContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitScientific(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.ScientificContext = ScientificContext;

QingParser.prototype.scientific = function() {

    var localctx = new ScientificContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, QingParser.RULE_scientific);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(QingParser.SCIENTIFIC_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.VARIABLE = function() {
    return this.getToken(QingParser.VARIABLE, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitVariable(this);
	}
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.VariableContext = VariableContext;

QingParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, QingParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(QingParser.VARIABLE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RelopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QingParser.RULE_relop;
    return this;
}

RelopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelopContext.prototype.constructor = RelopContext;

RelopContext.prototype.EQUIV = function() {
    return this.getToken(QingParser.EQUIV, 0);
};

RelopContext.prototype.NEQUIV = function() {
    return this.getToken(QingParser.NEQUIV, 0);
};

RelopContext.prototype.GT = function() {
    return this.getToken(QingParser.GT, 0);
};

RelopContext.prototype.GTE = function() {
    return this.getToken(QingParser.GTE, 0);
};

RelopContext.prototype.LT = function() {
    return this.getToken(QingParser.LT, 0);
};

RelopContext.prototype.LTE = function() {
    return this.getToken(QingParser.LTE, 0);
};

RelopContext.prototype.enterRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.enterRelop(this);
	}
};

RelopContext.prototype.exitRule = function(listener) {
    if(listener instanceof QingListener ) {
        listener.exitRelop(this);
	}
};

RelopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QingVisitor ) {
        return visitor.visitRelop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QingParser.RelopContext = RelopContext;

QingParser.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, QingParser.RULE_relop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QingParser.GT) | (1 << QingParser.GTE) | (1 << QingParser.LT) | (1 << QingParser.LTE) | (1 << QingParser.EQUIV) | (1 << QingParser.NEQUIV))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


QingParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 9:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

QingParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.QingParser = QingParser;
