const navOpenButton = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.menu-nav');
const mediaQuery = window.matchMedia('(min-width:768px)')
const navMenuList = document.querySelector('.menu-nav-list')
const headerTop = document.querySelector('.header-top');
const sectionOne = document.querySelector('.intro');
const sectionTwo = document.querySelector('.burger-ingredients');
const sectionTwoImage = document.querySelector('.burger-ingredients-image-container');
const sectionTwoText = document.querySelector('.burger-ingredients-text-container')

const menuImages = document.querySelectorAll('.burger-image');

const mapContainer = document.querySelector('.map-container');


const caursel = document.querySelector('.caursel');
const arrows = document.querySelectorAll('.wrapper i');
const firstCardWidth = document.querySelector('.menu-img').offsetWidth;


//Resimler yuklenene kadar resimlerin yerine place holder tutmama izin veriyor
arrows.forEach((arrow) => {
    arrow.addEventListener('click',() => {
        caursel.scrollLeft += arrow.id === 'arrow-left' ? -firstCardWidth : firstCardWidth;
    });
});

function loadImage(e){
    e.target.parentElement.classList.add('loaded');
}

menuImages.forEach((img) => {
    if(img.complete){
        loadImage();
    }else{
        img.addEventListener('load',loadImage)
    }
});

//Headerin respnisve ve islevsellegini artirmama izin veriyor
navOpenButton.onclick = () =>{
    navMenu.classList.toggle('open');   
    navMenuList.classList.toggle('open');
    navMenu.classList.add('trans');
}

mediaQuery.addEventListener('change',() => {
    if (mediaQuery.matches) {
         navMenu.classList.remove('trans');
         mapContainer.style.backgroundImage = "url('images/Screenshot 2023-11-15 at 12.08.11 PM-modified.png')"
    }
});

//Ikinci sectionda gecis animasyonlari  yapmama izin veriyor
const optionsSectionTwo = {
    root : null,
    thresold : 0,
    rootMargin : '0px 0px -30% 0px'
}

const sectionTwoObserver  = new IntersectionObserver(function(entries,observer){
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            // if (mediaQuery.matches) {
            //     sectionTwoImage.classList.add('mouveIn');
            //     sectionTwoText.classList.add('mouveIn');
            //     // sectionTwoObserver.unobserve()
            // }
            sectionTwoImage.classList.add('mouveIn');
            sectionTwoText.classList.add('mouveIn');
            sectionTwoObserver.unobserve(sectionTwo);
        }
    })
},optionsSectionTwo)

sectionTwoObserver.observe(sectionTwo)


if (mediaQuery.matches) {
    mapContainer.style.backgroundImage = "url('images/Screenshot 2023-11-15 at 12.08.11 PM-modified.png')"
}







