import { FigureConfig } from "./interfaces/FigureConfig";
import { getContainer, getInputElt } from "./utils";

type CommandCallback = (config: FigureConfig) => void;

export class Command {
  callback = (config: FigureConfig) => {};

  constructor(private config: FigureConfig) {
    getContainer("label.pointTotal span").innerHTML =
      this.config.pointTotal + "";
    getInputElt("label.pointTotal input").value = this.config.pointTotal + "";

    getContainer("label.multiplyFactor span").innerHTML =
      this.config.multiplyFactor + "";
    getInputElt("label.multiplyFactor input").value =
      this.config.multiplyFactor + "";

    getContainer("label.pointTotal input").addEventListener("input", (e) => {
      if (!(e.target instanceof HTMLInputElement)) {
        return;
      }
      this.config.pointTotal = +e.target.value;
      getContainer("label.pointTotal span").innerHTML =
        this.config.pointTotal + "";
      this.callback(this.config);
    });

    getContainer("label.multiplyFactor input").addEventListener(
      "input",
      (e) => {
        if (!(e.target instanceof HTMLInputElement)) {
          return;
        }
        this.config.multiplyFactor = +e.target.value;
        getContainer("label.multiplyFactor span").innerHTML =
          this.config.multiplyFactor + "";
        this.callback(this.config);
      }
    );
  }

  onUpdate(callback: CommandCallback) {
    this.callback = callback;
  }
}
