const navOpenButton = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.menu-nav');
const mediaQuery = window.matchMedia('(min-width:768px)')
const navMenuList = document.querySelector('.menu-nav-list')
const headerTop = document.querySelector('.header-top');
const sectionOne = document.querySelector('.intro');
const sectionTwo = document.querySelector('.burger-natural-ingredients');
const sectionTwoImage = document.querySelector('.burger-natural-ingredients-image-container');
const sectionTwoText = document.querySelector('.burger-natural-ingredients-text-container')

console.log(sectionTwoImage);
navOpenButton.onclick = () =>{
    navMenu.classList.toggle('open');   
    navMenuList.classList.toggle('open');
    navMenu.classList.add('trans');
}

mediaQuery.addEventListener('change',() => {
    if (mediaQuery.matches) {
         navMenu.classList.remove('trans');
    }
});


const optionsSectionTwo = {
    root : null,
    thresold : 0,
    rootMargin : '0px 0px -30% 0px'
}

const sectionTwoObserver  = new IntersectionObserver(function(entries,observer){
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            if (mediaQuery.matches) {
                sectionTwoImage.classList.add('mouveIn');
                sectionTwoText.classList.add('mouveIn');
                // sectionTwoObserver.unobserve()
            }
        }
    })
},optionsSectionTwo)


sectionTwoObserver.observe(sectionTwo)





// const optionsSectionOne = {
//     root : null,
//     thresold : 0,
//     rootMargin : '-80px'
// }
// const sectionOneObserver = new IntersectionObserver(function(entries,observer) {
        
//         entries.forEach((entry)=>{
//             if(!entry.isIntersecting){
//                 headerTop.classList.add('scrolled');
//             }else if(entry.isIntersecting){
//                 headerTop.classList.remove('scrolled');
//             }
//         })
// },

// optionsSectionOne);

// sectionOneObserver.observe(sectionOne);






