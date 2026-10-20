const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

var cs = new Map();

app.get("/cookies", (req, res) => {
  const list = [];
  cs.forEach((name, obj) => {
    const { value, expires } = obj;
    list.push({ name, value, expires });
  });

  return res.status(200).json(list);
});

app.post("/cookie", (req, res) => {
  const { name, value, milliseconds } = req.body;
  const expires = new Date();
  expires.setTime(expires.getTime() + milliseconds);
  const cookie = { name, value, expires };
  cs.set(name, { value, expires });

  return res.status(201).json(cookie);
});

app.use((req, res) => {
  return res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log("Backend running on port: ", PORT);
});
