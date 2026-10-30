const musica = document.getElementById("musica");
const botao = document.getElementById("btn-audio");
const formulario = document.querySelector(".formulario");
const mascaraFormulario = document.querySelector(".mascara-formulario");
const faleConosco = document.querySelector(".fale-conosco-header");

botao.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        botao.textContent = "🔊";
        botao.setAttribute("aria-label", "Pausar música");
    } else {
        musica.pause();
        botao.textContent = "🔇";
        botao.setAttribute("aria-label", "Tocar música");
    }
});

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascaraFormulario.style.visibility = "visible";
}

function esconderForm() {
    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)";
    mascaraFormulario.style.visibility = "hidden";
}


