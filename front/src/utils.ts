import { Point } from "./interfaces/Point";

export const getPointOnCircle = (angle: number, radius: number): Point => {
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
};

export const getContainer = (cssSelector: string) => {
  const container = document.querySelector(cssSelector);
  if (container === null) {
    throw new Error(`Cannot find container with cssSelector = ${cssSelector}`);
  }
  return container;
};

export const getInputElt = (cssSelector: string): HTMLInputElement => {
  const container = getContainer(cssSelector);
  if (!(container instanceof HTMLInputElement)) {
    throw new Error("bug in HTML");
  }
  return container;
};

export const svgns = "http://www.w3.org/2000/svg";

export const getAngle = (index: number, total: number): number => {
  return (index * (2 * Math.PI)) / total;
};
