// Crea una funcion que devuelva un saludo y un nombre que sea obtenido por teclado

const rl = require("readline-sync");

let nombre = rl.question("Dime como te llamas: ")

function nombreFunc() {
    return("Hola " + nombre + " encantado de conocerte. ");
    
}
console.log(nombreFunc());


