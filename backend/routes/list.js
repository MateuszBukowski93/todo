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

router.get("/", async (req, res) => {
  try {
    const list = await List.find();
    res.send(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const list = new List({
    name: req.body.name,
    tasks: req.body.tasks,
  });

  try {
    const newList = await list.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", getList, (req, res) => {
  res.json(res.list);
});

router.patch("/:id", getList, async (req, res) => {
  if (req.body.tasks != null) {
    res.list.tasks = req.body.tasks;
  }
  try {
    const updatedList = await res.list.save();
    res.send(updatedList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getList, async (req, res) => {
  try {
    await res.list.remove();
    res.json({ message: "Deleted List" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
