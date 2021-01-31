require("dotenv").config();

const express = require("express");
var cors = require("cors");
var app = express();

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
app.use("/list", listRouter);

app.listen(4000, () => console.log("its alive!!!"));
