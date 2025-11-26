// Adrian Chan
// Adrian Chan
// November 26, 2025

// Global Variables
let angle;
let lenStart = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  angle = map(mouseX, 0, width, 0, 180);
  translate(width/2, height);
  branch(lenStart, 15);
}

function branch(len, g){
  let t = map(len, 2, lenStart, 1, 10)
  strokeWeight(t);
  stroke(100, g, 15);
  line(0, 0, 0, -len)
  translate(0, -len);

  // Recursive case
  if(len>10){
  push();
    rotate(angle);
    branch(len*0.66, g+10);
  pop();

  push();
    rotate(-angle);
    branch(len*0.66, g+10);
  pop();
  }
  else{
    fill(100, g, 15)
    circle(0,0, 20)
  }
}