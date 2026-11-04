// Cambia la página visible y mantiene actualizada la navegación del ejercicio.
const botonesPagina = document.querySelectorAll("[data-pagina]");
const contenidosPagina = document.querySelectorAll("[data-contenido]");
const botonesIr = document.querySelectorAll("[data-ir-a]");
const formularioUsuario = document.getElementById("formulario-usuario");
const formularioOpinion = document.getElementById("formulario-opinion");
const dialogoFinalizado = document.getElementById("dialogo-finalizado");

function mostrarPagina(nombrePagina) {
  const paginaExiste = Array.from(contenidosPagina).some(
    (pagina) => pagina.dataset.contenido === nombrePagina,
  );

  if (!paginaExiste) {
    return;
  }

  contenidosPagina.forEach((pagina) => {
    const paginaActiva = pagina.dataset.contenido === nombrePagina;
    pagina.hidden = !paginaActiva;
    pagina.classList.toggle("visible", paginaActiva);
  });

  botonesPagina.forEach((boton) => {
    const botonActivo = boton.dataset.pagina === nombrePagina;
    boton.classList.toggle("activo", botonActivo);

    if (botonActivo) {
      boton.setAttribute("aria-current", "step");
    } else {
      boton.removeAttribute("aria-current");
    }
  });
}

// Permite abrir una página desde la navegación superior o desde sus botones.
botonesPagina.forEach((boton) => {
  boton.addEventListener("click", () => {
    mostrarPagina(boton.dataset.pagina);
  });
});

botonesIr.forEach((boton) => {
  boton.addEventListener("click", () => {
    mostrarPagina(boton.dataset.irA);
  });
});

// Los datos personales son obligatorios; el navegador valida el formulario.
formularioUsuario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mostrarPagina("opinion");
});

// La opinión es opcional; al enviarla se muestra la página y el diálogo final.
formularioOpinion.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mostrarPagina("final");

  if (!dialogoFinalizado.open) {
    dialogoFinalizado.showModal();
  }
});
