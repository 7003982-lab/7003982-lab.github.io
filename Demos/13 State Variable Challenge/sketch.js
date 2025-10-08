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
  if (directionState<=3){
    directionState ++
  }
  else if(directionState > 3){
    directionState = 0;
  }
}

function drawSquare(){
  // Draw Square
  fill(150);
  square(x, y, squareSize);

  // Movement
  switch(directionState){
    case 0:
      for (x = 0; x<=width-squareSize; x++){
        square(x, y, squareSize);
      }
    case 1:
      for (y = 0; y<=height-squareSize; y++){
        square(x, y, squareSize);
      }
    case 2:
      for (x = width-squareSize; x>=0; x--){
        square(x, y, squareSize);
      }
    case 3:
      for (y = height-squareSize; y>=0; y--){
        square(x, y, squareSize);
      }
  }

}
