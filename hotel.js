let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
    bed.classList.remove('active');
}
let search=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    navbar.classList.remove('active');
    search.classList.toggle('active');
    bed.classList.remove('active');
}
let bed=document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
    bed.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
    bed.classList.remove('active');
}