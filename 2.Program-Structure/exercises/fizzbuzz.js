
for(let counter = 1; counter < 101; counter++){
    console.log(counter)
    if(counter % 3 == 0){
        console.log("Fizz");
    }else if(counter % 5 == 0){
        console.log("Buzz");
    }else if(counter % 3 == 0 && counter % 5 == 0){
        console.log("FizzBuzz");
    }
}

for(let counter = 1; counter < 101; counter++){
    if(counter % 3 == 0 && counter % 2 == 0){
        console.log(counter + "FizzBuzz");
    }else if(counter % 2 == 0){
        console.log( counter + "Fizz");
    }
    else if(counter % 3 == 0){
        console.log(counter + "Buzz");
    }else{
        console.log(counter);
    }
}