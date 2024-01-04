document.addEventListener("DOMContentLoaded", () => {
  const movieDetailsContainer = document.getElementById("movie-container");
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");
  console.log(movieId);

  if (movieId) {
    fetch(`/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        const movie = data.movie;
        const movieDetails = document.createElement("div");
        movieDetails.innerHTML = `<h2>${movie.title}</h2><p>${movie.year}</p>`;
        movieDetailsContainer.appendChild(movieDetails);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  } else {
    console.error("No movie ID found in the URL");
  }
});
