require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const listRouter = require("./routes/list");
const userRouter = require("./routes/user");

app.use("/list", listRouter);
app.use("/user", userRouter);

app.listen(4000);
