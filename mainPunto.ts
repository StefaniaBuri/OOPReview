//>>>>>>>>> PUNTO 5 - Probando objeto Punto <<<<<<<<<<

import{Punto} from "./clasePunto"
import{Triangulo} from "./claseTriangulo"

//objeto tipo punto
let punt1 : Punto = new Punto (3,2);
let punt2 : Punto = new Punto (1,4);
let punt3 : Punto = new Punto (6,6);

let arrPunto : Punto[] =  [punt1, punt2];
console.log(arrPunto);


//>>>>>>>>>>>>>>  PUNTO 8 - Metodos Punto <<<<<<<<<<<<<<<
console.log(punt1.toString());

punt1.setX(2);
punt1.setY(4);

console.log(punt1.getX());
console.log(punt1.getY());

//>>>>>>>>>>>>>>>>>>> PUNTO 11  - PROBANDO METODOS

    //DISTANCIA AL ORIGEN
console.log(punt1.distanciaAlOrigen());
    //CALCULAR DISTANCIA
console.log(punt1.calcularDistancia(punt2));
    //CALCULAR CUADRANTE
console.log(punt1.calcularCuadrante());
    //CALCULAR MAS CERCANO
console.log(punt1.calcularMasCercano(arrPunto));


//>>>>>>>>>>>>>>> PUNTO 16 - Probando clase triangulo
let triang1 : Triangulo = new Triangulo (punt1, punt2, punt3)

console.log(triang1.calcularLongitudLados())
  
