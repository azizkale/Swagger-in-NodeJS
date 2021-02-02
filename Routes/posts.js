import express from "express";
import data from "../data";

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  res.send(data);
});

module.exports = postRouter;
