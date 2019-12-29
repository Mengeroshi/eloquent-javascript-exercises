function range(start, end, step=1){
    list=[];
    if(step < 0){
        for(let i = start; i >= end; i+=step){
            list.push(i);
        }
    }else{
        for(let i = start; i <= end; i+=step){
            list.push(i);
        }
    }
    
    return list;
}

console.log(range(2,10));

function sum(list){
   let suma = 0;
   for(let element of list){
       suma += element;
   }
   return suma;
}

console.log(sum(range(2,10)));

console.log(range(2,10, 2));

console.log(range(5, 2,-1));