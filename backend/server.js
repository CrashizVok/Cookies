const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

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
