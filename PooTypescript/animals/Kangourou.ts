import {Animal} from "./Animal"

export class Kangourou extends Animal{

    private height : number;

    constructor (
        name : string, 
        legs : number,
        height : number
    ){
        super(name, legs) ;
        this.height = height ; 
    }

    public move(): void {
        console.log(`${this.name} has moved`)
    }
}