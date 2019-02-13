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

router.get("/:id", async (req, res) => {
  try {
    const db = await DB.findById(req.params.id);
    if (db) {
      res.status(200).json(db);
    } else {
      res.status(404).json({ message: "Post not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the post."
    });
  }
});

router.post("/", async (req, res) => {
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

router.put("/:id", async (req, res) => {
  try {
    const db = await DB.update(req.params.id, req.body);
    if (db) {
      res.status(200).json(db);
    } else {
      res.status(404).json({ message: "The post could not be found." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating the post."
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const db = await DB.remove(req.params.id);
    if (db > 0) {
      res.status(200).json({ message: "The post has been deleted." });
    } else {
      res.status(404).json({ message: "The post could not be found." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting the post."
    });
  }
});

module.exports = router;
