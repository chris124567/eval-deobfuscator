## eval-deobfuscator
A deobfuscator based on ```eval```ing deobfuscation functions.   This is done through NodeJS [VMs](https://nodejs.org/api/vm.html).

### Run

    npm install
    node src/index.js

### Features
The deobfuscators do not work by looking for hardcoded function names so they should continue to work regardless of updates (unless the obfuscation schemes change significantly).  
Currently supported and tested scripts (more may work if they use any of the obfuscation techniques listed below this list):

    * Akami
    * ArkoseLabs
    * Datadome
    * Distil
    * Shape Security / F5 (non virtual machine based version)
    * PerimeterX
    * Meetrics
    * Imperva (work in progress)
    * Cloudflare anti-scraping
    * ThreatMetrix

Multiple different generic obfuscators supported:
    
    * Array literal subsitution
    * Obfuscator.io array literal subsitution with function
    * Obfuscator.io base64
    * Obfuscator.io RC4
    * JScrambler (strings)

### Requests
Open an issue to a request a new script.
