const headerMain = document.querySelector('.header')
const headerIcon = document.querySelector('.header-icon-search')
const headerSearch = document.querySelector('.header-form-search')
const headerClose = document.querySelector('.header-btn-close')
const btnCloseContact = document.querySelector('.btn-close-contact')
const headerIconContact = document.querySelector('.header-icon-bar')
const headerContact = document.querySelector('.header-contact')
const formSearch = document.querySelector('.header-form-search-content')
const ovelaySearch = document.querySelector('.header-form-search')
const header__nav__list = document.querySelector('.header__nav__list')


// search
headerIcon.addEventListener('click',(e)=>{
    headerSearch.classList.add('is-show-search')
})

headerClose.addEventListener('click',()=>{
    headerSearch.classList.remove('is-show-search')
})


ovelaySearch.addEventListener('click',(e)=>{
    headerSearch.classList.remove('is-show-search')
})

formSearch.addEventListener('click',(e)=>{
    e.stopPropagation();
})


// contact
headerIconContact.addEventListener('click',()=>{
    headerContact.classList.add('is-show-contact')
})

btnCloseContact.addEventListener('click',()=>{
    headerContact.classList.remove('is-show-contact')
})

window.addEventListener('scroll',()=>{
    if(window.scrollY > 150){
        headerContact.classList.remove('is-show-contact')
        headerMain.classList.add('add-box-shadow')
    }else{
        headerMain.classList.remove('add-box-shadow')
    }
})

// mobile nav
const mobileNav = document.querySelector('.header__nav-mobile-icon')
const headerNavMobile = document.querySelector('.header__nav')
mobileNav.addEventListener('click',()=>{
    headerNavMobile.classList.toggle('is-show-nav')
    header__nav__list.classList.toggle('toggle-mobile')
})


const hiddenSubClick = document.querySelector('.header__nav-mobile-icon')
const subHidden = document.querySelectorAll('.hidden-click')
const myArray =Array.from(subHidden)

hiddenSubClick.addEventListener('click',()=>{
    myArray.forEach(element => {
        element.checked = false
    });
})


function hiddenClick(value){
    const myArrayfilter = myArray.filter(value1 => {
       return value1.matches(`${value}`)
    })
    const arr = myArray.filter(e => e !== myArrayfilter[0])
    arr.forEach(element => {
        element.checked = false
    })
}
