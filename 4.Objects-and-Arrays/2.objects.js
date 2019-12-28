let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);

console.log(day1.wolf);

day1.wolf = false;

console.log(day1.wolf);

console.log(day1)

let descriptions = {
    work: "went to work",
    "touched tree": "Touched a tree",
};

let anObject = {
    left: 1,
    right: 2
};
console.log(anObject.left);

delete anObject.left;
console.log(anObject.left);

console.log("left" in anObject);
console.log("right" in anObject);

//keys

let obo = {
    x: 0,
    y: 0,
    z: 2,
};
console.log(Object.keys(obo));

//assign
let objectA = {
    a:1,
    b:2,
};
console.log("before", objectA);

Object.assign(objectA, {b:3, c:4});

console.log("after",objectA);