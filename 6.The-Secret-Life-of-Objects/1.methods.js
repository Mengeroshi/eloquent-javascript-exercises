let rabbit = {};

rabbit.speak = function(line){
    console.log(`The Rabbit says: "${line}"`);
}

rabbit.speak("I am alive")

//-------------------------------------------
function speak(line){
    console.log(`The ${this.type} rabbit says: "${line}"`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};


whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting");
hungryRabbit.speak("I could use a carrot right now");
//--------------------------
speak.call(hungryRabbit, "Burp!");

//--------------------------
function noramlize(){
    console.log(this.coords.map(n => n / this.length));
}

obo = {coords: [0, 2, 3], length: 5};

noramlize.call(obo);

