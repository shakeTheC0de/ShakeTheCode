
const edades = [1, 12, 15, 17, 18, 22, 25, 33];
console.log("Los usuarios mayores de edad son: ");
const mayores = edades.filter(function edad(numero) {
    if (numero >= 18){
        return true;
    }
});

console.log(mayores);
    
