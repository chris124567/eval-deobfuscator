const vm = require("vm");
const util = require("../util");
const commonobfuscations = require("../commonobfuscations");

module.exports = function PerimeterX(script) {
    util.normalizeIdentifiers(script);

    var scriptContext = util.createEmptyVmContext();
    var base64XorDeobfuscators = script.query(
        `FunctionDeclaration[isAsync=false][isGenerator=false][name.type="BindingIdentifier"][params.type="FormalParameters"][params.items.length=1][body.statements.0.type="ForStatement"][body.statements.0.init.type="VariableDeclaration"][body.statements.0.init.declarators.0.type="VariableDeclarator"][body.statements.0.init.declarators.0.init.type="CallExpression"][body.statements.0.init.declarators.0.init.callee.name="atob"]`
    );
    base64XorDeobfuscators.forEach((node) => {
        var functionName = node.name.name;
        // declare the function
        vm.runInContext(util.getNodeCode(node), scriptContext);
        // replace direct calls of them with actual values
        script
            .query(
                `CallExpression[arguments.length=1][arguments.0.type="LiteralStringExpression"][callee.type="IdentifierExpression"][callee.name=${JSON.stringify(
                    functionName
                )}]`
            )
            .replace((callNode) =>
                util.appropriateLiteral(
                    callNode,
                    vm.runInContext(util.getNodeCode(callNode), scriptContext)
                )
            );

        // replace referenced calls of them with actual values
        script
            .query(
                `VariableDeclarator[init.type="IdentifierExpression"][init.name=${JSON.stringify(
                    functionName
                )}]`
            )
            .forEach((referenceNode) => {
                vm.runInContext(util.getNodeCode(referenceNode), scriptContext);
                script
                    .query(
                        `CallExpression[arguments.length=1][arguments.0.type="LiteralStringExpression"][callee.type="IdentifierExpression"][callee.name=${JSON.stringify(
                            referenceNode.binding.name
                        )}]`
                    )
                    .replace((callNode) =>
                        util.appropriateLiteral(
                            callNode,
                            vm.runInContext(util.getNodeCode(callNode), scriptContext)
                        )
                    );
            });
    });

    const otherBase64ObfuscatorQuery = script
        .query(
            `FunctionDeclaration[isAsync=false][isGenerator=false][name.type="BindingIdentifier"][params.type="FormalParameters"][params.items.length=1][body.statements.length=1][body.statements.0.type="ReturnStatement"][body.statements.0.expression.type="ConditionalExpression"][body.statements.0.expression.test.left.value="function"][body.statements.0.expression.test.right.type="UnaryExpression"][body.statements.0.expression.test.right.operand.type="IdentifierExpression"][body.statements.0.expression.alternate.type="CallExpression"][body.statements.0.expression.alternate.callee.type="IdentifierExpression"]`
        )
        .first();
    if (!!otherBase64ObfuscatorQuery.nodes.length) {
        var firstResult = otherBase64ObfuscatorQuery.nodes[0];
        var returnStatement = firstResult.body.statements[0];
        var referencedFunctionName = returnStatement.expression.test.right.operand.name;
        var referencedFunctionQuery = script.query(
            `VariableDeclarator[binding.name=${JSON.stringify(
                referencedFunctionName
            )}][init.type="CallExpression"][init.callee.type="FunctionExpression"]`
        );

        vm.runInContext(util.getFirstCode(referencedFunctionQuery), scriptContext);
        vm.runInContext(util.getFirstCode(otherBase64ObfuscatorQuery), scriptContext);

        script
            .query(
                `CallExpression[arguments.length=1][arguments.0.type="LiteralStringExpression"][callee.type="IdentifierExpression"][callee.name=${JSON.stringify(
                    firstResult.name.name
                )}]`
            )
            .replace((node) =>
                util.appropriateLiteral(
                    node,
                    vm.runInContext(util.getNodeCode(node), scriptContext)
                )
            );
    }

    return script;
};
