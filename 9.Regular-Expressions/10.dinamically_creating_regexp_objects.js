let name = "harry";

let text  = "Harry is a souspicious character.";

let regexp = new RegExp("\\b(" + name +")\\b", "gi");

console.log(text.replace(regexp, "_$1_"));