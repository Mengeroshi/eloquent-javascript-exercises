//arrow function
const  power =(base, exponent)=>{
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

let bass = 2;
let exponente = 10;

console.log(power(bass, exponente));

//arrow function (one parameter)
const square1 = (x) =>{return x*x;}

const square2 = x => x*x;

// Without parameters

const horn = () =>{
    console.log("Toot");
}