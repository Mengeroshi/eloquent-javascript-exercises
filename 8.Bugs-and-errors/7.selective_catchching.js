class inputError extends Error{}

function promptDirection(string){
    let result = string;
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}


for(;;){
    try{
        let dir = promptDirection("Where?");
        console.log("You choose", dir);
        break;
    } catch(e){
        if(e instanceof inputError){
            console.log("Not a Valid direction. Try again.");
        }else{
            throw e;
        }
    }
}



