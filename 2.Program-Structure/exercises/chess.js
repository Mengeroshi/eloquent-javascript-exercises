let mono = "";
let size = 50; 

for(let counter = 0; counter < size; counter++){
    for(let i = 0; i< size; i++){
        if((counter + i) % 2 == 0){
            mono = mono + "#";
        }else{
            mono = mono + " ";
        }
    }
    mono = mono + "\n";
}

console.log(mono);

let momo = "";
for(let counter = 0; counter < size; counter++){
    for(let i = 0; i< size; i++){
        momo = momo + "*"
    }
    momo = momo + "\n";
}
console.log(momo);