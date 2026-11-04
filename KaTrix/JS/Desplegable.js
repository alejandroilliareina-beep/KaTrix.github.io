// En los iframes del ejercicio 23 solo se muestra el contenido del ejercicio.
if (new URLSearchParams(window.location.search).has('incrustado')) {
    document.body.classList.add('vista-incrustada');
}

// Localiza todos los menús de ejercicios de la página.
const desplegables = document.querySelectorAll('.desplegable-header');

desplegables.forEach((desplegable) => {
    const boton = desplegable.querySelector('.boton-desplegable');

    // Abre o cierra el menú y actualiza su estado accesible.
    boton.addEventListener('click', () => {
        const abierto = desplegable.classList.toggle('open');
        boton.setAttribute('aria-expanded', String(abierto));
    });

    // Cierra el menú al hacer clic fuera de él.
    document.addEventListener('click', (evento) => {
        if (!desplegable.contains(evento.target)) {
            desplegable.classList.remove('open');
            boton.setAttribute('aria-expanded', 'false');
        }
    });

    // Permite cerrar el menú con la tecla Escape.
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            desplegable.classList.remove('open');
            boton.setAttribute('aria-expanded', 'false');
        }
    });
});
