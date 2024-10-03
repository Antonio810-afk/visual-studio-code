function calcularedad(edad){
    if(edad<18){
        console.log("eres menor de edad");
    } else if(edad>=18 && edad<65){
        console.log("eres adulto");
    } else{
        console.log("eres mayor");
    }
    }
calcularedad()
for(let i=1;i<=100;i++){
    calcularedad(i)
}

edad=20;
let mensaje=(edad>=18)?"mayor." : "menor";
console.log(mensaje)

let dia=3;
switch(dia){
    case 1:
    console.log("lunes");
    break;
    case 2:
    console.log("martes");
    break;
    case 3:
    console.log("miercoles");
    break;
    case 4:
    console.log("jueves");
    break;
    case 5:
    console.log("viernes");
    break;
    default:
    console.log("Dia no valido")
}

let elemento=document.getElementById("contenido");
for(let carro of carros){
    console.log(carro.marca)
}