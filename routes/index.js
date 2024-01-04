import { fileURLToPath } from "url";
import { dirname, join } from "path";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

const viewsPath = join(__dirname, "../public");

router.get("/", (req, res) => {
  res.sendFile(join(viewsPath, "index.html"));
});

router.get("/movie", (req, res) => {
  res.sendFile(join(viewsPath, "movie.html"));
});

export default router;
