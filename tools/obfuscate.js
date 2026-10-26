// Ofusca el JavaScript que llega por stdin y lo escribe por stdout (lo invoca build.py).
const JavaScriptObfuscator = require('javascript-obfuscator');

let code = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (c) => (code += c));
process.stdin.on('end', () => {
  const result = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    stringArray: true,
    rotateStringArray: true,
    stringArrayEncoding: ['base64'],
    identifierNamesGenerator: 'hexadecimal',
    deadCodeInjection: false,
    // salida reproducible: el mismo codigo fuente da siempre el mismo bundle
    seed: 7112,
    // las funciones globales las llaman los onclick="..." del HTML: no se renombran
    renameGlobals: false,
  });
  process.stdout.write(result.getObfuscatedCode());
});
