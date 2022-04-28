import { Point } from "./interfaces/Point";
import { getAngle, getContainer, getPointOnCircle, svgns } from "./utils";

console.log("start");

const generateNCircles = (n = 10) => {
  const r = 3;
  const bigCircleRadius = 90;
  for (let i = 0; i < n; i++) {
    const angle = getAngle(i, n);
    const p = getPointOnCircle(angle, bigCircleRadius);

    generateCircle(p, r);
  }
};

const generateCircle = (p: Point, r: number) => {
  const container = getContainer("svg g.points");

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", p.x + "");
  circle.setAttributeNS(null, "cy", p.y + "");
  circle.setAttributeNS(null, "r", r + "");
  container.appendChild(circle);
};

const generateLine = (p1: Point, p2: Point) => {
  const container = getContainer("svg g.lines");

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
    const angle1 = getAngle(i, n);
    const angle2 = getAngle(multiplicationFactor * i, n);

    const p1 = getPointOnCircle(angle1, bigCircleRadius);
    const p2 = getPointOnCircle(angle2, bigCircleRadius);
    generateLine(p1, p2);
  }
};

const n = 200;

generateNLines(4, n);

generateNCircles(n);
