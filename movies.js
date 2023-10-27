// API KEY 3846bb22
// Omdb API http://omdbapi.com/?i=tt3896198&apikey=3846bb22
// Send all data requests http://www.omdbapi.com/?apikey=3846bb22&
// Poster API requests http://img.omdbapi.com/?apikey=3846bb22&


const moviesListEl = document.querySelector(".movies__list");
const keyword = localStorage.getItem("keyword");


async function onSearchMovies(event) {
    const keyword = event.target.value;
    renderMovies(keyword);
}


async function renderMovies(keyword) {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=3846bb22&s=${keyword}`);
    const moviesResponse = await movies.json();
    const moviesData = moviesResponse.Search;

    if (moviesData) {
        moviesListEl.innerHTML = moviesData.map((movie) => movieHtml(movie)).slice(0,6).join('');
    }
    else {
        moviesListEl.innerHTML = noResultsBanner();
    }

}


function movieHtml(movie) {
return `<div class="movie">
<figure class="movie__img--wrapper">
    <img src="${movie.Poster}" class="movie__img" alt="">
</figure>
<div class="movie__content--wrapper">
    <h3 class="movie__title">${movie.Title}</h3>
    <h6 class="movie__year">Year Released: ${movie.Year}</h6>
</div>
</div>`
}

function noResultsBanner() {
    return `<figure class="results__banner--wrapper">
    <img src="./assets/Results IMG.png" class="results__banner" alt="">
    </figure>`
}

renderMovies(keyword);

