// {/* <select name="select">
//   <!--Supplement an id here instead of using 'name'-->
//   <option value="value1">Значение 1</option>
//   <option value="value2" selected>Значение 2</option>
//   <option value="value3">Значение 3</option>
// </select> */}
// https://api.thecatapi.com/v1/breeds
const API_KEY = 'live_CfrllrdCWOagVVd0syszXTyG8ZIWt9i8Spe8uOpHnyAKUk0Q7plUoMGCZ2AQAkMF';

const breedOptionsEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catInfoEl = document.querySelector('.cat-info');

let breadNumb = 0;
const fetchCatsBreadOptions = fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`)
.then(response => { 
    if (!response.ok) {
        throw new Error(response.status)
    } 
    return response.json();
})
.then(data => data.map(({name, id}) => `<option value="${id}">${name}</option>`).join(''))
.catch(error => console.log(error));

console.log(fetchCatsBreadOptions)