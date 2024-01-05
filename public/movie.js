document.addEventListener("DOMContentLoaded", () => {
  const movieDetailsContainer = document.getElementById("movie-container");
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");
  console.log(movieId);

  if (movieId) {
    fetch(`/api/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        const movie = data.movie;
        const movieDetails = document.createElement("div");
        movieDetails.className = "movie-container";
        movieDetails.innerHTML = `
        <img src=${movie.poster}> 
        <div class="movie-text">
          <div class="movie-title"> 
            <h1>${movie.title}</h1>
          </div> 
          <div class="movie-details"> 
          <ul>
            <li>Director: <p>${movie.director}</p></li>
            <li>Rate: <p>${movie.rate}</p> <i class="bi bi-star-fill"></i></li>
            <li>Release: <p>${movie.year}</p></li>
            <li>Genres: <p>${movie.genre}</p> </li>
            <li>Duration: <p>${movie.duration}</p></li>
          </ul>
            </div>
          <div class="buttons"> 
          <button><i class="bi bi-skip-start-fill"></i> Watch now</button>
          
          </div>
            </div>`;

        movieDetailsContainer.style.background = `url(${movie.poster})`;
        movieDetailsContainer.style.backgroundRepeat = "no-repeat";
        movieDetailsContainer.style.backgroundSize = "cover";
        movieDetailsContainer.appendChild(movieDetails);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  } else {
    console.error("No movie ID found in the URL");
  }
});
