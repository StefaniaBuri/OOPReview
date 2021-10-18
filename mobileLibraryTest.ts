import { MobileLibrary } from "./mobileLibrary"
import {Mobile} from "./mobile"

//>>>>>>>>>>> PUNTO 5 - Objetos clase Mobile <<<<<<<<<<<<
let huaweiPsmart : Mobile = new Mobile ("Huawei P Smart", "P Smart 2019", "Huawei", 64, "blue", true, 2, 200);
let redmiNote7 : Mobile = new Mobile("Redmi Note 7", "Note 7", "Xiaomi", 64, "green", true, 2, 150);
let samsungGalaxy10 : Mobile = new Mobile("Samsung Galaxy", "Galaxy10", "Samsung", 32, "red", true, 2, 600);
let iphone13 : Mobile = new Mobile("Iphone 13", "13 Pro", "Iphone", 128, "golden", true, 3, 950)

let mobiles : Mobile[] = [huaweiPsmart, redmiNote7, samsungGalaxy10, iphone13];
console.log(mobiles);


//>>>>>>>>>>>>> PUNTO 6 - Objeto library <<<<<<<<<<<<<<<<<<<<
let objLib : MobileLibrary = new MobileLibrary ("MediaMark", "Madrid", [huaweiPsmart, redmiNote7, samsungGalaxy10, iphone13]);

//>>>>>>>>>>>>>>>> PUNTO 7 - Probando metodos, getters y setters
console.log(objLib.getName());
console.log(objLib.getLocation());
console.log(objLib.getMobiles());

objLib.setName("The Cardphone");
console.log(objLib.getName());
objLib.setLocation("London");
console.log(objLib.getLocation());