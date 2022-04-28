console.log("start");

const generateCircle = (x: number, y: number, r: number) => {
  const svgns = "http://www.w3.org/2000/svg";
  const container = document.querySelector("svg g.points");

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", y + "");
  circle.setAttributeNS(null, "r", r + "");
  container.appendChild(circle);
};

generateCircle(0, 0, 45);
