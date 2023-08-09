import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedOptionsEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');


function populateBreedOptions() {
  fetchBreeds()
    .then(breeds => {
      const optionsHTML = breeds
        .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
        .join('');
      breedOptionsEl.innerHTML = optionsHTML;
    })
    .catch(error => {
      console.error(error);
    });
}
populateBreedOptions();

breedOptionsEl.addEventListener('change', onChangeOption)

function onChangeOption (e) {
    const currentCat = e.target.value;
    fetchCatByBreed(currentCat).then(cat => {
        const catImg = cat[0].url;
        const catName = cat[0].breeds[0].name;
        const catDescr = cat[0].breeds[0].description;
        const catTemperament = cat[0].breeds[0].temperament;
        
        const catMarkup =`
        <img class="catIMG" src="${catImg}" alt="" height="300" width="300">
      <h2 class="catName">${catName}</h2>
      <p class="catDescr">${catDescr}</p>
      <p class="catTemp"> Temperament: ${catTemperament}</p>
        `
        catInfoEl.innerHTML = catMarkup;
    }).catch(error => {
        console.error(error);
    });
    
} 