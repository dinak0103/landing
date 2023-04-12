/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== MODULE ===============*/

var backdrop = document.querySelector('.backdrop');
var btn = document.querySelectorAll('.btn');
var modal = document.querySelector('.modal');
var thank = document.querySelector('.thank');
var thankbtn = document.querySelector('.thankbtn');

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}



backdrop.addEventListener('click', closeModal);

thankbtn.addEventListener('click', thankModal);

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
    thank.style.display = 'none';
}

function thankModal () {
    modal.style.display = 'none';
    thank.style.display = 'block';
    backdrop.style.display = 'block';
}