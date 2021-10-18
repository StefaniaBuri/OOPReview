
import {Punto} from "./clasePunto"

//>>>>>>>>>>>> PUNTO 13 <<<<<<<<<<<<<
export class Triangulo{

    //>>>>>>>>>>>>>> PUNTO 14 - Atributos Privados <<<<<<<<<<<<<<<<
    private vertice1 : Punto;
    private vertice2 : Punto;
    private vertice3 : Punto;


    constructor(punto1:Punto, punto2:Punto, punto3:Punto){
        this.vertice1 = punto1;
        this.vertice2 = punto2;
        this.vertice3 = punto3;
    }

//>>>>>>>>>>>>>>> PUNTO 15 - devolver array 3posiciones c/u indican la longitud de c/lado triangulo

    public calcularLongitudLados():number[]{

        let pos1 : number = this.vertice1.calcularDistancia(this.vertice2);
        let pos2 : number = this.vertice2.calcularDistancia(this.vertice3);
        let pos3 : number = this.vertice3.calcularDistancia(this.vertice1);

        let ladosTriang : number[] = [pos1,pos2,pos3];

        return ladosTriang;
    }
}
