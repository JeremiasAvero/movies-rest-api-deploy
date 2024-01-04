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
        movieCard.innerHTML = `
        <img src=${movie.poster}>
        <h3 class="movie-title">${movie.title}</h3> 
        <p class="movie-year">${movie.year}</p> 
        <small class="movie-rate">${movie.rate} <i class="bi bi-star-fill"></i></small>`;
        movieCard.addEventListener("click", () => {
          window.location.href = `/movie?id=${movie._id}`;
        });

        movieContainer.appendChild(movieCard);
      });
    });
});
