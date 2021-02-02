import express from "express";
import data from "../data";
import bodyParser from "body-parser";

const postRouter = express.Router();
postRouter.use(bodyParser.json()); // to use body object in requests

postRouter.get("/", (req, res) => {
  res.send(data);
});

postRouter.get("/:id", (req, res) => {
  const post = data.find((post) => post.id === +req.params.id);

  if (!post) {
    res.sendStatus(404);
  }

  res.send(post);
});

postRouter.post("/", (req, res) => {
  try {
    const post = {
      id: data.length + 1,
      ...req.body,
    };

    data.push(post);

    res.send(post);
  } catch (error) {
    return res.status(500).send(error);
  }
});

postRouter.put("/:id", (req, res) => {
  let post = data.find((post) => (post.id = req.params.id));
  // post = req.body;
  res.end(JSON.stringify(post) + "is updated to" + JSON.stringify(req.body));
});

module.exports = postRouter;
