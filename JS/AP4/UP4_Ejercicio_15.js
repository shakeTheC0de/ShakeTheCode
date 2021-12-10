const rl = require("readline-sync");

let dniInt = rl.question("Introduce el DNI: ");
console.log(dniValido(dniInt));

function dniValido(dniInt) {
    
    if (dniInt.length != 9) {
      let respuesta = "El DNI que has introducido es incorrecto";
      console.log(respuesta);
    }else{
        let dniNumero = dniInt.slice(0, 8);
        let dniNumeroValor = parseInt(dniNumero);     
    }
};