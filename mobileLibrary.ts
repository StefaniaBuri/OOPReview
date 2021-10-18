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


    public totalPriceCalculation():number{
    let resultado : number = 0;
    for(let i = 0; i < this.mobiles.length; i++){
        resultado = this.mobiles[i].getPrice() + resultado;
    }
    return resultado;
    }
    
}