export abstract class Person {

    public readonly name : String ; 

    constructor (name : String) {
        this.name = name ; 
    }

    abstract find(string) : Person ;
    
}