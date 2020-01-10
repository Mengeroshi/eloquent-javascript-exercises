console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/, "a"));


console.log("Borobudur".replace(/[ou]/g, "a"));


//_-------------------------------------------
console.log(
    "Liskov, Barbara\nMcCarthy, john\nWalder, Philip"
    .replace(/(w+), (w+)/g, "$2 $1"));

//-------------------------------------------------

let s = "the cia and fbi";

console.log(s.replace(/\b(fbi|cia)\b/g,
                    str => str.toUpperCase()));


let stock = "1 lemon, 2 cabbages, and 101 eggs";

function minusOne(match, amount, unit){
    amount = Number(amount) - 1;
    if(amount  == 1){//remove the 's'
        unit = unit.slice(0, unit.length - 1);
    }else if(amount == 0){
        amount = "no";
    }
    return amount + " " + unit; 
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

