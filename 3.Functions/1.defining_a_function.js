//function with parameters
const square = function(x){
    return x*x;
}
console.log(square(5))

//function without parameters
const makeNoise = function(){
    console.log("Pling!");
}

makeNoise();

const power = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(2, 10));