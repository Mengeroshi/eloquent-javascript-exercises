class Rabbit{
    constructor(type){
        this.type = type;
    }

    speak(line){
        console.log(`The ${this.type} rabbit says: "${line}"`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

let object = new class {getWord(){ return "hello";}};
console.log(object.getWord());

//-----Overriding Derived Properties ---//

Rabbit.prototype.teeth = "Small";

console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);

console.log(Rabbit.prototype.teeth)
