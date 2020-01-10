console.log(/[0123456789]/.test(" in 1992"));
console.log(/[0-9]/.test("1992"));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime.test("30-jan-2003 15:20"));

let notBinary = /[^01]/;
console.log(notBinary.test("0101000101010101001"));
console.log(notBinary.test("1100000101001201010001"))