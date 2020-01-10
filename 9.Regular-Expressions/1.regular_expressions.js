let re1 = new RegExp("abc");
let re2 = /abc/;

let eighteenPlus = /eighteen\+/;

//--- testting for matches
console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxd"));

