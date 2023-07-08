// Navbar

const navbar = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        navbar.classList.add('header_active')
    } else {
        navbar.classList.remove('header_active')
    }
})

const menuBtn = document.getElementById('bars-btn')
const navMenu = document.querySelector('.nav-list')

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-list_active')
})