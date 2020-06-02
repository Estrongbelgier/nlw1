import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Olá Mundo!");
});

app.listen(3333);
