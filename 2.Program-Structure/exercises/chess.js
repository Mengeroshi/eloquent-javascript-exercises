let mono = "";

for(let counter = 1; counter < 9; counter++){
    for(let i = 1; i<9; i++){
        if((counter + i) % 2 == 0){
            mono = mono + "#";
        }else{
            mono = mono + " ";
        }
    }
    mono = mono + "\n";
}

console.log(mono);

