let todoList = [1, 2, 3, 2, 1];

function remember(task){
    todoList.push(task);
}

function getTask(){
    return todoList.shift();
}

function rememberUrgently(task){
    todoList.unshift(task);
}

//Search index of a value
console.log(todoList.indexOf(2));
console.log(todoList.lastIndexOf(2));

//slices
console.log([0,1,2,3,4].slice(2,4));
console.log([0,1,2,3,4].slice(2));

//concat

function remove(array, index){
    return array.slice(0, index)
    .concat(array.slice(index+1));
}

console.log(remove(["a","b","c","d","e"], 2));