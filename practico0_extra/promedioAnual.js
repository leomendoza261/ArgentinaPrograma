function promedioAnual(temperaturas){
    let suma = 0
    for (let i = 0; i < temperaturas.length; i++){
        suma += temperaturas[i]
    }
    const promedio = suma/temperaturas.length
    return promedio
}

const temperaturas = [23,16,22,18,13,18,20,21,23,27,26,24]
const promedio = promedioAnual(temperaturas)
console.log("El promedio de temperatura anual:", promedio)