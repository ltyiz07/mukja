const togglebtn = document.querySelector('.navbar__togglebtn');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');

togglebtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    links.classList.toggle('active');
});

