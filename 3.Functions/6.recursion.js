function power(base, exponent){
    if(exponent == 0){
        return 1;
    }else{
        return base * power(base, exponent -1);//5*5,4 25*5,3 125*5,2 625*5, 1 
    }
}

console.log(power(5, 5));

function findSolution(target){
    function find(current, history){
        if (current == target){
            return history;
        }else if (current > target){
            return null;
        }else{
            return  find(current + 5, `(${history} + 5)`) ||
                    find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}


console.log(findSolution(23));