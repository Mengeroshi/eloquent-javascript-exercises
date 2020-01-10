console.log(/'\d+'/.test("'123'"));

console.log(/'\d+'/.test("''"));

console.log(/'\d*'/.test("'123'"));

console.log(/'\d*'/.test("''"));

// ------------------------------------
let neighbour = /neighbou?r/;
console.log(neighbour.test("neighbour"));
console.log(neighbour.test("neighbor"));
//---------------------------------------

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("01-30-2003 15:20"))