// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT = 8008 } = process.env;
const app = express();
const People = require("./models/people"); // Model

// MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// ROUTES
// Home
app.get("/", (req, res) => {
  res.send("I Am Home");
});

//IDUCS (from INDUCES)
// Index
app.get("/people", async (req, res) => {
  try {
    res.json(await (await People.find({})).reverse());
  } catch (error) {
    res.status(400).json(error);
  }
});
// Delete
app.delete("/people/:id", async (req, res) => {
  try {
    res.json(await People.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});
// Update
app.put("/people/:id", async (req, res) => {
  try {
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, { new: true }),
    );
  } catch (error) {
    res.status(400).json(error);
  }
});
// Create
app.post("/people", async (req, res) => {
  try {
    res.json(await People.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});
// Show
app.get("/people/:id", async (req, res) => {
  try {
    res.json(await People.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(PORT, () => console.log(`LIVE on Port ${PORT}!`));
