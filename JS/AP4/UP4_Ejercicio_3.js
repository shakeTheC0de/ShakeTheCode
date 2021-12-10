const rl = require("readline-sync");
let numero1 = rl.question("Dime un numero: ")
let numero2 = rl.question("Dime otro numero: ")

function suma (numero1, numero2) {
    console.log("El resultado de tu operacion es : ");
    return(numero1 + numero2);
}

console.log(suma(numero1, numero2));