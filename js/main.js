const cartasContainer = document.getElementById("cartasContainer")

function mostrarCarta(carta) {
    const cartaDiv = document.createElement("div")
    cartaDiv.classList.add("carta")
    //Imagenes de las cartas
    const cartaImagen = document.createElement("img")
    cartaImagen.src = carta.img
    cartaDiv.appendChild(cartaImagen)
    cartasContainer.appendChild(cartaDiv)

    const cartaNombre = document.createElement("h2")
    cartaNombre.textContent = carta.cardName
    cartaDiv.appendChild(cartaNombre)

    const tipoCarta = document.createElement("p")
    tipoCarta.textContent = "Tipo: " + carta.tipo
    cartaDiv.appendChild(tipoCarta);

    const mensajeCarta = document.createElement("p")
    mensajeCarta.textContent = "Mensaje: " + carta.mensaje
    cartaDiv.appendChild(mensajeCarta)


    //botones de opciones
    if (carta.opciones.length > 0) {
        const opcionesDiv = document.createElement("button")
        opcionesDiv.classList.add("opciones")
        cartaDiv.appendChild(opcionesDiv)

        carta.opciones.forEach((opcion, index) => {
            const opcionDiv = document.createElement("div")
            opcionDiv.textContent = opcion.opcion1

            opcionDiv.addEventListener("click", () => {
                while (cartaDiv.firstChild) {
                    cartaDiv.removeChild(cartaDiv.firstChild)
                }

                const respuestaCarta = document.createElement("p")
                respuestaCarta.classList.add ("elemento-a-borrar")
                respuestaCarta.textContent = opcion.respuesta
                cartaDiv.appendChild(respuestaCarta)

                if (opcion.ganar) {
                    const ganarMensaje = document.createElement("p")
                    ganarMensaje.classList.add ("elemento-a-borrar")
                    ganarMensaje.textContent = "¡Has ganado!"
                    cartaDiv.appendChild(ganarMensaje)

                    continuarBtn.style.display = "block"
                } else {
                    const perderMensaje = document.createElement("p")
                    perderMensaje.classList.add ("elemento-a-borrar")
                    perderMensaje.textContent = "¡Has perdido!"
                    cartaDiv.appendChild(perderMensaje)

                    continuarBtn.style.display = "block"
                }


                localStorage.setItem("eleccionUsuario", opcion.opcion1)
                console.log("Elección del usuario: " + localStorage.getItem("eleccionUsuario"))


            });

            opcionesDiv.appendChild(opcionDiv);
        });
    }
    //opcion 2
    if (carta.opciones.length > 0) {
        const opcionesDiv = document.createElement("button")
        opcionesDiv.classList.add("opciones")
        cartaDiv.appendChild(opcionesDiv)

        carta.opciones.forEach((opcion, index) => {
            const opcionDiv = document.createElement("div")
            opcionDiv.textContent = opcion.opcion2

            opcionDiv.addEventListener("click", () => {
                while (cartaDiv.firstChild) {
                    cartaDiv.removeChild(cartaDiv.firstChild)
                }

                const respuestaCarta = document.createElement("p")
                respuestaCarta.textContent = opcion.respuesta
                respuestaCarta.classList.add("elemento-a-borrar")
                cartaDiv.appendChild(respuestaCarta)

                if (opcion.ganar) {
                    const ganarMensaje = document.createElement("p")
                    ganarMensaje.classList.add ("elemento-a-borrar")
                    ganarMensaje.textContent = "¡Has ganado!"
                    cartaDiv.appendChild(ganarMensaje)

                    continuarBtn.style.display = "block"
                    
                } else {
                    const perderMensaje = document.createElement("p")
                    perderMensaje.classList.add ("elemento-a-borrar")
                    perderMensaje.textContent = "¡Has perdido!"
                    cartaDiv.appendChild(perderMensaje)

                    continuarBtn.style.display = "block"
                }


                    localStorage.setItem("eleccionUsuario", opcion.opcion2);
                    console.log("Elección del usuario: " + localStorage.getItem("eleccionUsuario"))
            });

            opcionesDiv.appendChild(opcionDiv)
        });
    }
    //opcion 3
    if (carta.opciones.length > 0) {
        const opcionesDiv = document.createElement("button")
        opcionesDiv.classList.add("opciones")
        cartaDiv.appendChild(opcionesDiv)

        carta.opciones.forEach((opcion, index) => {
            const opcionDiv = document.createElement("div")
            opcionDiv.textContent = opcion.opcion3

            opcionDiv.addEventListener("click", () => {
                while (cartaDiv.firstChild) {
                    cartaDiv.removeChild(cartaDiv.firstChild)
                }

                const respuestaCarta = document.createElement("p")
                respuestaCarta.textContent = opcion.respuesta
                respuestaCarta.classList.add("elemento-a-borrar")
                cartaDiv.appendChild(respuestaCarta)

                if (opcion.ganar) {
                    const ganarMensaje = document.createElement("p")
                    ganarMensaje.classList.add("elemento-a-borrar")
                    ganarMensaje.textContent = "¡Has ganado!"
                    cartaDiv.appendChild(ganarMensaje)

                    continuarBtn.style.display = "block"
                } else {
                    const perderMensaje = document.createElement("p")
                    perderMensaje.classList.add("elemento-a-borrar")
                    perderMensaje.textContent = "¡Has perdido!"


                    cartaDiv.appendChild(perderMensaje)
                    continuarBtn.style.display = "block"
                }

                    localStorage.setItem("eleccionUsuario", opcion.opcion3);
                    console.log("Elección del usuario: " + localStorage.getItem("eleccionUsuario"))
            });

            opcionesDiv.appendChild(opcionDiv)
            
        });
        
    }


}


function seleccionarCartaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * card.length)
    return card[indiceAleatorio]
}

const cartaAleatoria = seleccionarCartaAleatoria()
mostrarCarta(cartaAleatoria)


const continuarBtn = document.getElementById("continuarBtn");
    continuarBtn.addEventListener("click", () => {  
        const nuevaCartaAleatoria = seleccionarCartaAleatoria();
        mostrarCarta(nuevaCartaAleatoria)
        
        const elementosABorrar = document.querySelectorAll(".elemento-a-borrar");


        elementosABorrar.forEach(function(elemento) {
            elemento.parentNode.removeChild(elemento)
        
        });      
});