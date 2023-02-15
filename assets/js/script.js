
const btnMenu = document.querySelector(".cabecalho__btnMenu");

// FUNÇÃO PARA ABRIR O MENU
function menuShow(event) {

    // MENU
    const listaMenu = document.querySelector(".cabecalho__listaMenu");
    listaMenu.classList.toggle("ativado");

    const IconesRedes = document.querySelector(".cabecalho__iconesRedes");
    IconesRedes.classList.toggle("ativado");
    
    const flechaMenu = document.querySelector(".hamburguer");
    flechaMenu.classList.toggle("ativado");

    // ACESSIBILIDADE
    if (event.type == "touchstart") event.preventDefault();

    const menuAtivado = listaMenu.classList.contains("ativado");
    
    event.currentTarget.setAttribute("aria-expanded", menuAtivado);

    if (menuAtivado) {
        event.currentTarget.setAttribute("aria-label", "Botão fechar menu")
    } else {
        event.currentTarget.setAttribute("aria-label", "Botão abrir menu")
    }
}

btnMenu.addEventListener("click", menuShow);
btnMenu.addEventListener("touchstart", menuShow);