import express from "express";
import serveIndex from "serve-index";
// import cors from "cors";

import apiRouter from "./api";

console.log("about to start the server");
const app = express();
const port = +(process.env.PORT || 3000);
const wwwDir = "../front/dist";

app.use((req, res, next) => {
  console.log("req: ", req.url);
  setTimeout(next, 10);
});

// app.use(cors());

app.use("/api", apiRouter);

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
