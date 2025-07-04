const navbutton = document.querySelector('#ham-btn');
const navmenu = document.querySelector('#nav-menu');

navbutton.addEventListener('click', () =>
{
    navbutton.classList.toggle('show');
    navmenu.classList.toggle('show');
});