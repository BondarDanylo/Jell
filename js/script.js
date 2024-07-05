// Menu background
const menuBackground = document.querySelector('.navigation__wrapper')
window.addEventListener('scroll', ()=> {
    if(window.pageYOffset > 50) {
        menuBackground.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'
    }else {
        menuBackground.style.backgroundColor = 'transparent'
    }
})

// Menu
const menuToggler = Array.from(document.querySelectorAll('#menu-toggler'))
const mobileMenu = document.querySelector('#mobile-menu')
const mobileLink = Array.from(document.querySelectorAll('.mobile-menu__item'))

menuToggler.forEach(i=> {
    i.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('active-menu')
    })
})

mobileLink.forEach(i => {
    i.addEventListener('click', ()=> {
        mobileMenu.classList.toggle('active-menu')
    })
})

// Menu Underline
const aboutSection = document.querySelector('#about')
const projectsSection = document.querySelector('#projects')
const pricesSection = document.querySelector('#prices')

const aboutMenu = document.querySelector('.about-menu')
const projectsMenu = document.querySelector('.projects-menu')
const pricesMenu = document.querySelector('.prices-menu')

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > aboutSection.offsetTop - 50 && window.pageYOffset < (aboutSection.offsetTop + aboutSection.offsetHeight - 150)) {
        aboutMenu.style.width = '60%'
    }else {
        aboutMenu.style.width = '0%'
    }

    if(window.pageYOffset > projectsSection.offsetTop - 150 && window.pageYOffset < (projectsSection.offsetTop + projectsSection.offsetHeight - 150)) {
        projectsMenu.style.width = '60%'
    }else {
        projectsMenu.style.width = '0%'
    }

    if(window.pageYOffset > pricesSection.offsetTop - 50 && window.pageYOffset < (pricesSection.offsetTop + pricesSection.offsetHeight - 150)) {
        pricesMenu.style.width = '60%'
    }else {
        pricesMenu.style.width = '0%'
    }
})
window.addEventListener('click', ()=> {
    if(window.pageYOffset > aboutSection.offsetTop - 50 && window.pageYOffset < (aboutSection.offsetTop + aboutSection.offsetHeight)) {
        aboutMenu.style.width = '60%'
    }else {
        aboutMenu.style.width = '0%'
    }

    if(window.pageYOffset > projectsSection.offsetTop - 50 && window.pageYOffset < (projectsSection.offsetTop + projectsSection.offsetHeight)) {
        projectsMenu.style.width = '60%'
    }else {
        projectsMenu.style.width = '0%'
    }

    if(window.pageYOffset > pricesSection.offsetTop - 50 && window.pageYOffset < (pricesSection.offsetTop + pricesSection.offsetHeight)) {
        pricesMenu.style.width = '60%'
    }else {
        pricesMenu.style.width = '0%'
    }
})

// Sliding Block About
const about = document.querySelector('#about')
const aboutTop = about.offsetTop
const aboutBottom = document.querySelector('#about-end').offsetTop
const aboutBlock = document.querySelector('.about-left')

window.addEventListener('scroll', ()=> {
    if(window.innerWidth > 1200) {
        if(window.pageYOffset > aboutTop + 165 && window.pageYOffset < aboutBottom + 150) {
            aboutBlock.style.marginTop  = window.pageYOffset - aboutTop - 155 + 'px'
            aboutBlock.style.alignSelf = 'flex-start'
        }else if (window.pageYOffset > aboutBottom) {
            aboutBlock.style.marginTop = '0px'
            aboutBlock.style.alignSelf = 'flex-end'
        } else {
            aboutBlock.style.marginTop = '0px'
            aboutBlock.style.alignSelf = 'flex-start'
        }
    }
})

// Sliding Block Services
const services = document.querySelector('#services')
const servicesTop = 6385
const servicesBlock = document.querySelector('.services-left')
const servicesBottom = 7587


if(window.innerWidth > 1200) {
    window.addEventListener('scroll', ()=> {
        console.log(servicesBottom)
        if(window.pageYOffset > servicesTop + 175 && window.pageYOffset < servicesBottom + 150) {
            servicesBlock.style.marginTop  = window.pageYOffset - servicesTop - 140 + 'px'
            servicesBlock.style.alignSelf = 'flex-start'
        }else if (window.pageYOffset > servicesBottom) {
            servicesBlock.style.marginTop = '0px'
            servicesBlock.style.alignSelf = 'flex-end'
        } else {
            servicesBlock.style.marginTop = '0px'
            servicesBlock.style.alignSelf = 'flex-start'
        }
     })
}


// Projects Popups
const projects = Array.from(document.querySelectorAll('.projects__img'))
projects.forEach(i => {
    i.addEventListener('click', ()=>{
        const projectNumber = i.dataset.project
        const projectPopup = document.querySelector(`#port_${projectNumber}`)
        const popupClose = projectPopup.querySelector('#popup-close')
        
        projectPopup.style.display = 'block'

        if( projectPopup.style.display === 'block') {
            document.body.style.overflow = 'hidden'
        }

        popupClose.addEventListener('click', ()=> {
            projectPopup.style.display = 'none'
            document.body.style.overflow = 'auto'
        })
    })
})

// Form
const formSection = document.querySelector('#feedback')
const submitBtn = document.querySelector('.form__submit')
const submitedSection = document.querySelector('.submited-form')
const spinner = document.querySelector('.spinner__wrapper')

submitBtn.addEventListener('click', (e)=>{
    const formName = document.querySelector('.name')
    const formNumber = document.querySelector('.number')
    const formEmail = document.querySelector('.email')
    if(formName.value.length > 1 && formNumber.value.length > 1 && formEmail.value.length > 1) {
        e.preventDefault()
        setTimeout(()=>{
            spinner.style.display = 'none'
            formSection.style.display = 'none'
            if(window.innerWidth > 992) {
                submitedSection.style.display = 'flex'
            }
            else {
                submitedSection.style.display = 'block'
            }
        }, 2000)
        spinner.style.display = 'flex'
    }
})

// Waranty Popup 
const warantyBtns = Array.from(document.querySelectorAll('.waranty-toggle'))
const warantyPopup = document.querySelector('.waranty-wrapper')
const warantyClose = Array.from(warantyPopup.querySelectorAll('.waranty-close'))

warantyBtns.forEach(i => {
    i.addEventListener('click', (e)=> {
        e.preventDefault()
        warantyPopup.style.display = 'block'
        document.body.style.overflow = 'hidden'
    })
})
warantyClose.forEach(i => {
    i.addEventListener('click', () => {
        warantyPopup.style.display = 'none'
        document.body.style.overflow = 'auto'
    })
})