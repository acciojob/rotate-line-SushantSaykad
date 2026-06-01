//your JS code here. If required.
// Create the line element
const line = document.createElement("div");
line.id = "line";
document.body.appendChild(line);

// Apply required styles
line.style.position = "absolute";
line.style.width = "200px";
line.style.height = "2px";
line.style.backgroundColor = "#000000";
line.style.top = "50%";
line.style.left = "50%";
line.style.transformOrigin = "center center";

// Rotation
let angle = 0;

setInterval(() => {
    angle += 2;
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);