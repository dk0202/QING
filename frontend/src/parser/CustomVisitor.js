const QingVisitor = require('./QingVisitor');



class CustomVisitor extends QingVisitor.QingVisitor {

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
    /

    visitAssignment(ctx){
        return({var:ctx.left.getText(), assignment:ctx.right.getText()})
    }

}

export default CustomVisitor;
// module.exports = CustomVisitor;