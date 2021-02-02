import express from "express";
import data from "../data";

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  const myData = JSON.parse(data);
  res.send(myData);
});

module.exports = postRouter;
