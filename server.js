// Dependecies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT = 8008 } = process.env;
const app = express();
const People = require("./models/people");

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("I Am Home");
});

app.listen(PORT, () => console.log(`LIVE on Port ${PORT}!`));
