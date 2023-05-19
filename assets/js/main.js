/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu')
const navToggle = document.getElementById('nav__toggle')
const navClose = document.getElementById('nav__close')

/*====== Menu Show ======== */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*====== Menu Hidden ======== */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
