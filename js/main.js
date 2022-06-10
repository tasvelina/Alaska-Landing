const mobileBtn = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('mobile-menu-active');
})
