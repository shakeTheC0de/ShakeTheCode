// Crea una funcion que devuelva un saludo.
const rl = require("readline-sync");

let nombre = rl.question("Dime como te llamas: ")

function nombreFunc(nombre) {
    console.log("Hola " + nombre + " encantado de conocerte. ");
    
}

nombreFunc(nombre);

//En este caso yo he puesto que se tenga que introducir el nombre por consola por lo que la actividad 2 la he hecho con el return