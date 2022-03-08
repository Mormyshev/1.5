if(window.innerWidth < 768){
    new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
            clicable: true,
            dunamicBullets: true,
        },
        spaceBetween: -64,
    });
}
if(window.innerWidth > 767 && window.innerWidth < 900)
    var count = 6;
if(window.innerWidth > 899)
    var count = 8;
var brandsCards = document.querySelectorAll('.card-item');
var buttonOff = document.querySelector('.buttonOff');
var buttonOn = document.querySelector('.buttonOn');
buttonOff.style.display = "none";
buttonOn.style.display = "flex";
for (var i = count; i < brandsCards.length; i++) {
    brandsCards[i].style.display = "none"; 
}
function openCards() {
    var buttonOn = document.querySelector('.buttonOn');
    
    var icon = document.querySelector('.button-on__img');
    if(brandsCards[count].style.display === 'none'){
        for (var i = count; i < brandsCards.length; i++) {
            brandsCards[i].style.display = "flex"; 
        }
        buttonOff.style.display = "flex";
        buttonOn.style.display = "none";
    } else {
        for (var i = count; i < brandsCards.length; i++) {
            brandsCards[i].style.display = "none"; 
        } 
        buttonOff.style.display = "none";
        buttonOn.style.display = "flex";
    }
    
}
