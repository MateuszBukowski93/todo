const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

//get all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.send(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//save one
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChanel: req.body.subscribedToChanel,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// get one
router.get("/:id", getSubscriber, (req, res) => {
  res.send(res.subscriber);
});
//update one
router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subscribedToChanel != null) {
    res.subscriber.subscribedToChanel = req.body.subscribedToChanel;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json({ message: "Subscriber updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//delete one
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: "Deleted Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.subscriber = subscriber;
  next();
}
module.exports = router;
