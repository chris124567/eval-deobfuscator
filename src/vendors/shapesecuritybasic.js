const vm = require("vm");
const Shift = require("shift-ast");
const util = require("../util");
const commonobfuscations = require("../commonobfuscations");

module.exports = function ShapeSecurityBasic(script) {
    /*
    Running the deobfuscated form of the script causes console.log outputs saying that "securemsg.js" tests are failing.
    /*
    while this makes the script actually intelligible, it fails their "securemsg.js" tests.  I think it has to do with how I handle unprintable/unicode characters.
    */
    util.normalizeIdentifiers(script);

    var scriptContext = util.createEmptyVmContext();

    /* the deobfuscator functions are called like:
    a = 3
    s(a, 199, 21, 30, 3, 88, 31)
    this gets all the variable assignments of the form (var a = xxx;) and puts them in the context.  this is ok because everything is normalized and these variables aren't modified by any functions
    */
    var deobfuscatorInts = script.query(
        `VariableDeclarationStatement[declaration.type="VariableDeclaration"][declaration.kind="var"][declaration.declarators.length=1][declaration.declarators.0.init.type="LiteralNumericExpression"]`
    );
    deobfuscatorInts.forEach((node) => {
        // assign the variables
        vm.runInContext(util.getNodeCode(node), scriptContext);
    });

    // find all functions that begin with "var xxx = arguments.length".  these are one kind of string deobfuscator functions
    var basicDeobfuscaterFunctions = script.query(
        `FunctionDeclaration[isAsync=false][isGenerator=false][params.type="FormalParameters"][params.items.length=1][body.statements.0.type="VariableDeclarationStatement"][body.statements.0.declaration.declarators.0.type="VariableDeclarator"][body.statements.0.declaration.declarators.0.init.object.name="arguments"][body.statements.0.declaration.declarators.0.init.property="length"]`
    );

    basicDeobfuscaterFunctions.forEach((node) => {
        vm.runInContext(util.getNodeCode(node), scriptContext);
        var functionName = node.name.name;
        var calls = script.query(`CallExpression[callee.name=${JSON.stringify(functionName)}]`);
        calls.replace((callNode) => {
            try {
                return util.appropriateLiteral(
                    callNode,
                    vm.runInContext(util.getNodeCode(callNode), scriptContext)
                );
            } catch (e) {
                return callNode;
            }
        });
    });

    /*
    This function replaces calls to the toString radix based deobfuscation function with the real value of the string.
 
    The function looks something like this:
    function deobfuscate(a, b) {
          a += b;
          return a.toString(36);
    }
    */
    const toStringRadixDeobfuscator = script
        .query(
            `FunctionDeclaration[isAsync=false][isGenerator=false][params.type="FormalParameters"][params.items.length=2][body.statements.0.type="ExpressionStatement"][body.statements.0.expression.type="CompoundAssignmentExpression"][body.statements.0.expression.operator="+="]`
        )
        .first();
    if (toStringRadixDeobfuscator.length) {
        const toStringRadixDeobfuscatorNode = toStringRadixDeobfuscator.nodes[0];
        const toStringRadixDeobfuscatorName = toStringRadixDeobfuscatorNode.name.name;
        vm.runInContext(util.getNodeCode(toStringRadixDeobfuscatorNode), scriptContext);

        const toStringRadixDeobfuscatorCalls = script.query(
            `CallExpression[callee.name=${JSON.stringify(toStringRadixDeobfuscatorName)}]`
        );
        toStringRadixDeobfuscatorCalls.replace((callNode) => {
            try {
                return util.appropriateLiteral(
                    callNode,
                    vm.runInContext(util.getNodeCode(callNode), scriptContext)
                );
            } catch (e) {
                return callNode;
            }
        });
    }

    /*
    there is a function that is essentially:
    function x(y) {
        return y > 637
    }
    this replaces all calls of it with the actual true/false value
    */
    const trueFalseFunction = script
        .query(
            `FunctionDeclaration[isAsync=false][isGenerator=false][params.type="FormalParameters"][params.items.length=1][body.statements.length=1][body.statements.0.type="ReturnStatement"][body.statements.0.expression.type="BinaryExpression"][body.statements.0.expression.operator=">"]`
        )
        .first();
    if (trueFalseFunction.length) {
        const trueFalseFunctionNode = trueFalseFunction.nodes[0];
        const trueFalseFunctionName = trueFalseFunctionNode.name.name;
        vm.runInContext(util.getNodeCode(trueFalseFunctionNode), scriptContext);

        const trueFalseFunctionCalls = script.query(
            `CallExpression[callee.name=${JSON.stringify(trueFalseFunctionName)}]`
        );
        trueFalseFunctionCalls.replace((callNode) => {
            try {
                return util.appropriateLiteral(
                    callNode,
                    vm.runInContext(util.getNodeCode(callNode), scriptContext)
                );
            } catch (e) {
                return callNode;
            }
        });
    }

    util.simplifyLiteralConditions(script);

    return script;
};
