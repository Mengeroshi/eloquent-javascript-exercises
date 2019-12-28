require('./journal');

for(let i = 0; i <  JOURNAL.length; i++){

    let num = JOURNAL[i]["events"]; 

    console.log(`Day ${i+1}: ${num.length} events`);
}
/*
for( let entry of JOURNAL){
    console.log(`${entry.events.length} events`)
}
*/
