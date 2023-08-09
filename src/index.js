import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedOptionsEl = document.querySelector('.breed-select');
export const loaderEl = document.querySelector('.loader');
export const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

loaderEl.classList.add('is-hidden');
errorEl.classList.add('is-hidden');

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

    loaderEl.classList.remove('is-hidden');
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
        loaderEl.classList.add('is-hidden');
    }).catch(error => {
        console.error(error);
        errorEl.classList.remove('is-hidden');
        loaderEl.classList.add('is-hidden');
    });
    errorEl.classList.add('is-hidden');
} 