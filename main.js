const ul = document.querySelector('.navitems').style;
const navbar = document.querySelector('.navbar');
const nav = navbar.style;
const main = document.querySelector('main').style;
const moreButton = document.querySelector('.moreButton');
const body = document.querySelectorAll('body');
document.addEventListener('click', more);

if(window.matchMedia("(max-width:1016px)").matches){ moreButton.style.display = 'block'}

function more(e){
    let target = e.target;

    if(window.matchMedia("(max-width:1016px)").matches){
    if(!target.classList.contains('list')){
        ul.display = 'none';
        nav.marginLeft = '0';
        main.opacity = '100%';
    }
    if(target.classList.contains('moreButton')){
        ul.display = 'flex';
        nav.marginLeft = '260px';
        main.opacity = '10%';
        ul.zIndex = '2';
}

    }
}