// Generated from Qing.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by QingParser.

function QingVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

QingVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
QingVisitor.prototype.constructor = QingVisitor;

// Visit a parse tree produced by QingParser#fnct.
QingVisitor.prototype.visitFnct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#arglist.
QingVisitor.prototype.visitArglist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#fbody.
QingVisitor.prototype.visitFbody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#whileStmt.
QingVisitor.prototype.visitWhileStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#simpleLooop.
QingVisitor.prototype.visitSimpleLooop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#nestedLoop.
QingVisitor.prototype.visitNestedLoop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#condLoop.
QingVisitor.prototype.visitCondLoop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#assignmentBlock.
QingVisitor.prototype.visitAssignmentBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#assignment.
QingVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#conditional.
QingVisitor.prototype.visitConditional = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#condition.
QingVisitor.prototype.visitCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#expression.
QingVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#atom.
QingVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#scientific.
QingVisitor.prototype.visitScientific = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#variable.
QingVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QingParser#relop.
QingVisitor.prototype.visitRelop = function(ctx) {
  return this.visitChildren(ctx);
};



exports.QingVisitor = QingVisitor;