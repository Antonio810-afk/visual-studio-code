const lista=document.getElementById("lista");
const tarea=document.getElementById("tarea");
const boton=document.getElementById("boton");

boton.addEventListener("mouseout", function(event){
        console.log(event);
        agregartareas();
    }
);
function agregartareas(){
    const nuevatarea=document.
    createElement("li");
    nuevatarea.innerText=tarea.value;
    lista.appendChild(nuevatarea);
}
function eliminartareas(){

}