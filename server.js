const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

app.post("/speichern", (req, res) => {
  const name = req.body.name;
  const score = req.body.score;

  const text = name + ": " + score + "\n";

  fs.appendFileSync("ergebnisse.txt", text);

  console.log("Gespeichert:", text);

  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server läuft!");
});