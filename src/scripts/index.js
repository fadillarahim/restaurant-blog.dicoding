import 'regenerator-runtime'; /* for async await transpile */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';


document.addEventListener('DOMContentLoaded', ()=>{
    const listrestElement = document.querySelector('.list-restaurant');
    const cardElement = document.createElement('div');
    cardElement.setAttribute('class', 'item');
    const restaurants = data.restaurants;
    restaurants.forEach(resto =>{
        cardElement.innerHTML +=`
          <div class="card card-item">
            <img src="${resto.pictureId}" class="card-img-top card-img" alt="${resto.name} Picture">
            <div class="card-body">
              <h5 class="card-title">${resto.name}</h5>
              <h5 class="card-text text-muted">Rating : <span class=ratting>&#9733;</span>${resto.rating}</h5>
              <p class="card-text card-desc">${resto.description}</p>
            </div>
          </div>
        `
        listrestElement.appendChild(cardElement);
    })

});
