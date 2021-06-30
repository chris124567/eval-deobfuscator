const vm = require("vm");
const commonobfuscations = require("../commonobfuscations");
const util = require("../util");

module.exports = function Imperva(script) {
    var scriptContext = util.createEmptyVmContext();

    // find first function that has a string assignment
    var bigStringAssignerFunction = util.nthParent(
        script
            .query(
                `FunctionBody > VariableDeclarationStatement > VariableDeclaration > VariableDeclarator > LiteralStringExpression`
            )
            .first(),
        4
    );
    vm.runInContext(util.getFirstCode(bigStringAssignerFunction), scriptContext);

    // replace the calls like "EN.substring(113, 227)"
    var subStrings = script.query(
        `CallExpression[callee.type="StaticMemberExpression"][callee.object.type="IdentifierExpression"][callee.property="substr"][arguments.length=2][arguments.0.type="LiteralNumericExpression"][arguments.1.type="LiteralNumericExpression"]`
    );
    subStrings.replace((node) => {
        return util.appropriateLiteral(
            node,
            vm.runInContext(util.getNodeCode(node), scriptContext)
        );
    });

    commonobfuscations.undoObfuscatorIoLiteralSubsitution(script, scriptContext);
    commonobfuscations.substituteArrayLiterals(script);

    util.convertComputedToStatic(script);
    util.normalizeIdentifiers(script);
    return script;
};
