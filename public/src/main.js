import store from './stores/appStore';

const API_KEY = '16442dd8e0e780eaccac0dc888797d66';

document.getElementById('movieSearchBtn').addEventListener('click', (event) => {
    event.preventDefault();
    const searchTerm = document.getElementById('search').value;
    fetch("https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&include_adult=false&query=" + searchTerm)
    .then(res => res.json())
    .then(results => {
        //console.log(results);
        store.dispatch({
          type: 'SEARCH_COMPLETE',
          results
        });
    });
});