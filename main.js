document.getElementById("continue-button").innerHTML = "Continuar";

document.getElementById("continue-button").addEventListener("click", function () {
    fetch('objetos.json')
        .then(response => response.json())
        .then(data => {
            const objetos = data;

            const objetoP = localStorage.getItem("eleccion");

            if (objetoP) {
                alert(`el objeto anterior fue: ${objetoP}`);
            }

            const objetoEncontrado = objetos[Math.floor(Math.random() * objetos.length)];
            const respuestas = tomarDecision(objetoEncontrado);

            for (const respuesta of respuestas) {
                alert(respuesta);
            }
            localStorage.setItem("eleccion", objetoEncontrado.nombre);
        })
        .catch(error => {
            console.error('Error al cargar objetos desde el archivo JSON', error);
        });
});

function tomarDecision(objeto) {
    alert(`Encontraste un ${objeto.nombre} en el piso`);
    const opcionIngresada = prompt(`Quieres agarrar el ${objeto.nombre} (si, no, esconderse o proba suerte y encontra alguna de las frases ocultas)`).toLowerCase();

    switch (opcionIngresada) {
        case "si":
            return [`Has agarrado el item ${objeto.nombre}.`, objeto.mensajeAgarrar];
        case "no":
            return [`No agarraste el item ${objeto.nombre}.`, objeto.mensajeNoAgarrar];
        case "esconderse":
            return [`Te escondiste como un cobarde.`, `Estás a salvo... por ahora.`];
        case "huir":
            return [`Has decidido huir.`, `Has sobrevivido para otra batalla.`];
        case "rezar":
            return [`Dios te escuchó.`, `Pero te ignoró XD`];
        case "despertar":
            return [`Todo era un sueño.`, `Gracias al cielo despertaste.`];
        case "salir":
            return [`¿Salir? No se puede salir.`, `Na, mentira. Pone cancelar en el siguiente cuadro.`];
        default:
            return ["Selecciona una opción válida (si, no, esconderse o huir)."];
    }
}