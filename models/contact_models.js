const mongoose = require("mongoose");

const Contact = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  age: Number,
  pic: String,
});

module.exports = mongoose.model("contact", Contact);
