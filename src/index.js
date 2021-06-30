const {refactor} = require("shift-refactor");
const Shift = require("shift-ast");
const vendors = require("./vendors");
const fs = require("fs");

const filesDirectory = "files/";
const outputDirectory = "output/";
const scriptInfo = [
    {
        name: "datadome.js",
        func: vendors.Datadome,
    },
    {
        name: "distil.js",
        func: vendors.Distil,
    },
    {
        name: "akami.js",
        func: vendors.Akami,
    },
    {
        name: "arkoselabs.js",
        func: vendors.ArkoseLabs,
    },
    {
        name: "shapesecuritybasic.js",
        func: vendors.ShapeSecurityBasic,
    },
    {
        name: "perimeterx.js",
        func: vendors.PerimeterX,
    },
    {
        name: "meetrics.js",
        func: vendors.Meetrics,
    },
    {
        name: "imperva.js",
        func: vendors.Imperva,
    },
    {
        name: "cloudflare.js",
        func: vendors.Cloudflare,
    },
    {
        name: "threatmetrix.js",
        func: vendors.ThreatMetrix,
    },
];

scriptInfo.forEach((currentScriptInfo) => {
    var fileContents = fs.readFileSync(filesDirectory + currentScriptInfo.name, "utf8");
    var script = refactor(fileContents);

    script = currentScriptInfo.func(script);
    fs.writeFileSync(outputDirectory + currentScriptInfo.name, script.print());
    console.log(
        "Deobfuscated " +
            filesDirectory +
            currentScriptInfo.name +
            " and saved the output to " +
            outputDirectory +
            currentScriptInfo.name
    );

    script.session.cleanup();
    delete script;
});
