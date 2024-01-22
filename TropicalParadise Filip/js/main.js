const normalMenu = document.querySelector('.normal-menu');
const normalMenuBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.normal-menu__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
    normalMenu.classList.toggle('normal-menu--active');
    navBtnBars.classList.remove('black-bars-color')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            normalMenu.classList.remove('normal-menu--active')
        })
    })
    handleNormalMenuAnimation();
}

const handleNormalMenuAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
         item.classList.toggle('normal-menu-animation')
         item.style.animationDelay = '.' + delayTime + 's';
         delayTime++
    })
}
const handleObserver = () => {
    const currentSection = window.scrollY;
    allSections.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }



    })
}

const handleCurrentyear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

normalMenuBtn.addEventListener('click' , handleNav);
handleCurrentyear();

window.addEventListener('scroll', handleObserver)