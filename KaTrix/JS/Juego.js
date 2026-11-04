// Elementos de la página usados para jugar y mostrar el marcador.
const opcionPiedra = document.getElementById("piedra");
const opcionPapel = document.getElementById("papel");
const opcionTijera = document.getElementById("tijera");
const botonIniciarRonda = document.getElementById("iniciar-ronda");
const imagenJugadaUsuario = document.getElementById("jugador-usuario");
const imagenJugadaCpu = document.getElementById("jugador-cpu");
const marcadorUsuario = document.getElementById("puntos-usuario");
const marcadorCpu = document.getElementById("puntos-cpu");
const avisoJuego = document.getElementById("resultado");
let puntosUsuario = Number(marcadorUsuario.innerText);
let puntosCpu = Number(marcadorCpu.innerText);
let jugadaUsuario;
let jugadaCpu;

// Comprueba que se haya elegido una jugada y comienza la ronda.
botonIniciarRonda.onclick = function () {
    if (!jugadaUsuario) {
        avisoJuego.innerText = "Elige una opción";
        return;
    }

    jugadaCpu = obtenerOpcionAleatoria();
    mostrarJugadaCpu(jugadaCpu);
    compararJugadas(jugadaUsuario, jugadaCpu);
};

// Registra la elección de piedra y actualiza las imágenes y el botón activo.
opcionPiedra.onclick = function () {
    jugadaUsuario = "piedra";
    imagenJugadaUsuario.src = "./imagenes/piedra_izquierda.svg";
    imagenJugadaCpu.src = "./imagenes/cpu.svg";
    actualizarSeleccion("piedra");
};

// Registra la elección de papel y actualiza las imágenes y el botón activo.
opcionPapel.onclick = function () {
    jugadaUsuario = "papel";
    imagenJugadaUsuario.src = "./imagenes/papel_izquierda.svg";
    imagenJugadaCpu.src = "./imagenes/cpu.svg";
    actualizarSeleccion("papel");
};

// Registra la elección de tijera y actualiza las imágenes y el botón activo.
opcionTijera.onclick = function () {
    jugadaUsuario = "tijera";
    imagenJugadaUsuario.src = "./imagenes/tijera_izquierda.svg";
    imagenJugadaCpu.src = "./imagenes/cpu.svg";
    actualizarSeleccion("tijera");
};

// Marca visualmente y para tecnologías de asistencia la opción seleccionada.
function actualizarSeleccion(seleccion) {
    [opcionPiedra, opcionPapel, opcionTijera].forEach((opcion) => {
        opcion.setAttribute("aria-pressed", String(opcion.id === seleccion));
    });
}

// Elige al azar una de las tres opciones posibles para la CPU.
const opcionesDeJugada = ["piedra", "papel", "tijera"];
function obtenerOpcionAleatoria() {
    return opcionesDeJugada[Math.floor(Math.random() * opcionesDeJugada.length)];
}

// Compara las jugadas, muestra el resultado y actualiza los puntos.
function compararJugadas(jugadaUsuario, jugadaCpu) {
    let resultado;

    if (jugadaUsuario === jugadaCpu) {
        resultado = "empate";
    } else if (
        (jugadaUsuario === "piedra" && jugadaCpu === "tijera")
        || (jugadaUsuario === "papel" && jugadaCpu === "piedra")
        || (jugadaUsuario === "tijera" && jugadaCpu === "papel")
    ) {
        resultado = "gana-usuario";
    } else {
        resultado = "gana-cpu";
    }

    if (resultado === "gana-usuario") {
        avisoJuego.innerText = "¡Ganas la ronda!";
        avisoJuego.style.color = "#3FA796";
        puntosUsuario++;
        marcadorUsuario.innerText = puntosUsuario;
    } else if (resultado === "empate") {
        avisoJuego.innerText = "Empate";
        avisoJuego.style.color = "#FEC260";
    } else {
        avisoJuego.innerText = "Gana la CPU";
        avisoJuego.style.color = "#A10035";
        puntosCpu++;
        marcadorCpu.innerText = puntosCpu;
    }
}

// Muestra la imagen correspondiente a la elección de la CPU.
function mostrarJugadaCpu(jugada) {
    if (jugada === "piedra") {
        imagenJugadaCpu.src = "./imagenes/piedra_derecha.svg";
    } else if (jugada === "papel") {
        imagenJugadaCpu.src = "./imagenes/papel_derecha.svg";
    } else {
        imagenJugadaCpu.src = "./imagenes/tijera_derecha.svg";
    }
}

// Reinicia la partida y el marcador recargando la página.
const botonReiniciarJuego = document.getElementById("reiniciar-juego");
botonReiniciarJuego.addEventListener("click", () => {
    location.reload();
});
