const readlineSync = require('readline-sync');



const num = readlineSync.question('Ingresar numero: ');

if (num > 0) {
    console.log("El numero es positivo")
}
else {
    if (num < 0){
        console.log("El numero es negativo")
    }
    else{
        console.log("El numero es cero")
    }
}