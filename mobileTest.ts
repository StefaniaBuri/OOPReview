import {Mobile} from "./mobile"

//OBJETOS
let nokia3210 : Mobile = new Mobile ("Nokia3210", "3210", "Nokia", 32, "black", false, 0, 15);
let iphone3G : Mobile = new Mobile("Iphone3G", "3G", "Iphone", 64, "red", false, 1, 100);
let samsungGalaxy10 : Mobile = new Mobile("SamsungGalaxy", "Galaxy10", "Samsung", 64, "blue", true, 2, 300);

//Atributos objeto
// console.log(nokia3210.printAtrib());
// console.log(iphone3G.printAtrib());
// console.log(samsungGalaxy10.printAtrib())

//modificar propiedades Nokia
nokia3210.setIg5G(true);
nokia3210.setCameraNumber(4);
//console.log(nokia3210.getIs5G());
//console.log(nokia3210.getCameraNumber());


//Print todas las propiedades
let arrMobile : Mobile[] = [nokia3210, iphone3G, samsungGalaxy10];

for (let i = 0; i < arrMobile.length; i++){
    arrMobile[i].printAtrib();
}

console.log(arrMobile);
