function calcularPromedio(num1, num2, num3, num4, num5, num6) {
    let suma = num1 + num2 + num3 + num4 + num5 + num6;
    let promedio = suma / 6;
    return promedio;
  }

let promedioA = calcularPromedio(5,7,9,11,13,15)
console.log(promedioA)