import express from "express";

import cors from "cors"; // Import cors

const app = express();

app.use(cors()); // Enable CORS

app.get("/", (req, res) => {
  res.send("Helloo there ");
});

app.get("/api/jokes", (req, res) => {
  res.json([
    {
      id: 1,
      text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    { id: 2, text: "What do you call cheese that isn't yours? Nacho cheese!" },
  ]);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
