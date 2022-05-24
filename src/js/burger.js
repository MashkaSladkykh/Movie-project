const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu__list');

burger.addEventListener('click', (e)=>{
    e.preventDefault();
    burger.classList.toggle('burger');
    burger.classList.toggle('close')
    menu.classList.toggle("burger__show");  

})