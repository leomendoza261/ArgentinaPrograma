let var1 = 1;
let var2 = 3;
let var3 = 17;
let var4 = 6;

let suma = var1 + var2;
let resta = var3 - var4;
let resultadoFinal = suma * resta;

let esPar;
if (resultadoFinal%2 === 0){
    esPar = true
}
else{
    esPar = false
}

console.log("Mis variables iniciales fueron:",var1, var2, var3, var4,". La respuesta a verificar si el resultado final es par es:", esPar)