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
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')
const sendEmail = (e)=>{
    e.preventDefault()
    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_la5eq61', 'template_ucvtl77', '#contact-form', 'LApyaLIot6sRkN4rD')
    .then(()=>{
        //show sent message
        contactMessage.textContent= 'Message sent successfully ...'
        // Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent=''
        }, 5000)
        // clear input fild
        contactForm.reset()
    }, ()=>{
        contactMessage.textContent= 'Message not sent (service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
