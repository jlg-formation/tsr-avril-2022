import { Router } from "express";
import { FigureConfig } from "./interfaces/FigureConfig";

const app = Router();

export default app;

app.get("/multi-config", (req, res) => {
  const config: FigureConfig = {
    multiplyFactor: 23,
    pointTotal: 56,
  };
  res.json(config);
});
