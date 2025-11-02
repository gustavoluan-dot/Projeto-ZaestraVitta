document.addEventListener("DOMContentLoaded", () => {
    // Busca o ícone do menu hambúrguer pelo ID
    const menuBtn = document.getElementById('menu-btn'); 
    // Busca o menu de navegação pelo ID
    const menu = document.getElementById('menu'); 

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            // Adiciona ou remove a classe 'show' no elemento <nav>
            menu.classList.toggle('show'); 
            // Opcional: Adiciona a classe 'ativo' no botão se quiser mudar o ícone
            menuBtn.classList.toggle('ativo'); 
        });
    }
});