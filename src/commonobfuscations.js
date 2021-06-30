const vm = require("vm");
const util = require("./util");
const {RefactorSession} = require("shift-refactor");
const {parseScript} = require("shift-parser");
const Shift = require("shift-ast");

// Stolen from mass-beautifier
function substituteArrayLiterals(script) {
    const allNamedArrays = script.query(`VariableDeclarator[init.type="ArrayExpression"]`);

    const allNamedLiteralArrays = allNamedArrays.filter(
        ({init}) => init.elements.findIndex((element) => !element.type.startsWith("Literal")) === -1
    );

    allNamedLiteralArrays.forEach((array) => {
        const query = `ComputedMemberExpression[object.type=IdentifierExpression][object.name=${JSON.stringify(
            array.binding.name
        )}][expression.type="LiteralNumericExpression"]`;
        script.query(query).replace((node) => array.init.elements[node.expression.value]);
    });
}

function undoObfuscatorIoLiteralSubsitution(script, scriptContext) {
    // get first big array
    const stringArrayQuery = script
        .query(
            `Script > VariableDeclarationStatement[declaration.declarators.length=1][declaration.declarators.0.init.type="ArrayExpression"][declaration.declarators.0.init.elements.length]`
        )
        .first();

    // get first function assigned to variable that takes two arguments (this is the standard obfuscator.io deobfuscation function)
    const deobfuscationFunctionQuery = script
        .query(
            `VariableDeclarator[init.type="FunctionExpression"][init.params.items.length=2][init.name=null][init.body.statements.length>2]`
        )
        .first();

    // find function that shifts the array
    const shifterFunctionQuery = script
        .query(
            `ExpressionStatement[expression.type="CallExpression"][expression.callee.type="FunctionExpression"][expression.callee.isAsync=false][expression.callee.isGenerator=false][expression.callee.params.type="FormalParameters"][expression.callee.params.items.length=2][expression.callee.body.statements.length=2][expression.callee.body.statements.0.type="VariableDeclarationStatement"][expression.callee.body.statements.0.declaration.declarators.0.init.type="FunctionExpression"][expression.arguments.length=2]`
        )
        .first();

    if (
        !stringArrayQuery.nodes.length ||
        !deobfuscationFunctionQuery.nodes.length ||
        !shifterFunctionQuery.nodes.length
    ) {
        return;
    }

    var deobfuscationFunctionName = deobfuscationFunctionQuery.nodes[0].binding.name;

    // evaluate the obfuscated string array and deobfuscation function assignment
    vm.runInContext(util.getFirstCode(stringArrayQuery), scriptContext);
    vm.runInContext(util.getFirstCode(deobfuscationFunctionQuery), scriptContext);
    vm.runInContext(util.getFirstCode(shifterFunctionQuery), scriptContext);

    // Replace deobfuscation calls calls with real value
    script
        .query(
            `CallExpression[callee.type="IdentifierExpression"][callee.name=${JSON.stringify(
                deobfuscationFunctionName
            )}][arguments.length=1][arguments.0.type="LiteralStringExpression"]`
        )
        .replace((node) =>
            util.appropriateLiteral(node, vm.runInContext(util.getNodeCode(node), scriptContext))
        );
    // return new Shift.LiteralStringExpression({
    //     value: scriptContext[deobfuscationFunctionName](node.arguments[0].value),
    // });

    stringArrayQuery.delete();
    deobfuscationFunctionQuery.delete();
    shifterFunctionQuery.delete();
}

function undoObfuscatorIoBase64(script, scriptContext) {
    // get first big array
    const stringArrayQuery = script
        .query(
            `Script > VariableDeclarationStatement[declaration.declarators.length=1][declaration.declarators.0.init.type="ArrayExpression"][declaration.declarators.0.init.elements.length]`
        )
        .first();
    // get first function assigned to variable that takes two arguments (this is the standard obfuscator.io deobfuscation function)
    const deobfuscationFunctionQuery = script
        .query(
            `VariableDeclarator[init.type="FunctionExpression"][init.params.items.length=2][init.name=null][init.body.statements.length>4]`
        )
        .first();

    if (!stringArrayQuery.nodes.length || !deobfuscationFunctionQuery.nodes.length) {
        return;
    }

    var deobfuscationFunctionName = deobfuscationFunctionQuery.nodes[0].binding.name;

    // evaluate the obfuscated string array and deobfuscation function assignment
    vm.runInContext(util.getFirstCode(stringArrayQuery), scriptContext);
    vm.runInContext(util.getFirstCode(deobfuscationFunctionQuery), scriptContext);
    // Replace deobfuscation calls calls with real value
    script
        .query(
            `CallExpression[callee.type="IdentifierExpression"][callee.name=${JSON.stringify(
                deobfuscationFunctionName
            )}][arguments.length=1][arguments.0.type="LiteralStringExpression"]`
        )
        .replace((node) =>
            util.appropriateLiteral(node, vm.runInContext(util.getNodeCode(node), scriptContext))
        );

    // .replace((node) => {
    //     return new Shift.LiteralStringExpression({
    //         value: scriptContext[deobfuscationFunctionName](node.arguments[0].value),
    //     });
    // });

    stringArrayQuery.delete();
    deobfuscationFunctionQuery.delete();
}

function undoObfuscatorIoRC4(script, scriptContext) {
    // get first big array
    const stringArrayQuery = script
        .query(
            `VariableDeclarationStatement[declaration.declarators.length=1][declaration.declarators.0.init.type="ArrayExpression"][declaration.declarators.0.init.elements.length]`
        )
        .first();
    // get first function assigned to variable that takes two arguments (this is the standard obfuscator.io deobfuscation function)
    const deobfuscationFunctionQuery = script
        .query(
            `VariableDeclarator[init.type="FunctionExpression"][init.params.items.length=2][init.name=null][init.body.statements.length>4]`
        )
        .first();
    // find function that shifts the array
    const shifterFunctionQuery = script
        .query(
            `ExpressionStatement[expression.type="CallExpression"][expression.callee.type="FunctionExpression"][expression.callee.isAsync=false][expression.callee.isGenerator=false][expression.callee.params.type="FormalParameters"][expression.callee.params.items.length=2][expression.callee.body.statements.0.type="VariableDeclarationStatement"][expression.callee.body.statements.0.declaration.declarators.0.init.type="FunctionExpression"][expression.arguments.length=2]`
        )
        .first();

    if (
        !stringArrayQuery.nodes.length ||
        !deobfuscationFunctionQuery.nodes.length ||
        !shifterFunctionQuery.nodes.length
    ) {
        console.log("Couldnt find one of the functions");
        return;
    }

    var deobfuscationFunctionName = deobfuscationFunctionQuery.nodes[0].binding.name;

    // evaluate the obfuscated string array and deobfuscation function assignment
    vm.runInContext(util.getFirstCode(stringArrayQuery), scriptContext);
    vm.runInContext(util.getFirstCode(deobfuscationFunctionQuery), scriptContext);
    vm.runInContext(util.getFirstCode(shifterFunctionQuery), scriptContext);
    // Replace deobfuscation calls calls with real value
    script
        .query(
            `CallExpression[callee.type="IdentifierExpression"][callee.name=${JSON.stringify(
                deobfuscationFunctionName
            )}][arguments.length=2][arguments.0.type="LiteralStringExpression"][arguments.1.type="LiteralStringExpression"]`
        )
        .replace((node) =>
            util.appropriateLiteral(node, vm.runInContext(util.getNodeCode(node), scriptContext))
        );

    // .replace((node) => {
    //     console.log(node);
    //     return util.appropriateLiteral(
    //         node,
    //         scriptContext[deobfuscationFunctionName](
    //             ...util.transformNodesIntoValues(node.arguments, scriptContext)
    //         )
    //     );
    // });

    shifterFunctionQuery.delete();
    stringArrayQuery.delete();
    deobfuscationFunctionQuery.delete();
}

/*
I'm pretty sure this type of obfuscation is the work of jscrambler. It matches https://docs.jscrambler.com/code-integrity/documentation/transformations/string-concealing at least.
This has been tested with ArkoseLabs and Geocomply (they both had slight variations of this type of obfuscation).
*/
function undoJscramblerString(script, scriptContext) {
    var combinedDeobfuscatorCode = "";

    // the first object property assignment is the string deobfuscator object
    const firstPropertyAssignment = script
        .query(`StaticMemberAssignmentTarget[object.type="IdentifierExpression"]`)
        .first();
    if (!firstPropertyAssignment.nodes.length) return;
    const deobfuscatorObjectName = firstPropertyAssignment.nodes[0].object.name;
    const deobfuscatorObjectInitializer = script.query(
        `FunctionDeclaration[name.name=${JSON.stringify(deobfuscatorObjectName)}]`
    );
    if (deobfuscatorObjectInitializer.nodes.length) {
        combinedDeobfuscatorCode += util.getFirstCode(deobfuscatorObjectInitializer);
    }
    // we have to do this before the rest of the assignments because the modifier functions depend on it being defined

    // newer versions of jscrambler do this
    const objectWindowAssignmentQuery = script.query(
        `Script > ExpressionStatement[expression.type="AssignmentExpression"][expression.binding.type="StaticMemberAssignmentTarget"][expression.binding.object.type="IdentifierExpression"][expression.expression.type="IdentifierExpression"][expression.expression.name="window"]`
    );
    combinedDeobfuscatorCode += util.getFirstCode(objectWindowAssignmentQuery);

    // i'm not sure what these calls exactly do but without them the deobfuscator object calls do not work, they are the three calls at the top of arkoselabs.js that look like x(y());
    const modifierFunctionsQuery = script.query(
        `Script > ExpressionStatement[expression.type="CallExpression"][expression.callee.type="IdentifierExpression"][expression.arguments.length=1]`
    );
    modifierFunctionsQuery.forEach((node) => {
        try {
            callerFunctionCodeQuery = script.query(
                `FunctionDeclaration[isAsync=false][isGenerator=false][name.name=${JSON.stringify(
                    node.expression.callee.name
                )}][params.type="FormalParameters"]`
            );
            combinedDeobfuscatorCode += util.getFirstCode(callerFunctionCodeQuery);
        } catch {}
        try {
            subCallerFunctionCodeQuery = script.query(
                `FunctionDeclaration[isAsync=false][isGenerator=false][name.name=${JSON.stringify(
                    node.expression.arguments[0].callee.name
                )}][params.type="FormalParameters"]`
            );
            combinedDeobfuscatorCode += util.getFirstCode(subCallerFunctionCodeQuery);
        } catch {}
        combinedDeobfuscatorCode += util.getNodeCode(node);
    });

    // e4QQ in arkoselabs.js.  Not present in geocomply.  This is the function that returns a large obfuscated string.
    const longStringFunctionAssignment = script
        .query(
            `AssignmentExpression[binding.type="StaticMemberAssignmentTarget"][binding.object.type="IdentifierExpression"][expression.type="IdentifierExpression"]`
        )
        .first();

    if (longStringFunctionAssignment.nodes.length) {
        var longStringFunctionAssignmentNode = longStringFunctionAssignment.nodes[0];

        const longStringFunction = script
            .query(
                `FunctionDeclaration[name.name=${JSON.stringify(
                    longStringFunctionAssignmentNode.expression.name
                )}]`
            )
            .first();
        if (longStringFunction.nodes.length) {
            combinedDeobfuscatorCode += util.getFirstCode(longStringFunction);
            combinedDeobfuscatorCode += util.getNodeCode(longStringFunctionAssignmentNode);
        }
    }

    // get all the functions of the deobfuscator object
    const deobfuscatorObjectAssignments = script.query(
        `AssignmentExpression[binding.type="StaticMemberAssignmentTarget"][binding.object.type="IdentifierExpression"][binding.object.name=${JSON.stringify(
            deobfuscatorObjectName
        )}]`
    );

    var deobfuscatorFunctions = [];
    deobfuscatorObjectAssignments.forEach((node) => {
        combinedDeobfuscatorCode += util.getNodeCode(node); // add the deobfuscation object's functions to the context
        deobfuscatorFunctions.push(node.binding.property);
    });

    // run all the code that sets up the deobfuscator functions in a separate context
    vm.runInContext(combinedDeobfuscatorCode, scriptContext);

    util.replacePlusStringWithIntegerValue(script); // needed for new versions of jscrambler
    util.evaluateStringMathExpressions(script);
    deobfuscatorFunctions.forEach((currentFunctionName) => {
        var query = `CallExpression[callee.type="StaticMemberExpression"][callee.object.type="IdentifierExpression"][callee.property=${JSON.stringify(
            currentFunctionName
        )}][arguments.length=1]`; // [arguments.0.type="LiteralNumericExpression"]`;
        var results = script.query(query).replace((node) => {
            var newValue;
            if (node.arguments[0].type === "LiteralNumericExpression") {
                newValue = scriptContext[deobfuscatorObjectName][currentFunctionName](
                    node.arguments[0].value
                );
                return util.appropriateLiteral(node, newValue);
            } else if (node.arguments[0].type === "IdentifierExpression") {
                try {
                    // this is significantly slower because we have to look up the referenced variable.  there is not really any thing we can do about this unfortunately
                    var referencedVariable = script
                        .query(
                            `VariableDeclarator[binding.name=${JSON.stringify(
                                node.arguments[0].name
                            )}][init.type="LiteralNumericExpression"]`
                        )
                        .first();
                    newValue = scriptContext[deobfuscatorObjectName][currentFunctionName](
                        referencedVariable.nodes[0].init.value
                    );
                    return util.appropriateLiteral(node, newValue);
                } catch (e) {
                    return node;
                }
            } else {
                return node;
            }
        });
    });
}

module.exports = {
    undoObfuscatorIoBase64: undoObfuscatorIoBase64,
    undoObfuscatorIoRC4: undoObfuscatorIoRC4,
    substituteArrayLiterals: substituteArrayLiterals,
    undoObfuscatorIoLiteralSubsitution: undoObfuscatorIoLiteralSubsitution,
    undoJscramblerString: undoJscramblerString,
};
