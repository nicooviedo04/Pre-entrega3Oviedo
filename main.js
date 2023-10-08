// Simulacion Principl
// Simulacion Principal
function simular() {
    alert("Estás en una guerra");

    let continuarSimulacion = "empezar"; 

    while (continuarSimulacion === "empezar") { 
        const objetoEncontrado = objetos[Math.floor(Math.random() * objetos.length)];
        const respuestas = tomarDecision(objetoEncontrado);

        for (const respuesta of respuestas) {
            alert(respuesta);
        }

        continuarSimulacion = prompt("¿Quieres seguir buscando objetos? (escriba 'empezar' para continuar, cualquier otra cosa para detenerse)").toLowerCase();
    }

    alert("La simulación ha terminado.");
}

function tomarDecision(objeto) {
    alert(`Encontraste un ${objeto.nombre} en el piso.`)
    const opcionIngresada = prompt(`Quieres agarrar el ${objeto.nombre} (si, no, esconderse o proba suerte y encontra alguna de las frases ocultas)`).toLowerCase()

    switch (opcionIngresada) {
        case "si":
            return [`Has agarrado el item ${objeto.nombre}.`, objeto.mensajeAgarrar]
        case "no":
            return [`No agarraste el item ${objeto.nombre}.`, objeto.mensajeNoAgarrar]
        case "esconderse":
            return [`Te escondiste como un cobarde.`, `Estas a salvo... por ahora.`]
        case "huir":
            return [`Has decidido huir.`, `Has sobrevivido para otra batalla.`]
        case "rezar":
            return [`Dios te escuho`, `Pero te ignoro XD`]
        case "despertar":
            return [`Todo era un sueño`, `Gracias al cielo despertaste`]
        case "salir":
            return [`¿Salir? No se puede salir`, `Na, mentira. Pone cancelar en el siguiente cuadro`]
        default:
            return ["Selecciona una opción válida (si, no, esconderse o huir)."]
    }
} 

const objetos = [
    { nombre: "Casco", mensajeAgarrar: "Tu cabeza está protegida.", mensajeNoAgarrar: "¿Como vas a dejar el casco? Tas loco" },
    { nombre: "Chaleco anti-balas",mensajeAgarrar: "El chaleco te da mas seguridad para continuar", mensajeNoAgarrar: "Modo pesadilla activado" },
    { nombre: "Arma", mensajeAgarrar: "Ahora estás armado y sexy...digo peligroso.", mensajeNoAgarrar: "Prefieres no tomar el arma." },
    { nombre: "sombrero de paja", mensajeAgarrar: "No se de que te va a servir, pero te queda fachero.", mensajeNoAgarrar: "Ese sombrero era del futuro rey de los piratas" },
    { nombre: "katana endemoniada", mensajeAgarrar: "¡Es como si fuera un sueño!VAS A SER EL MEJOR ESPADACHIN", mensajeNoAgarrar: "Hubieras puesto a rezar a tus enemigos" },
]

simular()
