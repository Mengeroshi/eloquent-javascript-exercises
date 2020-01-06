let age = {
    Boris: 39,
    Liang: 22, 
    Julia: 62
};

console.log(`Julia is ${age["Julia"]}`);

console.log("Is Jack's age known?", "Jack" in age);

console.log("Is toString's age known?", "toString" in age);


console.log("toString" in Object.create(null));
console.log("*******************************************************");

//-------------------------------------------------
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log(`Julia is ${ages.get("Julia")}`);

console.log("Is Jack's age known?", ages.has("Jack"));

console.log(ages.has("toString"));

//-----------------------------------
console.log({x:1}.hasOwnProperty("x"));
console.log({x:1}.hasOwnProperty("toString"));
