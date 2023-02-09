const btnMenu = document.querySelector(".cabecalho__btnMenu");

// FUNÇÃO PARA ABRIR O MENU
function menuShow() {

    const listaMenu = document.querySelector(".cabecalho__listaMenu");
    listaMenu.classList.toggle("ativado");

    const IconesRedes = document.querySelector(".cabecalho__iconesRedes");
    IconesRedes.classList.toggle("ativado");
    
    const flechaMenu = document.querySelector(".hamburguer");
    flechaMenu.classList.toggle("ativado");

}

btnMenu.addEventListener("click", menuShow);