import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '../styles/responsive.css';
import data from '../DATA.json';


document.addEventListener('DOMContentLoaded', ()=>{
    const listrestElement = document.querySelector('.list-restaurant');
    const cardElement = document.querySelector('.card-grid');
    const restaurants = data.restaurants;
    restaurants.forEach(resto =>{
        cardElement.innerHTML +=`
        <article class="card-item">
        <img class="card-item__thumbnail"
             src="${resto.pictureId}"
             alt="${resto.name} restaurant" tabindex="0">
        <div class="card-item__content">
        <h1 class="card-item__title" tabindex="0">${resto.name}</h1>  
        <p class="card-item_city" tabindex="0">
          located in ${resto.city}<span class=txt-rat> with Ratting </span><span class=ratting>&#9733;</span>${resto.rating}
          </p>
          <p class="card-item__description" tabindex="0">${resto.description}</p>
          <button class="card-item__btn_read">Read More</button>
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
