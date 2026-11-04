// Carga la página del instituto en el marco inferior al pulsar el botón.
const botonCargarIes = document.getElementById("cargar-ies");
const marcoInferior = document.getElementById("marco-inferior");

botonCargarIes.addEventListener("click", () => {
  marcoInferior.src = "https://www.ieslassalinas.org/";
});
