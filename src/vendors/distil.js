const util = require("../util");
const commonobfuscations = require("../commonobfuscations");

module.exports = function Distil(script) {
    commonobfuscations.substituteArrayLiterals(script);
    util.convertComputedToStatic(script);

    return script;
};
