// Añade un número o un operador a la pantalla de la calculadora.
function escribir(valor) {

    let pantalla = document.getElementById("pantalla");

    if (pantalla.value == "0") {
        pantalla.value = valor;
    }

    else {
        pantalla.value += valor;
    }
}

// Evalúa la operación que está escrita en la pantalla.
function calcular() {
   let pantalla = document.getElementById("pantalla");
    pantalla.value = eval(pantalla.value);
}   

// Restablece la pantalla al valor inicial.
function borrar() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
}