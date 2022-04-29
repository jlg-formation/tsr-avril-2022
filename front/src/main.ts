import "./style.scss";

import { Command } from "./Command";
import { Figure } from "./Figure";
import { Api } from "./Api";

console.log("start");

const main = async () => {
  const figure = new Figure();
  const api = new Api();
  const defaultConfig = await api.getConfig();
  figure.draw(defaultConfig);

  const command = new Command(defaultConfig);
  command.onUpdate((config) => {
    figure.draw(config);
  });
};

main();
