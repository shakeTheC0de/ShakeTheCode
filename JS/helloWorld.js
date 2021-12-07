console.log("Hi, thats my first file on JS, lets go to learn!")

//Let´s go to learn the first steps on JS 
const rl = require("readline-sync")

let num1 = rl.question("Introduce un numero: ");
let num2 = rl.question("Introduce otro numero: ");

function suma(num1, num2) {

    return (num1 + num2)
    
}

suma()