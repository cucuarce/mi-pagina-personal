document.addEventListener("DOMContentLoaded", function() {
    const texto = [
        "Hola, soy {cucú}...",
        "Recién graduado, con pasión por la programación y el desarrollo de software.",
        "He adquirido habilidades en diversas tecnologías durante mis estudios y proyectos estudiantiles.",
        "Actualmente me encuentro en búsqueda de nuevos desafíos en una empresa que me permita potenciar mi desarrollo profesional."
    ];
    const divTexto = document.getElementById("texto-escrito");
    escribirTexto(divTexto, texto);
});

function escribirTexto(elemento, texto) {
    let indexLinea = 0;
    let indexLetra = 0;

    const escribir = setInterval(function() {
        if (indexLetra < texto[indexLinea].length) {
            elemento.innerHTML += texto[indexLinea].charAt(indexLetra);
            indexLetra++;
        } else {
            elemento.innerHTML += "<br>"; // Agrega un salto de línea cuando se completa una línea
            indexLinea++;
            indexLetra = 0;
        }

        if (indexLinea === texto.length) {
            clearInterval(escribir); // Detiene la animación cuando se ha escrito todo el texto
        }
    }, 50); // Ajusta la velocidad de escritura según prefieras
}

function toggleNavbar() {
    const navbar = document.querySelector('header ul');
    navbar.classList.toggle('active');
}


