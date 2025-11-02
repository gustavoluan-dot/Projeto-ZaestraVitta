document.addEventListener("DOMContentLoaded", () => {
    // 1. Busca o botão/ícone do menu hambúrguer pelo ID "menu-btn"
    const menuBtn = document.getElementById('menu-btn'); 
    
    // 2. Busca o menu de navegação completo pelo ID "menu"
    const navMenu = document.getElementById('menu'); 

    // 3. Verifica se ambos os elementos existem antes de adicionar o evento
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            // Usa o método toggle para ADICIONAR ou REMOVER a classe 'show'
            // A classe 'show' é responsável por aumentar o max-height do menu (definido no CSS)
            navMenu.classList.toggle('show'); 
            
            // Opcional: Adiciona/remove a classe 'ativo' no botão para mudar o ícone se necessário
            menuBtn.classList.toggle('ativo'); 
        });
    }
});