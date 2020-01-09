/*
function promptNumber(question){
    let result = Number(prompt(question));
    if(Number.isNaN(result)){
        return null
    }else{
        return result;
    }
}

console.log(promptNumber(13))
*/

function lastElement(array){
    if(array.length == 0){
        return {failed: true};
    }else{
        return {element: array[array.length - 1]}
    }
}

let obo = [1,2,3,4,5];

console.log(lastElement(obo));