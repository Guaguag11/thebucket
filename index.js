

let button = document.querySelector('.content__button');
let title = document.querySelector('.header__title');
let visibletitle = document.querySelector('.header__title-visible');

button.addEventListener('click', function(){
    console.log('si se pico');
    title.classList.toggle('header__title-visible');
});