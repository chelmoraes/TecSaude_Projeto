$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = '/img/menu_white_36dp.svg';
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = '/img/close_white_36dp.svg';
    }
}