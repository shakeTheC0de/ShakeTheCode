// Crea una funcion que nos permita saber el precio hora de los empleados segun su categoria

const rl = require("readline-sync");

let categoria 
function precioHora(categoria) {
   
    do{
        console.log("1. Indefinido ");
        console.log("2. Temporal");
        console.log("3. Practicas");
        console.log("4. Salir");
        categoria = rl.question("Cual es tu categoria? : ")
        switch (categoria) {
            case "1":
                console.log("El precio de la hora es de 30 euros");
                break;
            case "2" :
                console.log("El precio de la hora es de 20 euros");
                break;
            case "3":
                console.log("El precio de la hora es de 15 euros");
                break;
            default : "4"
                break;
        }
    }while(categoria != "4")
       
}

precioHora()