function escmult(valor){
    for(let i=1;i<=12;i++){
        valor*=i
        console.log(valor)
    } 
    return valor
}

let resultado=escmult(2)

console.log("resultado multiplicacion",resultado)

function escdiv(resultado){
    for(let i=1;i<=12;i++){
        resultado/=i
        console.log(resultado)
    }
    return resultado
}
//valor=prompt("ingrese un valor")
//resultado=escmult(valor);
//let valor=escdiv(resultado)
console.log(escdiv(resultado));


