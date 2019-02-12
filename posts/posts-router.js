const express = require("express");

const DB = require("../data/db.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = await DB.find(req.query);
    res.status(200).json(db);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the posts."
    });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const db = await DB.insert(req.body);
    res.status(201).json(db);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding the post."
    });
  }
});

module.exports = router;
