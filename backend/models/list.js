const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("List", listSchema);
