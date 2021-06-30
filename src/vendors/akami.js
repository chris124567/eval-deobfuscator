const util = require("../util");
const commonobfuscations = require("../commonobfuscations");

module.exports = function Akami(script) {
    commonobfuscations.substituteArrayLiterals(script);
    util.convertComputedToStatic(script);

    return script;
};
