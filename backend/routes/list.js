const express = require("express");
const router = express.Router();
const List = require("../models/List");

async function getList(req, res, next) {
  let list;
  try {
    list = await List.findById(req.params.id);
    if (list == null) {
      return res.status(404).json({ message: "Cannot find Item" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.list = list;
  next();
}

// get all
router.get("/", async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    const list = await List.find();
    res.send(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// save one
router.post("/", async (req, res) => {
  const list = new List({
    name: req.body.name,
    tasks: req.body.tasks,
  });

  try {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    const newList = await list.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update tasks

router.patch("/:id", getList, async (req, res) => {
  if (req.body.tasks != null) {
    res.list.tasks = req.body.tasks;
  }
  if (req.body.name != null) {
    res.list.name = req.body.name;
  }
  try {
    const updatedList = await res.list.save();
    res.json(updatedList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete one;

router.delete("/:id", getList, async (req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    await res.list.remove();
    res.json({ message: "Deleted List" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
