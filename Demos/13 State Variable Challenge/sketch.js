// State variable Challenge
// Adrian Chan
// October 6, 2025

// GLOBAL VARIABLE
let x = 0;
let y = 0;
let squareSize = 25
let directionState = 0;   // 0-Right  1-Down  2-Left  3-Up

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  drawSquare();
}

function drawSquare(){
  fill(150)
  square(x, y, squareSize);
}
