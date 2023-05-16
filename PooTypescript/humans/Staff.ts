import { Person } from "../abstract/Person"

export class Staff extends Person {

    position : string ;

    constructor (name : string, position : string){
        super(name);
        this.position = position ;
    }

    find(name : string): Person {
        /// Should make a request to any kind of database to retrieve 
        // person's datas
        return new Staff(name, "manager")
    }
}
