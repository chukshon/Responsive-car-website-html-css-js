// Show menu and remove menu

const toggle = document.querySelector('#nav-toggle')
const close = document.querySelector('#nav-close')
const navMenu = document.querySelector('#nav-menu')
const navLinks = document.querySelectorAll('.nav__link')
toggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu')
})

close.addEventListener('click', () => {
  navMenu.classList.remove('show-menu')
})

navLinks.forEach((e) => {
  e.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
})

// Change Background Header
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header')

  header.classList.toggle('scroll-header', window.scrollY >= 50)
})
