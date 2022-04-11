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

// Swiper

let swiperPopular = new Swiper('.popular__container', {
  loop: true,
  spaceBetween: 25,
  slidesPerView: 1.4,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
})

// Tabs
let mixerFeatured = mixitup('.featured__content', {
  selectors: {
    target: '.featured__card',
  },
  animation: {
    duration: 300,
  },
})

// Active featured Link

const linkFeatured = document.querySelectorAll('.featured__item')

function activeLink() {
  linkFeatured.forEach((g) => {
    g.classList.remove('active-featured')
  })
  this.classList.add('active-featured')
}
linkFeatured.forEach((l) => {
  l.addEventListener('click', activeLink)
})

// Show scrollUp

function scrollUp() {
  const scrollUp = document.querySelector('#scroll-up')

  if (this.scrollY >= 350) {
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollUp)
