document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  // Fetch movies and display them
  const movieContainer = document.getElementById("movies-container");
  const header = document.getElementById("header");
  fetch("/movies")
    .then((response) => response.json())
    .then((movies) => {
      movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `<img src=${movie.poster}><h3 class="movie-title">${movie.title}</h3> <p class="movie-year">${movie.year} -</p> <small class="movie-rate">${movie.rate}</small>`;
        movieCard.addEventListener("click", () => {
          window.location.href = `/movie?id=${movie._id}`;
        });

        movieContainer.appendChild(movieCard);
      });

      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];

      const headerMain = document.createElement("div");
      headerMain.className = "img-container";
      headerMain.innerHTML = `<img src=${randomMovie.poster}> <div class="header-text"> <h1>${randomMovie.title}</h1> <h3> Last Release</h3> </div>`;
      header.appendChild(headerMain);
    });
});
