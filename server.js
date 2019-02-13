const express = require("express");
const postsRouter = require("./posts/posts-router.js");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/posts", postsRouter);

server.get("/", async (req, res) => {
  res.send(`
    <h2>You're getting a response!!!</h2>
  `);
});

module.exports = server;
