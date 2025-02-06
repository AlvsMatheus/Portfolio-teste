let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
    const header = document.getElementById("header-container");

    if (window.scrollY > lastScrollY) {
        // Se rolar para baixo, esconde o header
        header.style.top = "-80px";
    } else {
        // Se rolar para cima, mostra o header
        header.style.top = "0";
    }

    // Atualiza lastScrollY
    lastScrollY = window.scrollY;
});
