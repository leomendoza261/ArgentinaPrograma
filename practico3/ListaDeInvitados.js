
const invitados = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
const admitidos = [];
const rechazados = [];

for (let i = 0; i < invitados.length; i++){
    if (invitados[i] === "Jose" || invitados[i] === "Sofia"){
        rechazados.push(invitados[i])
    }
    else{
        admitidos.push(invitados[i])
    }
};

for(let i = 0; i < admitidos.length;i++){
    if(i === 0){
        console.log("La lista de invitados admitidos es:")
        console.log(admitidos[i])
    }else{
        console.log(admitidos[i])
    }
};

for(let i = 0; i < rechazados.length;i++){
    if(i === 0){
        console.log("La lista de invitados rechazados es:")
        console.log(rechazados[i])
    }else{
        console.log(rechazados[i])
    }
};

admitidos.sort();
rechazados.sort();


for(let i = 0; i < admitidos.length;i++){
    if(i === 0){
        console.log("La lista ordenada de invitados admitidos es:")
        console.log(admitidos[i])
    }else{
        console.log(admitidos[i])
    }
};

for(let i = 0; i < rechazados.length;i++){
    if(i === 0){
        console.log("La lista ordenada de invitados rechazados es:")
        console.log(rechazados[i])
    }else{
        console.log(rechazados[i])
    }
};
