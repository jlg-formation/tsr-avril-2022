import { FigureConfig } from "./interfaces/FigureConfig";

export class Api {
  async getConfig(): Promise<FigureConfig> {
    const response = await window.fetch("/api/multi-config");
    const json = await response.json();
    console.log("json: ", json);
    return json as FigureConfig;
  }
}
