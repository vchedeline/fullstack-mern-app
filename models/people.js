const mongoose = require("mongoose");
require("../config/connection");

const peopleSchema = new mongoose.Schema({});

module.exports = mongoose.model("People", peopleSchema);
