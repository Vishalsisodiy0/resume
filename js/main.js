/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {

        header.classList.remove('scroll-header')
    }

}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close');
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () =>
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    )
})

// ====================work modal==============================

const WorkModelView = document.querySelectorAll('.work__modal'),
    WorkModelBtns = document.querySelectorAll('.work__button'),
    WorkModelClose = document.querySelectorAll('.work__modal-close')

let workModal = function(workmodalClick) {
    WorkModelView[workmodalClick].classList.add('work__active-modal')
}

WorkModelBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        workModal(i)
    })
})
WorkModelClose.forEach((wmc) => {
        wmc.addEventListener('click', () => {
            WorkModelView.forEach((wmv) => {
                wmv.classList.remove('work__active-modal')
            })
        })
    })
    /*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */

const linlWork = document.querySelectorAll('.work__item')

function activework() {
    linlWork.forEach(L => L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linlWork.forEach(L => L.addEventListener('click', activework))


/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonal__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },

    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/


const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selcetedIcon = localStorage.getItem('selection-icon')

// we obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// we validate if the user previously chose a topic

if (selectedTheme) {
    //   if the validateicon is fulfilled , we ask the issue was to know if we activated or deactivated the dark

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selcetedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with button

themeButton.addEventListener('click', () => {
    // add or remove the light / icons theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
        // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: 400,
    // reset:true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, { delay: 700 })
sr.reveal(`.home__social, .home__scroll`, { delay: 900, origin: 'bottom' })

// ====================Contact Form Submit==========================
// const name = document.getElementById('name')
// const email = document.getElementById('email')
// const msg = document.getElementById('msg')

// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "sunilyadavwork2003@gmail.com",
//         Password: "59CF0F4C2E473B3706F0AE80EA57AE287367",
//         To: 'sunilyadavwork2003@gmail.com',
//         From: email.value,
//         Subject: msg.value,
//         Body: "And this is the body"
//     }).then(
//         message => alert(message)
//     );
// }