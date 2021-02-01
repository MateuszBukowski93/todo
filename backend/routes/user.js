const express = require("express");
const router = express.Router();

const user = { login: "solwit", password: "solwIT20@)" };

router.post("/login", async (req, res) => {
  if (user.login !== req.body.login) {
    return res.status(400).send({ isCorrectLogin: false });
  }
  try {
    if (req.body.password === user.password) {
      const status = { isCorrectPassword: true, isCorrectLogin: true };
      res.send(status);
    } else {
      const status = { isCorrectPassword: false, isCorrectLogin: true };
      res.send(status);
    }
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
