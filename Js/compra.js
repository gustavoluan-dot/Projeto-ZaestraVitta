document.addEventListener("DOMContentLoaded", () => {
    
    const menuBtn = document.getElementById('menu-btn'); 
    
   
    const navMenu = document.getElementById('menu'); 

   
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            
            navMenu.classList.toggle('show'); 
            
          
            menuBtn.classList.toggle('ativo'); 
        });
    }
});