alert("Estás en una guerra")

// Función de flecha para realizar la simulación
const simular = () => {
    while (true) {
        alert("Encontraste un casco en el piso");
        const opcionIngresada = prompt("Quieres agarrar el casco (si, no o esconderse)");

        let resultado = ""
        switch (opcionIngresada) {
            case "si":
                resultado = "Has agarrado el casco +50 de defensa"
                break
            case "no":
                resultado = "No agarraste el casco. sos pollo"
                break
            case "esconderse":
                resultado = "Te escondiste cagon"
                break
            case "huir":
                resultado = " Te salvaste"
                break
            default:
                resultado = "Selecciona una opción válida (si, no o esconderse).";
                alert(resultado)
                continue
        }
        alert(resultado)
        break
    }
}
simular()





