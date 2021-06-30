const util = require("../util");
const commonobfuscations = require("../commonobfuscations");

module.exports = function Datadome(script) {
    commonobfuscations.undoObfuscatorIoBase64(script, util.createEmptyVmContext());
    util.convertComputedToStatic(script);

    return script;
};
