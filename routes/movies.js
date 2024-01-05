import { Router } from "express";
import { MovieController } from "../controllers/movies.js";
export const moviesRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Movie:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          description: the movie title
 *        year:
 *          type: integer
 *          description: the year the movie was released
 *        director:
 *          type: string
 *          description: the movie director
 *        duration:
 *          type: integer
 *          description: the movie duration
 *        poster:
 *          type: string
 *          description: the image Url of the movie
 *        genre:
 *          type: array
 *          description: the movie genres
 *        rate:
 *          type: number
 *          description: the movie rate
 *      required:
 *         - title
 *         - year
 *         - director
 *         - duration
 *         - poster
 *         - genre
 *         - rate
 *      example:
 *         title: The Dark Knight
 *         year: 2008
 *         director: Christopher Nolan
 *         duration: 152
 *         poster: https://i.ebayimg.com/images/g/yokAAOSw8w1YARbm/s-l1200.jpg
 *         genre: ["Action", "Crime", "Drama"]
 *         rate: 9.0
 */
moviesRouter.get("/", MovieController.getAll);
/**
 * @swagger
 * /api/movies:
 *  get:
 *    summary: returns all movies
 *    tags: [Movie]
 *    responses:
 *       200:
 *          description: returns all movies
 *          content:
 *            application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: '#/components/schemas/Movie'
 */
moviesRouter.post("/", MovieController.create);
/**
 * @swagger
 * /api/movies:
 *  post:
 *    summary: create new movie
 *    tags: [Movie]
 *    requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                  type: Movie
 *                  $ref: '#/components/schemas/Movie'
 *    responses:
 *       200:
 *          description: new movie created
 */

moviesRouter.get("/:id", MovieController.getById);
/**
 * @swagger
 * /api/movies/{id}:
 *  get:
 *    summary: returns a movie
 *    tags: [Movie]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the movie id
 *    responses:
 *       200:
 *          description: returns a movie
 *          content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Movie'
 *       404:
 *          description:  movie not found
 */

moviesRouter.delete("/:id", MovieController.delete);
/**
 * @swagger
 * /api/movies/{id}:
 *  delete:
 *    summary: delete a movie
 *    tags: [Movie]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the movie id
 *    responses:
 *       200:
 *          description: movie deleted
 *          content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Movie'
 *       404:
 *          description:  movie not found
 */
moviesRouter.patch("/:id", MovieController.update);
/**
 * @swagger
 * /api/movies/{id}:
 *  patch:
 *    summary: update a movie
 *    tags: [Movie]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the movie id
 *    requestBody:
 *       required: true
 *       content:
 *          application/json:
 *              schema:
 *                  type: Movie
 *                  $ref: '#/components/schemas/Movie'
 *    responses:
 *       200:
 *          description: movie updated
 *          content:
 *            application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Movie'
 *       404:
 *          description:  Movie not found
 *
 */
