const readlineSync = require('readline-sync');

const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";

function obtenerJugadaComputadora() {
    const opciones = [PIEDRA, PAPEL, TIJERAS];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function obtenerJugadaUsuario() {
    const jugada = readlineSync.question("Ingresa tu jugada (piedra, papel o tijeras):").toLowerCase();
    if (jugada === PIEDRA || jugada === PAPEL || jugada === TIJERAS) {
        return jugada;
    } else {
        alert("Jugada inválida. Por favor, ingresa piedra, papel o tijeras.");
        return obtenerJugadaUsuario();
    }
}

function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
        return "Empate";
    } else if (
        (jugadaComputadora === PIEDRA && jugadaUsuario === TIJERAS) ||
        (jugadaComputadora === PAPEL && jugadaUsuario === PIEDRA) ||
        (jugadaComputadora === TIJERAS && jugadaUsuario === PAPEL)
    ) {
        return "Gana la computadora";
    } else {
        return "Gana el usuario";
    }
}

function jugarPiedraPapelTijeras() {
    let jugadasTotales = readlineSync.question("Cuantas jugadas quieres jugar? ");

    if (isNaN(jugadasTotales) || jugadasTotales <= 0) {
        alert("El número de jugadas debe ser un número positivo.");
        return;
    }

    let contadorJugadas = 0;
    let contadorComputadora = 0;
    let contadorUsuario = 0;

    while (contadorJugadas < jugadasTotales) {
        const jugadaComputadora = obtenerJugadaComputadora();
        const jugadaUsuario = obtenerJugadaUsuario();
        const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

        console.log("La computadora eligió: " + jugadaComputadora + ".");
        console.log("El usuario eligió: " + jugadaUsuario + ".");
        console.log("El resultado fue: " + resultado + ".");

        if (resultado === "Gana la computadora") {
            contadorComputadora++;
        } else if (resultado === "Gana el usuario") {
            contadorUsuario++;
        }

        contadorJugadas++;
    }

    if (contadorComputadora > contadorUsuario) {
        console.log("La computadora ganó " + contadorComputadora + " de " + jugadasTotales + " jugadas.");
    } else if (contadorUsuario > contadorComputadora) {
        console.log("El usuario ganó " + contadorUsuario + " de " + jugadasTotales + " jugadas.");
    } else {
        console.log("Hubo un empate. Ambos ganaron " + contadorUsuario + " de " + jugadasTotales + " jugadas.");
    }
}

jugarPiedraPapelTijeras();