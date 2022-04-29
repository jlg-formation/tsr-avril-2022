import express from "express";

console.log("about to start the server");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ date: new Date() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
