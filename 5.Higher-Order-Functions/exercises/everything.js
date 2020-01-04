lol = [1,2,3,4,5];


function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }

console.log(every(lol, n => n < 10));
console.log(every(lol, n => n > 10));