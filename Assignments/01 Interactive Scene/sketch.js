// Interactive Scene
// Adrian Chan
// 16 September, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(1900, 950);
}

function draw() {
  background(220);
  
  drawMountains();
  drawMoon();
  mouseReport();
}

function mouseReport() {
  fill(0);
  let src = mouseX + ", " + mouseY;
  textSize(20);
  text(src, mouseX, mouseY);
}

function drawMountains(){
  // Draw mountains in the background
  noStroke();
  fill(0,255,0);
  triangle(0,400, 500, 450, 200, 230);
}

function drawMoon(){
  // Draw moon and allow it to follow the mouse
  noStroke();
  fill(247,247, 146)
  circle(mouseX, mouseY, width/15)
}