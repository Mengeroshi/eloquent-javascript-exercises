class Group{
    constructor(iterable){
        this.obo = []
        iterable.forEach(element => {
            return this.obo.push(element);
        });
    }
    add(value){
        let check = this.obo.findIndex(n => n == value)
        if(check == -1){
            this.obo.push(value);
        }else{
            console.log("Already in the group");
        }
    }
    delete(value){
        let check = this.obo.indexOf(value)
        if(check ==! -1){
            this.obo = remove(this.obo, check);
        }
    }
    has(value){
        let check = this.obo.indexOf(value);
        if(check == -1){
            return false;
        }else{
            return true;
        }
    }

    
    static from(list){
        return new Group(list);
    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false



//---- utils
function remove(array, index){
    return array.slice(0, index)
    .concat(array.slice(index+1));
}