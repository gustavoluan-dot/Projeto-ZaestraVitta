document.addEventListener("DOMContentLoaded", () => {
   
    const menuBtn = document.getElementById('menu-btn'); 
    const navMenu = document.getElementById('menu-navegacao'); 

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('aberto'); 
            menuBtn.classList.toggle('ativo');  
        });
    }
});