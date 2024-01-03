import { randomUUID } from "node:crypto";
import { readJson } from "../../utils.js";
const movies = readJson("./movies.json");

export class MovieModel {
  //obtener todas las peliculas
  static async getAll({ genre }) {
    //en caso de que especifique genre
    if (genre) {
      return movies.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      );
    }

    return movies;
  }
  //obtener movie por id

  static async getById({ id }) {
    const movie = movies.find((movie) => movie.id === id);
    return movie;
  }

  //creaer movie
  static async create(input) {
    const newMovie = {
      id: randomUUID(),
      ...input,
    };
    movies.push(newMovie);
    return newMovie;
  }

  static async delete({ id }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);
    if (movieIndex === -1) return false;
    movies.splice(movieIndex, 1);
    return true;
  }

  static async update({ id, input }) {
    const movieIndex = movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) return false;

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...input,
    };
    return movies[movieIndex];
  }
}
