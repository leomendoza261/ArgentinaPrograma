const readlineSync = require('readline-sync');



const edad = readlineSync.question('Ingresar edad: ');

if (edad > 18){
    console.log("Eres mayor de edad")
}
else{
    console.log("Eres menor de edad")
}