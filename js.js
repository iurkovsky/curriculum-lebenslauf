

function mostrar(divId) {
    // Esconde todas as divs
    const sections = document.querySelectorAll('.fotoFundo');
    sections.forEach((section) => {
        section.classList.add('hide');
    });

    // Mostra a div clicada
    const div = document.getElementById(`div${divId}`);
    if (div) {
        div.classList.remove('hide');
    }
}
