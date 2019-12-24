for(let number = 0; number <=10; number = number+2){
    console.log(number);
}

let result = 1;
for(let counter = 0; counter < 10; counter++){
    result = 2* result;
}
console.log(result);

for(let current = 20; current = current +1;){
    if(current % 7 === 0){
        console.log(current);
        break;
    }
}

// SWITCH!!!

let  lel = "cloudy";
switch(lel){
    case "rainy":
        console.log("Remember to bring an umbrella");
        break;
    case "sunny":
        console.log("Dress Lightly");
        break;
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknow ehter type");

}