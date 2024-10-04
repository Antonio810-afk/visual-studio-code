let elemento = document.getElementById("miElemento");
console.log(elemento);
elemento.textContent = "esto es javascript";
elemento.style = "color:red";

const inputemail = document.getElementById("email");
const inputclave = document.getElementById("clave");
const miElemento = document.getElementById("miElemento");
const myform = document.querySelector("form");
myform.addEventListener("click", function (event) {
    event.preventDefault();
});
function validarform() {
    const expresion = new RegExp('^(.+)@(\\S+)$')
    if (expresion.test(inputemail.value)) {
        console.log("si");
    }
    else{
        alert("el correo tiene formato incorrecto");
        return;
    }
    if (inputclave.value === "") {
        alert("debe ingresar una clave");
    }
    else {
        if (inputclave.value == "miclave") {
            alert("ha ingresado correctamente");
            miElemento.innerHTML = "bienvenido" + inputemail.value;
        }
        else {
            alert("la clave esta equivocada");
        }
    }
}