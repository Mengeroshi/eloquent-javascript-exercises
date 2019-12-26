/*
function printFarmInventory(cows, chickens){
    let cowString = String(cows);
    while(cowString.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);
    while(chickenString.length < 3){
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(2, 10);
*/
//Growing Function
/*
function printZeroPaddedWithLabel(number, label){
    let numberString = String(number);
    while(numberString.lenght < 3){
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`)
}

function printAnimalInventory(cows, chickens, pigs){
    printZeroPaddedWithLabel(cows, "cows");
    printZeroPaddedWithLabel(chickens, "chickens");
    printZeroPaddedWithLabel(pigs, "pigs");
}

printAnimalInventory(2, 4, 30);
*/

function zeroPad(number, width){
    let strong = String(number);
    while(strong.length < width){
        strong = "0" + strong;
    }
    return strong;
}


function animals(cows, chickens, pigs){

    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

animals(5, 4, 20);