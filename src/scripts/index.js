import 'regenerator-runtime'; /* for async await transpile */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '../styles/responsive.css';
import data from '../DATA.json';


document.addEventListener('DOMContentLoaded', ()=>{
    const listrestElement = document.querySelector('.list-restaurant');
    const cardElement = document.querySelector('.card-item');
    const restaurants = data.restaurants;
    restaurants.forEach(resto =>{
        cardElement.innerHTML +=`
        <article class="post-item">
        <img class="post-item__thumbnail"
             src="${resto.pictureId}"
             alt="${resto.name} restaurant picture" tabindex="0">
        <div class="post-item__content">
        <h1 class="post-item__title"><a href="#">${resto.name}</a></h1>  
        <p class="post-item_city" tabindex="0">
          located in ${resto.city}<span class=txt-rat> with Ratting </span><span class=ratting>&#9733;</span>${resto.rating}
          </p>
          <p class="post-item__description" tabindex="0">${resto.description}</p>
        </div>
      </article>
        `
        listrestElement.appendChild(cardElement);
    })

});

const menu = document.querySelector('#menu');
const jumbotron = document.querySelector('.jumbotron');
const main = document.querySelector('main');
const menuBar = document.querySelector('.menu-bar');
const menuItem = document.querySelectorAll('.nav-item a');

menu.addEventListener('click', function (event) {
  menuBar.classList.toggle('open');
  event.stopPropagation();
});

jumbotron.addEventListener('click', function () {
  menuBar.classList.remove('open');
});

main.addEventListener('click', function () {
  menuBar.classList.remove('open');
});

menuItem.addEventListener('click', function () {
  menuBar.classList.remove('open');
});
