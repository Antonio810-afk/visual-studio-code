document.addEventListener("DOMContentLoaded", () => {
    const destinos = [
        { nombre: "Playa del Carmen", descripcion: "Un destino ideal para relajarse y disfrutar del sol." },
        { nombre: "Machu Picchu", descripcion: "Una antigua ciudad inca en lo alto de los Andes." },
        { nombre: "Tokio", descripcion: "Una vibrante metrópoli llena de cultura y tecnología." }
    ];

    const destinosLista = document.getElementById("destinos-lista");

    destinos.forEach(destino => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${destino.nombre}</h3><p>${destino.descripcion}</p>`;
        destinosLista.appendChild(div);
    });

    const form = document.getElementById("form-contacto");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Mensaje enviado. ¡Gracias por contactarnos!");
        form.reset();
    });
});
