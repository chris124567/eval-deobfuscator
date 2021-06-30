const util = require("../util");
const commonobfuscations = require("../commonobfuscations");

module.exports = function Cloudflare(script) {
    commonobfuscations.undoObfuscatorIoLiteralSubsitution(script, util.createEmptyVmContext());
    util.convertComputedToStatic(script);
    // util.normalizeIdentifiers(script);

    return script;
};
