const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const quotes = [
  { author: "Albert Einsteinnn", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
  { author: "Steve Jobss", quote: "Stay hungry, stay foolish." },
  { author: "Nelson Mandelaa", quote: "It always seems impossible until it’s done." },
  { author: "Muhammad Alii", quote: "Don’t count the days, make the days count." },
  { author: "Abraham Lincolnn", quote: "Whatever you are, be a good one." },
  { author: "Mark Zuckerbergg", quote: "The biggest risk is not taking any risk." },
  { author: "Bill Gates", quote: "Success is a lousy teacher." },
  { author: "Elon Muskk", quote: "When something is important enough, you do it even if the odds are not in your favor." },
  { author: "Imran Khann", quote: "Never give up, no matter how hard life gets." },
  { author: "Bruce Leee", quote: "Knowing is not enough, we must apply." }
];

app.get("/api/quote", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
