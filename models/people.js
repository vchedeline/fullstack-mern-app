const mongoose = require("mongoose");
require("../config/connection");

const PeopleSchema = new mongoose.Schema({
  name: String,
  image: String,
  title: String,
});

module.exports = mongoose.model("People", PeopleSchema);
