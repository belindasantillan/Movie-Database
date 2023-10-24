// API KEY 3846bb22
// Omdb API http://omdbapi.com/?i=tt3896198&apikey=3846bb22
// Send all data requests http://www.omdbapi.com/?apikey=3846bb22&
// Poster API requests http://img.omdbapi.com/?apikey=3846bb22&

function onSearch(event) {
    document.body.classList += ' home__loading'
    const keyword = event.target.value;
    localStorage.setItem("keyword", keyword);
    window.location.href = `${window.location.origin}/movies.html`;
}
