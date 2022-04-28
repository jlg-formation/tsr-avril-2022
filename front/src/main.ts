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

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", y + "");
  circle.setAttributeNS(null, "r", r + "");
  container.appendChild(circle);
};

generateNCircles();
