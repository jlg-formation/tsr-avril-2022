import "./style.scss";

import { Command } from "./Command";
import { Figure } from "./Figure";
import { Api } from "./Api";
import { getContainer } from "./utils";

console.log("start");

const hideCommand = () => {
  getContainer("div.command").setAttribute("hidden", "hidden");
  getContainer("div.loading").removeAttribute("hidden");
};

const showCommand = () => {
  getContainer("div.command").removeAttribute("hidden");
  getContainer("div.loading").setAttribute("hidden", "hidden");
};

const main = async () => {
  const figure = new Figure();
  const api = new Api();

  hideCommand();
  const defaultConfig = await api.getConfig();
  showCommand();
  const command = new Command(defaultConfig);
  figure.draw(defaultConfig);

  command.onUpdate((config) => {
    figure.draw(config);
  });
};

main();
