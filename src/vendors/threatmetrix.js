const vm = require("vm");
const util = require("../util");
const Shift = require("shift-ast");
const commonobfuscations = require("../commonobfuscations");

module.exports = function ThreatMetrix(script) {
    var scriptContext = util.createEmptyVmContext();

    /* remove Number(xxx).toString(radixBase) obfuscation */
    util.replaceRecursive(
        script,
        `CallExpression[callee.property="toString"][callee.type="StaticMemberExpression"][callee.object.type="CallExpression"][callee.object.callee.type="IdentifierExpression"][callee.object.callee.name="Number"]`,
        (node) => {
            return util.appropriateLiteral(
                node,
                vm.runInContext(util.getNodeCode(node), scriptContext)
            );
        }
    );

    /* replace [][[]] + "" with "undefined" */
    script
        .query(
            `BinaryExpression[left.type="ComputedMemberExpression"][left.object.type="ArrayExpression"][left.object.elements.length=0][left.expression.type="ArrayExpression"][left.expression.elements.length=0][operator="+"][right.type="LiteralStringExpression"][right.value=""]`
        )
        .replace((node) => {
            return new Shift.LiteralStringExpression({
                value: "undefined",
            });
        });

    const deobfuscatorDictInitializer = script
        .query(
            `VariableDeclarationStatement[declaration.declarators.0.init.type="BinaryExpression"][declaration.declarators.0.init.operator="||"][declaration.declarators.0.init.right.properties.length=0]`
        )
        .first();
    if (!deobfuscatorDictInitializer.nodes.length) return script;

    vm.runInContext(util.getFirstCode(deobfuscatorDictInitializer), scriptContext);

    const deobfuscatorDictProperties = script.query(
        `AssignmentExpression[binding.type="StaticMemberAssignmentTarget"][expression.type="FunctionExpression"][binding.object.name=${JSON.stringify(
            deobfuscatorDictInitializer.nodes[0].declaration.declarators[0].binding.name
        )}]`
    );
    deobfuscatorDictProperties.forEach((node) => {
        vm.runInContext(util.getNodeCode(node), scriptContext);
    });

    /* these are the strings that are initialized with "new xx.xx("verylongstring")" that have strings extracted using the sub string function ("td_f") */
    const largeStrings = script.query(
        `NewExpression[callee.type="StaticMemberExpression"][callee.object.type="IdentifierExpression"][arguments.length=1][callee.object.name=${JSON.stringify(
            deobfuscatorDictInitializer.nodes[0].declaration.declarators[0].binding.name
        )}]`
    );

    largeStrings.parents().forEach((node) => {
        vm.runInContext(util.getNodeCode(node), scriptContext);
    });

    script
        .query(
            `CallExpression[arguments.length=2][callee.property!="substr"][callee.property!="slice"][callee.type="StaticMemberExpression"][arguments.0.type="LiteralNumericExpression"][arguments.1.type="LiteralNumericExpression"]`
        )
        .replace((node) => {
            return util.appropriateLiteral(
                node,
                vm.runInContext(util.getNodeCode(node), scriptContext)
            );
        });

    // util.normalizeIdentifiers(script);
    util.convertComputedToStatic(script);

    return script;
};
