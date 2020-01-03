function loop(values, test, update, body){
    for(let value of value){
        if(value !== test()){
            body(value);
        }
        update()
    }

}