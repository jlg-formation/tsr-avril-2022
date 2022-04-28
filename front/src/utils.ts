import { Point } from "./interfaces/Point";

export const getPointOnCircle = (angle: number, radius: number): Point => {
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
};
