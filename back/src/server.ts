import express from "express";
import serveIndex from "serve-index";

console.log("about to start the server");
const app = express();
const port = +process.env.PORT || 3000;
const wwwDir = "../front/dist";

app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
