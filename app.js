import express, { json } from "express";

import movieController from "./routes/index.js";
import bodyParser from "body-parser";
import { moviesRouter } from "./routes/movies.js";
import { corsMiddleware } from "./middlewares/cors.js";

const app = express();

app.use(json());
//middlewares
app.use(corsMiddleware());
app.disable("x-powered-by");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public", { extensions: ["html", "css", "scss"] }));

// Routes
app.use("/", movieController);
// Todos los recursos que sean MOVIES se identifica con /movies
app.use("/movies", moviesRouter);
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log("Server listening on port", `http://localhost:${PORT}`);
});
