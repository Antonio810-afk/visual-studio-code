document.addEventListener("DOMContentLoaded", () => {
    const destinos = [
        { nombre: "PASADÍA LAS GACHAS, GUADALUPE", descripcion: "incluye: Transporte ida y regreso, Desayuno Santandereano, Almuerzo, Ingreso a la quebrada las Gachas, Visita el Hermoso Pueblito Guadalupe y Parada en Aratoca, Póliza de asistencia medica, Coordinador de Viaje." },
        { nombre: "CEPITÁ", descripcion: "incluye: Transporte de ida y regreso Desayuno, Almuerzo (el mejor cabro de la región), Entrada a piscinas naturales, Visita pueblito cepita y miradores Coordinador de viajes, Póliza de asistencia medica." },
        { nombre: "PARQUE NACIONAL DEL CHICAMOCHA", descripcion: "incluye: Transporte de ida y regreso Desayuno, Almuerzo típico de la región, Teleférico de ida y regreso Ingreso al parque, Acuaparque Chicamocha, Póliza de asistencia, medica, coordinador de viaje." },
        { nombre: "PARAMO DE SANTURBAN", descripcion: "incluye: Transporte de ida y regreso en Bus de Turismo, full equipo Desayuno Tradicional, Almuerzo, Recorrido por la ruta de las lagunas negras, camino de los frailejones, Recorrido por miradores en las Hermosas lagunas Negras, Póliza de asistencia médica, Coordinador de viaje, Guía local." },
        { nombre: "BARICHARA Y CASCADAS DE JUAN CURI", descripcion: "incluye: Desayuno a la Carta, Almuerzo a la Carta, Visita el Pueblito Barichara, recorrido por el centro histórico y la piedra del Salto del mico, Vista las Cascadas de Juan Curí de más de 100m de altura, agua cristalina con pozos para bañarse, caminata de 15minutos, Paradita en Aratoca para comprar productos de la región, Póliza de Asistencia Médica Coordinador de Viaje,Transporte ida y regreso." },
        { nombre: "PASADÍA: ZAPATOCA CLIMA DE SEDA", descripcion: "incluye: Transporte de ida y regreso, Bus de lujo, Desayuno a la Carta Almuerzo a la Carta, Mirador del cañón del río Sogamoso y Mirador carro sobre la roca R4, (Senderismo) Ruta Cascada la Lajita 55 metros de altura, con pozo para bañarse, Caminata 30min, dificultad 5/10 ideal para, caminantes principiantes Visita Mirador Guane, el mejor mirador de Santander, Recorrido por Zapatoca, Mirador Yarigui, Campo Santo, calle Lengerke, la tumba del legendario Geo Von Lengerke, Catedral, calles coloniales y sitio emblemáticos, Seguro de viaje, Coordinador de viaje y Guía local." },
        { nombre: "Playa del Carmen", descripcion: "Un destino ideal para relajarse y disfrutar del sol." },
        { nombre: "Machu Picchu", descripcion: "Una antigua ciudad inca en lo alto de los Andes." },
        { nombre: "Playa del Carmen", descripcion: "Un destino ideal para relajarse y disfrutar del sol." },
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
