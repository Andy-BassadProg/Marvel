const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

const marvelFile = path.join(__dirname, "data", "marvel.json");


app.get("/api/heroes", (req, res) => {
  fs.readFile(marvelFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Erreur lecture JSON" });
    const heroes = JSON.parse(data);
    res.json(heroes);
  });
});


app.get("/api/heroes/:id", (req, res) => {
  fs.readFile(marvelFile, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Erreur lecture JSON" });
    const heroes = JSON.parse(data);
    const hero = heroes.find(h => h.id === parseInt(req.params.id));
    if (!hero) return res.status(404).json({ error: "Héros introuvable" });
    res.json(hero);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));