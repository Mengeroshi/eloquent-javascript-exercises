const {bigOak}= require("./crow-tech");
const {defineRequestType} = require("./crow-tech");
/*
bigOak.readStorage("food caches", caches =>{
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info =>{
        console.log(info);
    });
});

bigOak.send("Cow Pasture", "note", "Lets caw loudly at 7pm",
            ()=> console.log("Not Delivered"));
*/

defineRequestType("note",(nest, content, source, done)=>{
    console.log(`${nest.name} received note: ${content}`);
    done();
})

//----- promises------

function storage(nest, name){
    return new Promise(resolve =>{
        nest.readStorage(name, result => resolve(result));
    });
}

storage(bigOak, "enemies")
        .then(value => console.log("Got", value));

//----- Networks are hard---
class Timeout extends Error{};

function request(nest, target, type, content){
    return new Promise((resolve, reject) => {
        let done = false;
        function attempt(n){
            nest.send(target, type, content, (failed, value) =>{
                done = true;
                if(failed) reject(faliled);
                else resolve(value);
            });
            setTimeout(() =>{
                if(done) return;
                else if(n<3) attempt(n+1);
                else reject(new Timeout("Timmed out"));
            }, 250);
        }
        attempt(1);
    });
}


//console.log(bigOak);