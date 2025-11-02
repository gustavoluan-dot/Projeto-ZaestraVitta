document.addEventListener("DOMContentLoaded", () => {
    // 1. Busca o botão/ícone do menu hambúrguer pelo ID "menu-btn"
    const menuBtn = document.getElementById('menu-btn'); 
    
    // 2. Busca o menu de navegação completo pelo ID "menu"
    const navMenu = document.getElementById('menu'); 

    // 3. Verifica se os elementos existem e adiciona o evento de clique
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            // Adiciona ou remove a classe 'show' no elemento <nav>
            // Essa classe é definida no CSS (detergente.css) para mostrar o menu
            navMenu.classList.toggle('show'); 
            
            // Opcional: Adiciona/remove a classe 'ativo' no botão (caso precise de uma animação no ícone)
            menuBtn.classList.toggle('ativo'); 
        });
    }
});