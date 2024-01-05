import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "url";
//swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { Router } from "express";
const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Movies Api",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/movies.js")}`],
};

router.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

export default router;
