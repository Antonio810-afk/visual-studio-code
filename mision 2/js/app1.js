function saludar(nombre){
    return "hola, "+nombre;
}
let saludo=saludar("Ana")
console.log(saludo);
let saludo1=saludar("claudia")
console.log(saludo1);
let saludo2=saludar("patricia")
console.log(saludo2);
let saludo3=saludar("mariana")
console.log(saludo3);
let saludo4=saludar("laura")
console.log(saludo4);
let saludo5=saludar("camila")
console.log(saludo5);
let saludo6=saludar("lucia")
console.log(saludo6);
function sumar(x,y){
    return x + y
}
console.log(sumar(2,7))
console.log(sumar(4,9))
function restar(x,y){
    return x - y
}
function multiplicar(x,y){
    return x * y
}
function dividir(x,y){
    return x / y
}
console.log(restar(7,2))
console.log(multiplicar(7,2))
console.log(dividir(7,2))
let global = "soy global";
function prueba(){
    let local= "soy local";
    console.log(global);
    console.log(local);
}
prueba()
for (let i = 0; i < 5; i++){
    console.log("Numero: " + i);
}
let suma=0
for (let I =0; I<=100; I++){
    suma +=I;
}
let promedio=suma/100;
console.log(suma);
console.log(promedio);

let a=0
while(a<5){
    console.log("Numero: "+a);
    a++;
}
let estudiantes=[
    {nombre:"carlos", edad:40},
    {nombre:"pedro", edad:25},
    {nombre:"juan", edad:33},
    {nombre:"julio", edad:48},
    {nombre:"josé", edad:22},
];
for (let estudiante of estudiantes){
    suma +=estudiante.edad;
}
console.log(estudiantes.length);
console.log(suma/estudiantes.length);