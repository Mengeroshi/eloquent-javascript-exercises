function countChar(cadena, ch){
    let contador = 0;
    for(let i = 0; i < cadena.length; i++){
        if(cadena[i] == ch){
            contador += 1;
        }
    }
    return contador;
}


function countBs(cadena){
    return countChar(cadena, "B")
}

console.log(countBs("monoBBBB"));

console.log(countChar("rrarsanǹadaeerrrrwas", "r"))