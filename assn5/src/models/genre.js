export class Genre{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    getID(){
        return this.id;
    }

    getName(){
        return this.name;
    }
}