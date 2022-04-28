import { Point } from "./interfaces/Point";
import { getPointOnCircle } from "./utils";

console.log("start");

const generateNCircles = (n = 10) => {
  const r = 3;
  const bigCircleRadius = 90;
  for (let i = 0; i < n; i++) {
    const angle = (i * (2 * Math.PI)) / n;

    const x = bigCircleRadius * Math.cos(angle);
    const y = bigCircleRadius * Math.sin(angle);

    generateCircle(x, y, r);
  }
};

const generateCircle = (x: number, y: number, r: number) => {
  const svgns = "http://www.w3.org/2000/svg";
  const container = document.querySelector("svg g.points");
  if (container === null) {
    throw new Error("Cannot find svg g.points");
  }

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", y + "");
  circle.setAttributeNS(null, "r", r + "");
  container.appendChild(circle);
};

const generateLine = (p1: Point, p2: Point) => {
  const svgns = "http://www.w3.org/2000/svg";
  const container = document.querySelector("svg g.lines");
  if (container === null) {
    throw new Error("Cannot find svg g.lines");
  }

  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", p1.y + "");
  line.setAttributeNS(null, "x2", p2.x + "");
  line.setAttributeNS(null, "y2", p2.y + "");
  container.appendChild(line);
};

const generateNLines = (multiplicationFactor = 2, n = 10) => {
  const bigCircleRadius = 90;
  for (let i = 0; i < n; i++) {
    const j = multiplicationFactor * i;
    const angle1 = (i * (2 * Math.PI)) / n;
    const angle2 = (j * (2 * Math.PI)) / n;

    const p1 = getPointOnCircle(angle1, bigCircleRadius);
    const p2 = getPointOnCircle(angle2, bigCircleRadius);
    generateLine(p1, p2);
  }
};

const n = 200;

generateNLines(4, n);

generateNCircles(n);
