import {Animal} from "./Animal"

export class Girafe extends Animal{

    private height : number;

    constructor (
        name : string, 
        height : number, 
        legs : number
    ){
        super(name, legs) ;
        this.height = height ; 
    }

    public move(): void {
        console.log(`${this.name} has moved`)
    }
}