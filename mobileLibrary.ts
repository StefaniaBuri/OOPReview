import {Mobile} from "./mobile"

export class MobileLibrary{

    //Atributos
    private name : string;
    private location : string;
    private mobiles : Mobile[];
    private totalPrice : number;


    constructor(name:string, location:string, mobiles:Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        //>>>>>>>>> PUNTO 10 <<<<<<<<<<<
        this.totalPrice = this.totalPriceCalculation()
    }

    //>>>>>>>>>>> Getters <<<<<<<<<<<<<<<
    getName():string{
        return this.name;
    }
    getLocation():string{
        return this.location;
    }
    getMobiles():Mobile[]{
        return this.mobiles;
    }
    getTotalPrice():number{
        return this.totalPrice;
    }
        //>>>>>>>>>>>>> Setters <<<<<<<<<<<<<
    setName(name : string){
        this.name = name;
    }
    setLocation(location : string){
        this.location = location;
    }
    setMoviles(mobiles : Mobile[]){
        this.mobiles = mobiles;
    }
    setTotalPrice(totalPrice : number){
        this.totalPrice = totalPrice;
    }

    //>>>>>>>>>> Metodo <<<<<<<<<
    //>>>> PUNTO 9 - PRIVATE <<<<<<<<<<

    private totalPriceCalculation():number{
    let resultado : number = 0;
    for(let i = 0; i < this.mobiles.length; i++){
        resultado = this.mobiles[i].getPrice() + resultado;
    }
    return resultado;
    }

    //>>>>>>>>>>> PUNTO 11 <<<<<<<<<<<<<
    printLibrary(){
        let objMob : string= "";
         for (let i = 0; i < this.mobiles.length; i++){
             objMob += this.mobiles[i].printAtrib()
         }
         console.log("This are all my mobiles:" + "\n" +
         "The characteristic of the mobile are:"+ " "+ "\n" + 
          objMob + " "+ "\n" +
         "Price overvall: " + this.totalPrice+ "\n" );
     }
    
}