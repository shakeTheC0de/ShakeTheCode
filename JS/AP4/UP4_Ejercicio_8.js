//Escribe un metodo que acepte dos argumentos: el caracter que se desea imprimir y el numero de vees que se imprime
const rl = require("readline-sync");


function saludo(idioma) {
    do{
        console.log("Selecciona tu idioma : ");
        console.log("Idiomas disponibles : ");
        console.log("Valenciano");
        console.log("Castellano");
        console.log("Ingles");
        console.log("Salir");
        let idioma = rl.question("Que idioma prefieres? : " );

        switch(idioma){
            case "Valenciano": {
                console.log("Bon dia Pepe Sanchez");
            }
            break
            case "Castellano": {
                console.log("Buenos dias Pepe Sanchez");
            }
            break
            case "Ingles": {
                console.log("Good Morning Pepe Sanchez");
            }
            break
            case "Salir": {
                console.log("Adiooos!");
            }
            break
            default: {
                console.log("Operacion desconocida");
            }
            break;
        }
        
    }while (idioma != "Salir");
    
}

saludo()
