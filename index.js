// const express = require(express); // used in common js

import express from "express"; // used in module

import "dotenv/config";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.get("/twitter", (req, res) => {
  res.send("Hello HIi");
});

app.listen(port, () => {
  console.log(`Exmaple app listening on Port ${port}`);
});
