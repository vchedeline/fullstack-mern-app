// Dependecies
require("dotenv").config();
require("./config/connection");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 8008;
const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("I Am Home");
});

app.listen(PORT, () => console.log(`LIVE on Port ${PORT}!`));
