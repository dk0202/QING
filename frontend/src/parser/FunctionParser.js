var antlr4 = require('antlr4');
var QingLexer = require('./QingLexer').QingLexer;
var QingParser = require('./QingParser').QingParser;
var QingListener = require('./QingListener').QingListener;
const QingVisitor = require('./QingVisitor').QingVisitor;

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}



class CustomVisitor extends QingVisitor {

  constructor(){
    super();
  }


  start(ctx) {
    return this.visit(ctx);
  }

  visitFnct(ctx){
    var func = {
      functionName: ctx.fname.getText(),
      functionArgs: ctx.args.getText().split(","),
      initialAssignments: this.visit(ctx.body.inits),
      functionBody: this.visit(ctx.body.loop)
    }
    return func;
  }
  visitWhileStmt(ctx){
    if(ctx.body.simpleLooop){
      console.log("simple")
    }
    else if (ctx.body.nestedLoop){
      console.log("simple")

    }
    return this.visit(ctx.children)

  }


  visitAssignment(ctx){
    return({var:ctx.left.getText(), assignment:ctx.right.getText()})
  }

}


export class FunctionParser{
  constructor(ftext){
    this.functionText = ftext;
    this.functionName = "";
    this.functionArgs = [];
    this.initialAssignments = [];
    this.VCs = [];
    this.variables = [];
    this.n_loops = 0;
  }

  parseFunction(){

    var chars = new antlr4.InputStream(this.functionText);
    var lexer = new QingLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new QingParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.fnct();

    var functionName = "";
    var functionArgs = [];
    var initialAssignments = null;
    var VCs = [];
    var variables = [];
var n_loops = 0;
    var loopIndex = 0;

    var VCListener = function() {
      QingListener.call(this);
      return this;
    };

    VCListener.prototype = Object.create(QingListener.prototype);
    VCListener.prototype.constructor = VCListener;

    VCListener.prototype.enterFnct = function(ctx) {
      functionName = ctx.fname.getText()
      functionArgs = ctx.args.getText().split(',')

    };

    VCListener.prototype.enterFbody = function(ctx) {
      var init =  {
        loopIndex: 1,
          substitutions: new CustomVisitor().start(ctx.inits)
      }
      initialAssignments = new CustomVisitor().start(ctx.inits);
    };

    VCListener.prototype.enterWhileStmt = function(ctx) {
      loopIndex += 1;
      n_loops += 1;
    };


    VCListener.prototype.enterAssignment = function(ctx) {
      variables.push(ctx.left.getText());
    };



    VCListener.prototype.exitWhileStmt = function(ctx) {
      loopIndex -= 1;
    };

    VCListener.prototype.enterCondLoop = function(ctx) {

      var branch1 ={
        left: {
          loopIndex: loopIndex,
          condition: ctx.cond.cond.getText(),
          substitutions: new CustomVisitor().start(ctx.cond.condtrue)
        },
        right: {
          loopIndex: loopIndex,
          substitutions: new CustomVisitor().start(ctx.cond.condtrue)
        }
      }
      VCs.push(branch1);

      var branch2 ={
        left: {
          loopIndex: loopIndex,
          condition: '!' + ctx.cond.cond.getText(),
          substitutions: new CustomVisitor().start(ctx.cond.condfalse)
        },
        right: {
          loopIndex: loopIndex,
          substitutions: new CustomVisitor().start(ctx.cond.condfalse)
        }
      }
      VCs.push(branch2);
    };


    VCListener.prototype.enterNestedLoop = function(ctx) {
      var vc ={
        left: {
          loopIndex: loopIndex,
          condition: ctx.parentCtx.cond.getText(),
          substitutions: []
        },
        right: {
          loopIndex: loopIndex + 1,
          substitutions: new CustomVisitor().start(ctx.preassigns)
        }
      }
      VCs.push(vc);

    };

    VCListener.prototype.exitNestedLoop = function(ctx) {

      var vc ={
        left: {
          loopIndex: loopIndex + 1,
          condition: ctx.inner.cond.getText(),
          substitutions: []
        },
        right: {
          loopIndex: loopIndex ,
          substitutions: new CustomVisitor().start(ctx.postassigns)
        }
      }
      VCs.push(vc);

    };

    VCListener.prototype.enterSimpleLooop = function(ctx) {
      var vc ={
        left: {
          loopIndex: loopIndex,
          condition: ctx.parentCtx.cond.getText(),
          substitutions: []
        },
        right: {
          loopIndex: loopIndex ,
          substitutions: new CustomVisitor().start(ctx.assigns)
        }
      }
      VCs.push(vc);
    };

    var printer = new VCListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
    this.VCs = VCs;
    this.functionName = functionName;
    this.functionArgs = functionArgs;
    this.initialAssignments = initialAssignments;
    this.variables = variables.filter(onlyUnique).sort();
    this.n_loops = n_loops;
  }



}



export default FunctionParser;
