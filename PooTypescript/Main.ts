import { Girafe } from "./animals/Girafe"
import { Kangourou } from "./animals/Kangourou"

export class Main {

    public readonly zooName : string ; 
    private readonly allKangourous : Kangourou[] ; 
    private readonly allGirages : Girafe[] ; 

    constructor (zooName : string){
        this.zooName = zooName ; 
        this.allKangourous = [] ;
        this.allGirages = [] ;
    }

    addKangourou (kangourou : Kangourou): void{
        let itExists : boolean ; 
        itExists = this.allKangourous.some((k : Kangourou) => {
            k.name === kangourou.name 
        })
        if (itExists){
            console.log("kangourou already exists") ; 
            return ;
        }
        this.allKangourous.push(kangourou);
        console.log(`${kangourou.name} has been successfully added`)
    }

    showKangourou () : Kangourou[]{
        let copy : Kangourou[]= this.allKangourous ; 
        return copy ; 
    }



}

let sevranZoo : Main = new Main ("sevran");
let kangourou : Kangourou = new Kangourou ("kaaris", 2, 1);
sevranZoo.addKangourou (kangourou) ;
console.log(sevranZoo.showKangourou());

/// Need to run "npx ts-node Main.ts" to run this