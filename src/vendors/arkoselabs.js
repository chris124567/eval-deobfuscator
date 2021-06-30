const util = require("../util");
const commonobfuscations = require("../commonobfuscations");

module.exports = function ArkoseLabs(script) {
    util.normalizeIdentifiers(script);
    commonobfuscations.undoJscramblerString(script, util.createEmptyVmContext());
    util.convertComputedToStatic(script);

    return script;
};
