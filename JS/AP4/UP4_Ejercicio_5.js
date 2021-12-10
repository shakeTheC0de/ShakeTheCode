// Escribe un formato que devuelva el mayor de los dos numeros
const rl = require("readline-sync");

let num1 = rl.question("Dime un numero: ");
let num2 = rl.question("Dime otro numero: ");

function mayor () {
    if (num1 > num2) {
        console.log("El numero " + num1 + " es mayor que " + num2);
    }else {
        console.log("El numero " + num2 + " es mayor que " + num1);
    }
    
}

console.log(mayor());