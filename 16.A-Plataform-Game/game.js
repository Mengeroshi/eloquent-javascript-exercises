"use strict"
class Level{
    constructor(plan){
        let rows = plan.trim().split("\n").map(l =>[...l]);
        this.height = rows.length;
        this.width = rows[0].length;
        this.starActors = [];
        this.rows = map((row, y)=>{
            return row.map((ch,x) =>{
                let type = levelChars[ch];
                if(typeof type == "string"){
                    return type;
                }
                this.starActors.push(
                    type.create(new Vec(x,y), ch));
                return "empty";
            }); 
        });
    }
}

let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

class State{
    constructor(level, actors, status){
        this.level = level;
        this.actors = actors;
        this.status = status;
    }
    static start(level){
        return new State(level, level.starActors, "playing");
    }

    get player(){
        return this.actors.find(a=> a.type =="player")
    }
}

class Vec{
    constructor(x, y){
        
        this.x = x;
        this.y = y; 
    }
    plus(other){
        return new Vec(this.x + other.x, this.y + other.y);
    }
    times(factor){
        return new Vec(this.x * factor, this.y * factor);
    }
}