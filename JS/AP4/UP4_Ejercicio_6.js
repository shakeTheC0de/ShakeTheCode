//Escribe un programa que calcule el area y la longitud de una circunferencia en funcion del radio (Leido desde el teclado ). Se ha de escribir un metodo para calcular el area y otro para la longitud . 
const rl = require("readline-sync")

let radio = rl.question("Dime el radio de la circunferencia: ")
let  pi = 3.141583;

function area(radio, pi) {

    console.log("El area de la circunferencia es : " + (pi * radio ** 2));
}
function longitud(radio, pi) {
    
    console.log("La longitud de la circunferencia es : " + (2 * pi * radio));
}
area(radio, pi);
longitud(radio, pi);