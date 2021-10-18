export class Punto {

    //>>>>>>>>> PUNTO 1 - Atributos <<<<<<<<<<<
    private x : number;
    private y : number;
    
    //>>>>>>>>>>> PUNTO 2 - CONSTRUCTOR <<<<<<<<<
    constructor (x:number, y:number){
            this.x = x;
            this.y = y; 
        }
    
    //>>>>>>>>>>>> PUNTO 3 - Metodo toString <<<<<<<<<<<<
    public toString(){
       let punto:string;
       return punto = ("(" + this.x.toString()+ ","+ this.y.toString() + ")");
    }
    
    //>>>>>>>>>>>>>>> PUNTO 4 - getters y setters <<<<<<<<<<<<<
    public getX():number{
        return this.x
    }
    public getY():number{
        return this.y
    }
    
    public setX(x:number){
        this.x = x;
    }
    public setY(y:number){
        this.y = y;
    }
    

    //>>>>>>>>>> PUNTO 6 - devolver distancia del punto al origen de coord (0,0)
    public distanciaAlOrigen():number{
        let dist:number = 0;
        dist = Math.round(Math.sqrt((this.x * this.x) + (this.y * this.y)));
        return dist;
    }
    
    //>>>>>>>>>>  PUNTO 7 - devolver distancia entre punto instancia actual obj y otro por parametro.
    public calcularDistancia(otroPunto:Punto):number{
        let dist:number = 0;
        dist = Math.round(Math.sqrt( ((otroPunto.x - this.x)*(otroPunto.x - this.x)) + ((otroPunto.y - this.y)*(otroPunto.y - this.y))));
        return dist;
    }
    
    //>>>>>>>> PUNTO 9 - devuelve el cuadrante en el que se encuentra el punto <<<<<<<<
    calcularCuadrante():number{
        let cuadrante: number = 0;

        if(this.x == 0 || this.y == 0){
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0){
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0){
            cuadrante = 2;
        }
        else if (this.x < 0 && this.y < 0){
            cuadrante = 3;
        }
        else if (this.x > 0 && this.y < 0){
            cuadrante = 4
        }
        return cuadrante;
    }
    
    //>>>>>>>>>>>> PUNTO 10 - parametro array objetos clase Punto, devolver referencia al objet array +cerca al punto actual
    calcularMasCercano(puntos:Punto[]):Punto{
        let varGuardPunto: number = 0;
        let dist : number = this.calcularDistancia(puntos[0]);//calculamos distancia primer elemento array [0]
    
        for (let i = 0; i < puntos.length; i++){
            
           if (this.calcularDistancia(puntos[i]) < dist){
                dist = this.calcularDistancia(puntos[i]);
                varGuardPunto = dist;
            }
        }
        return puntos[varGuardPunto];
    }
    
    }