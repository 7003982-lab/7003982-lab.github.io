// 2D Array Basics
// Adrian Chan
// November 3, 2025

// GLOBAL VARIABLES
let grid =[
  [255, 255, 255, 255, 255],
  [255, 255, 0, 0, 0],
  [0, 255, 0, 255, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 255, 0, 0]
];
let rows = grid.length;
let colms = grid[0].length;
let squareSize = 60;


function setup() {
  createCanvas(colms*squareSize, rows*squareSize);
}

function draw() {
  background(220);
  renderGrid();
  //text(floor(mouseX/squareSize), mouseX, mouseY);
  print(getCurrentX(), getCurrentY());
}

function mousePressed(){
  // Flip current tile
  // Only do this if the mouse is on canvas
  if(mouseX<=width && mouseY<= height){
    let x = getCurrentX();
    let y = getCurrentY();
    flip(x, y);
    if (x+1 < colms){
      flip(x+1, y);
    }
    if (y-1 >= 0){
      flip(x, y-1);
    }
  }
  
}


function renderGrid(){
  // Interpret the information in the 2D array
  // Draw a grid of squares on the screen to reflect it
  for (let y = 0; y<rows; y++){
    for (let x = 0; x<colms; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
}

function flip(x, y){
  // Takes a tile at x,y and inverts its value
  if (grid[y][x] === 0){
    grid[y][x] = 255;
  }
  else{
    grid[y][x] = 0;
  }
}

function getCurrentX(){
  // Determine the current column of mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX/squareSize);
}

function getCurrentY(){
  // Determine the current row of mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY/squareSize);
}