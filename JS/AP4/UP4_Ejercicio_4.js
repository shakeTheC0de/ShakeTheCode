const rl = require("readline-sync");

let edad = rl.question("Dime la edad que tienes");
let anyo = 365;
let sleep = 8;

function horasDormidas(edad) {
    let vida = (edad * anyo);
    console.log("Has vivido un total de : " + vida + " horas de vida" );
    return (vida * sleep);
    
}

console.log( "Y has dormido una media de: " + horasDormidas(edad) + " horas en toda tu vida");