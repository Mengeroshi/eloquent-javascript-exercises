function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}

repeat(10, console.log);

let labels = [];

repeat(5, i =>{
    labels.push(`Unit ${i+1}`);
});

console.log(labels);

let mono = [];



// My own version
function fill(list, string, n){
    for(let i = 0; i < n; i++){
        list.push(`${string} ${i+1}`);
    }
}

fill(mono, "Unidad", 10);

console.log(mono);