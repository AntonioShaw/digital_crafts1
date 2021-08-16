function showMovieDetails(btn) {
  const movieID = btn.getAttribute("data-movieId");
  // https://www.omdbapi.com/?s=x-men&apikey=9bc1b52
  const selectedMovieUrl = "https://www.omdbapi.com/?s=x-men&apikey=9bc1b52";

  console.log(selectedMovieUrl)
}

request.addEventListener("load", function() {
    console.log(this.responseText)
    const movies = JSON.parse(this.responseURL)
})

const movies = [];
movies.map(function (movie) {
  const movieItem = `<li>
        <b>${movie.Title}</b>
        <button data-movieId = '${movie.imdbId}' onClick = "showMovieDetails(this)">Show Details</button>
    </li>`
    return movieItem
})
moviesUL.innerHTML = movieItems.join("")

request.open("GET", "https://www.omdbapi.com/?s=x-men&apikey=9bc1b52");
request.send()
