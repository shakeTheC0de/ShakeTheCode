//Funciones anonimas 

let saludo = function () {
    return "Hola desde dentro de la funcion Anonima";
};

console.log(saludo());


//Funciones flecha

let saludo2 = () => {
    return "Hola desde dentro de la funcion flecha";
};

console.log(saludo2());

//CallBacks


let A = function A1(callback) {
    callback();
};

let B = function B1(params) {
    console.log("La funcion B1 ejecutando");
};

A(B)