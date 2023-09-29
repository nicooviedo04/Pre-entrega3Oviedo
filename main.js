// Simulacion Principl
function simular() {
    alert("Estás en una guerra");

    let continuarSimulacion = true; 

    while (continuarSimulacion) {
        const objetoEncontrado = objetos[Math.floor(Math.random() * objetos.length)];
        const respuestas = tomarDecision(objetoEncontrado);

        for (const respuesta of respuestas) {
            alert(respuesta);
        }

        continuarSimulacion = confirm("¿Quieres seguir buscando objetos?"); 
    }

    alert("La simulación ha terminado.");
}

function tomarDecision(objeto) {
    alert(`Encontraste un ${objeto.nombre} en el piso.`);
    const opcionIngresada = prompt(`Quieres agarrar el ${objeto.nombre} (si, no, esconderse o huir)`).toLowerCase();

    switch (opcionIngresada) {
        case "si":
            return [`Has agarrado el/la ${objeto.nombre}.`, objeto.mensajeAgarrar];
        case "no":
            return [`No agarraste el/la ${objeto.nombre}.`, objeto.mensajeNoAgarrar];
        case "esconderse":
            return [`Te escondiste como un profesional.`, `Estás a salvo por ahora.`];
        case "huir":
            return [`Has decidido huir.`, `Has sobrevivido para otra batalla.`];
        default:
            return ["Selecciona una opción válida (si, no, esconderse o huir)."];
    }
} 

const objetos = [
    { nombre: "Casco", mensajeAgarrar: "Tu cabeza está protegida.", mensajeNoAgarrar: "¿Como vas a dejar el casco? Tas loco" },
    { nombre: "Chaleco anti-balas",mensajeAgarrar: "El chaleco te da mas seguridad para continuar", mensajeNoAgarrar: "¡Terrible Kamikase! Me caes bien" },
    { nombre: "Arma", mensajeAgarrar: "Ahora estás armado y peligroso.", mensajeNoAgarrar: "Prefieres no tomar el arma." },
    { nombre: "sombrero de paja", mensajeAgarrar: "No se de qué te va a servir, pero te queda fachero.", mensajeNoAgarrar: "El capitan esta decepcionado" },
    { nombre: "Katana", mensajeAgarrar: "¿Por qué esta katana tiene el filo invertido?", mensajeNoAgarrar: "Podrias haber ganado varias batallas con esa katana" },
];

simular();
