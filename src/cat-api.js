const API_KEY = 'live_CfrllrdCWOagVVd0syszXTyG8ZIWt9i8Spe8uOpHnyAKUk0Q7plUoMGCZ2AQAkMF';


export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
          
        }
        return response.json();
      })
      .catch(error => {
        throw new Error('Failed breeds fetch');
      });
  }

  export function fetchCatByBreed(breedId) {  
    return fetch(`https://api.thecatapi.com/v1/images/search?bree1d_ids=${breedId}&api_key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {

            throw new Error(response.status);
        }
        return response.json();
      })
      .catch(error => {
        throw new Error('Failed cat API fetch');
      });
  }