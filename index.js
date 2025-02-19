const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Predefined jokes array (fallback if API is unavailable)
const jokesArray = [
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "What’s orange and sounds like a parrot? A carrot!",
  "Why don’t eggs tell jokes? They’d crack up!",
  "I told my wife she should embrace her mistakes. She gave me a hug."
];

// Endpoint to get a random joke
app.get("/api/jokes/random", async (req, res) => {
  try {
  

    // Serve a random joke from the predefined array
    const randomJoke = jokesArray[Math.floor(Math.random() * jokesArray.length)];
    res.json({ joke: randomJoke });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch joke" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
