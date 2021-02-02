import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import postRouter from "../Routes/posts";

const PORT = process.env.PORT || 4001;
dotenv.config();

const app = express();
app.use(morgan());
app.use(cors());

app.use("/posts", postRouter);

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));
