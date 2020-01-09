function firstElement(array){
    if(array.length == 0){
        throw new Error("firstElement called with []");
    }
    return array[0];
}

let obo = [1,2,3,4,5], obinksy = [];


console.log(firstElement(obo));
console.log(firstElement(obinksy));