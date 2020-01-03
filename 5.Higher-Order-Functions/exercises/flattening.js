let lel = [[1,2,3],[4,5,6],[7,8,9],[10, 11]];

function flattening(array){
    return array.reduce((a, b) => {
       return a.concat(b)});
}

console.log(flattening(lel));