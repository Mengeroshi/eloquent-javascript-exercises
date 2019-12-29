let lista = [1,2,3,4,5,6,7,8,9,10];
let lista_2 = [1,2,3,4,5,6,7,8,9,10];

function reverseArray(list){
    let newList = [];
    let tamaño = list.length;
    for(let i = 0; i < tamaño; i++ ){

        let value = list.pop();
        newList.push(value);
    }
    return newList;
}

console.log(lista);
console.log(reverseArray(lista));
console.log(lista);


function reverseArrayInPlace(list){
    let tamaño = list.length;
    for(let i = 0; i < Math.floor(tamaño/2); i++){
        let old = list[i];

        list[i] = list[tamaño - 1 - i]
        list[tamaño - 1 - i] = old;
    }
    return list;
}

console.log(reverseArrayInPlace(lista_2));

