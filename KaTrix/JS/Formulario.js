// Campos del formulario que participan en la validación y en los mensajes.
const formulario = document.getElementById("formulario-registro");
const correo = document.getElementById("correo");
const confirmarCorreo = document.getElementById("confirmar-correo");
const contrasena = document.getElementById("contrasena");
const confirmarContrasena = document.getElementById("confirmar-contrasena");
const estadoFormulario = document.getElementById("estado-formulario");
const nivel = document.getElementById("nivel");
const nivelValor = document.getElementById("nivel-valor");

// Borra los avisos de error cuando el usuario modifica algún campo.
formulario.addEventListener("input", () => {
    estadoFormulario.textContent = "";
    confirmarCorreo.setCustomValidity("");
    confirmarContrasena.setCustomValidity("");
});

// Mantiene el valor mostrado junto al control deslizante.
nivel.addEventListener("input", () => {
    nivelValor.value = nivel.value;
});

// Limpia los mensajes y recupera el valor inicial al restablecer el formulario.
formulario.addEventListener("reset", () => {
    estadoFormulario.textContent = "";
    confirmarCorreo.setCustomValidity("");
    confirmarContrasena.setCustomValidity("");
    nivelValor.value = nivel.defaultValue;
});

// Comprueba que los correos y las contraseñas coincidan antes de validar.
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    confirmarCorreo.setCustomValidity(
        correo.value === confirmarCorreo.value ? "" : "Los correos electrónicos no coinciden."
    );
    confirmarContrasena.setCustomValidity(
        contrasena.value === confirmarContrasena.value ? "" : "Las contraseñas no coinciden."
    );

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    estadoFormulario.textContent = "Formulario validado. Esta demostración no envía ni guarda tus datos.";
});
