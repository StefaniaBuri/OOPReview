export class Mobile{
        //Atributos
    public name:string;
    public model:string;
    public trademark:string;
    public sdsize:number;
    public color: string;
    public is5G: boolean;
    public cameraNumber: number;
    public price: number;


    constructor(name:string, model:string, trademark:string, sdsize:number, color: string, is5G: boolean, cameraNumber: number, price: number)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdsize = sdsize;
        this.color = color;
        this. is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    //>>>> Getters <<<<
    public getName():string {
        return this.name;
    }
    public getModel():string {
        return this.model;
    }
    public getTradeMark():string {
        return this.trademark;
    }
    public getSdSize():number {
        return this.sdsize;
    }
    public getColor():string {
        return this.color;
    }
    public getIs5G():boolean {
        return this.is5G;
    }
    public getCameraNumber():number {
        return this.cameraNumber;
    }
    public getPrice():number {
        return this.price;
    }

        //>>>>>> Setters <<<<<
        
    public setName(name:string){
        this.name = name;
    }
    public setModel(model:string){
        this.model = model;
    }
    public setTradeMark(trademark:string){
        this.trademark = trademark;
    }
    public setSdSize(sdsize:number){
        this.sdsize = sdsize;
    }
    public setColor(color:string){
        this.color = color;
    }
    public setIg5G(is5G:boolean){
        this.is5G = is5G;
    }
    public setCameraNumber(cameraNumber:number){
        this.cameraNumber = cameraNumber;
    }
    public setPrice(price:number){
        this.price = price;
    }

    //>>>>>>>>> METODO <<<<<<<<<<<<
    printAtrib(){
        return "Mobile Description: "+ "\n" + 
        "Name: " + this.name  + "\n" + 
        "Model: " + this.model + "\n" +
        "Trademark: " + this.trademark + "\n" +
        "SD Size: " + this.sdsize + "\n" + 
        "Color: " + this.color + "\n" + 
        "Is 5g?: " + this.is5G + "\n" +
        "Camera number: " + this.cameraNumber + "\n"
    }

}