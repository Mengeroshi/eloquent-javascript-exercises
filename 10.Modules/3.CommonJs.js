const {formatDate} = require("./format-date");

console.log(formatDate(new Date(2019, 8, 13),
                                "dddd the Do"));


/*/-----------------
require.cache = Object.create(null);

function require(name){
    if(!(name in require.cache)){
        let code = readFile(name);
        let module = {exports:{}};
        require.cache[name] = module;
        let wraper = Function("require, exports, module", code);
        wraper(require, module.exports.module);
    }
    return require.cache[name].exports;
}
*/
const {parse} = require("ini");

console.log(parse("x = 10\n y = 20"));