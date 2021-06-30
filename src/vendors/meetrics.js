const vm = require("vm");
const util = require("../util");

module.exports = function Meetrics(script) {
    const stringDeobfuscatorFunction = script
        .query(
            `FunctionDeclaration[isAsync=false][isGenerator=false][name.type="BindingIdentifier"][params.type="FormalParameters"][params.items.length=1][body.statements.0.type="VariableDeclarationStatement"][body.statements.0.declaration.declarators.length=2][body.statements.1.type="ForStatement"]`
        )
        .first();
    var scriptContext = util.createEmptyVmContext();

    const longStringDeobfuscatorFunction = script.query(
        `FunctionDeclaration[isAsync=false][isGenerator=false][params.type="FormalParameters"][params.items.length=1][body.statements.0.type="ForStatement"][body.statements.0.init.declarators.0.init.value=""]`
    );
    longStringDeobfuscatorFunction.forEach((node) => {
        var functionName = node.name.name;
        vm.runInContext(util.getNodeCode(node), scriptContext);
        script
            .query(
                `CallExpression[arguments.0.type="ArrayExpression"][callee.name=${JSON.stringify(
                    functionName
                )}]`
            )
            .replace((callNode) =>
                util.appropriateLiteral(
                    callNode,
                    vm.runInContext(util.getNodeCode(callNode), scriptContext)
                )
            );
    });
    stringDeobfuscatorFunction.forEach((node) => {
        var functionName = node.name.name;
        vm.runInContext(util.getNodeCode(node), scriptContext);
        script
            .query(
                `CallExpression[arguments.0.type="LiteralStringExpression"][callee.name=${JSON.stringify(
                    functionName
                )}]`
            )
            .replace((callNode) =>
                util.appropriateLiteral(
                    callNode,
                    vm.runInContext(util.getNodeCode(callNode), scriptContext)
                )
            );
    });

    return script;
};
