$('.header__content').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});
$('.reviews__inner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'ease-in-out',
    swipe: false,
});

let modalBtn = document.querySelector('.order__cal')
let modalWindow = document.querySelector('[data-modal')
let btnModal = document.querySelector('.modal__btn')
let modalItem = document.querySelector('.modal__window')
let cartClose = document.querySelector('.cart__close')
modalBtn.addEventListener('click', () => {
    modalWindow.classList.toggle('hidden')
    document.body.classList.toggle('stop__scroll')

})
btnModal.addEventListener('click', () => {
    modalWindow.classList.add('hidden')

})
cartClose.addEventListener('click', () => {
    modalWindow.classList.add('hidden')

})
// Закрытие модалки по фейду
modalWindow.addEventListener('click', () => {
    modalWindow.classList.add('hidden')
    document.body.classList.remove('stop__scroll')
})

// Не закрывает модалку внутри формы
modalItem.addEventListener('click', (e) => {
    e.stopPropagation();
})