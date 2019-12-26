function isEven(number){
    if(number === 0){
        return true;
    }else if(number === 1){
        return false;
    }else if(number < 0){
        return isEven(number+2);
    }else{
        return isEven(number-2);
    }
}

console.log(isEven(5));
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));