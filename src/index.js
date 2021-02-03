import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import postRouter from "../Routes/posts";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 4001;
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:4001",
      },
    ],
  },
  apis: ["./Routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use("/posts", postRouter);

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));
