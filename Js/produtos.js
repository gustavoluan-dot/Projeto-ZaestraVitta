
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('menu');


menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

   
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});
