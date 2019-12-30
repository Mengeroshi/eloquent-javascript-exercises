object1 = {value: 10, dude: 15, plash: "whi"};
object2 = {value: 10, dude: 15, plash: "whi"};

/*
console.log(Object.keys(object1)[1]);

console.log(object1["value"] == object2["value"]);
console.log(object1[0] == object2[0]);
*/


function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])){
        return false;
      }
    }
  
    return true;
  }
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true