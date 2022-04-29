import "./style.scss";

import { Command } from "./Command";
import { Figure } from "./Figure";

console.log("start");

const main = () => {
  const figure = new Figure();
  const defaultConfig = { pointTotal: 10, multiplyFactor: 2 };
  figure.draw(defaultConfig);

  const command = new Command(defaultConfig);
  command.onUpdate((config) => {
    figure.draw(config);
  });
};

main();
