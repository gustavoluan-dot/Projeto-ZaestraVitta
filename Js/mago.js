document.addEventListener("DOMContentLoaded", () => {
    // --- Menu Hambúrguer ---
    // ID menu-btn e classe hamburguer
    const menuBtn = document.getElementById('menu-btn'); 
    const navMenu = document.getElementById('menu-navegacao'); 

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('aberto'); // Controla a abertura/fechamento
            menuBtn.classList.toggle('ativo');  // Controla a animação X
        });
    }
});