// Puzzle game
// Adrian Chan
// November 4, 2025

// GLOBAL VARIABLES
let grid = [
  [255, 255, 255, 255, 255],
  [0, 0, 0, 0, 0],
  [255, 255, 255, 255, 255],
  [0, 0, 0, 0, 0]
]
let rows = grid.length;
let colms = grid[0].length;
let rectWidth;
let rectHeight;
let patternState = 0; // 0-> cross  1->rectangle

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(width/10);
  rectWidth = width/colms;
  rectHeight = height/rows;
  randomColor();
}

function draw() {
  //background(220);
  drawGrid();
  win();
  overlay();
}

function mousePressed(){
  // Flip current tile
  // Only do this if the mouse is on canvas

  if(mouseX<=width && mouseY<= height){
    let x = getCurrentX();
    let y = getCurrentY();
    if (keyIsDown(SHIFT)){
      flip(x, y); 
    }
    else{
      arrangement();
    }
  }
}

function keyPressed(){
  if(key === " "){
    if (patternState === 0){
      patternState ++;
    }
    else if (patternState === 1){
      patternState = 0;
    }
  }
}

function randomColor(){
  // Randomize the rectangle color
  for (let y = 0; y<rows; y++){
    for (let x = 0; x<colms; x++){
      grid[y][x] = floor(random(2))*255;
    }
  }
}


function drawGrid(){
  // Draw a grid of rectangles that reflect the values of the array
  for (let y = 0; y<rows; y++){
    for (let x = 0; x<colms; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
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
  return floor(constrainedX/rectWidth);
}

function getCurrentY(){
  // Determine the current row of mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY/rectHeight);
}

function win(){
  // Check if the player win the game or not
  // All black or all white -> win
  let gridColor = grid[0][0]
  for (let y = 0; y<rows; y++){
    for (let x = 0; x<colms; x++){
      let fillColor = grid[y][x];
      if (gridColor !== fillColor){
        return;
      }
    }
  }
  if (gridColor === 0){
    fill(255);
  }
  else{
    fill(0);
  }
  text("YOU WIN!", width/2, height/2)
}

function overlay(){
  // Create colored overlay to indicate affected rectangles
  if(mouseX<=width && mouseY<= height){
    let x = getCurrentX();
    let y = getCurrentY();
    fill(0, 255, 0, 50);
    if (keyIsDown(SHIFT)){
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
    else if(patternState === 0){
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);

      if (x+1 < colms){ // Overlay tile on right
        rect((x+1)*rectWidth, y*rectHeight, rectWidth, rectHeight);
      }
      if (x-1 >= 0){  // Overlay tile on left
        rect((x-1)*rectWidth, y*rectHeight, rectWidth, rectHeight);
      }

      if (y-1 >= 0){  // Overlay tile on top
        rect(x*rectWidth, (y-1)*rectHeight, rectWidth, rectHeight);
      }
      if (y+1 < rows){  // Overlay tile on bottom
        rect(x*rectWidth, (y+1)*rectHeight, rectWidth, rectHeight);
      }
    }
    else if(patternState === 1){
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);

      if (x+1 < colms){ // Overlay tile on right
        rect((x+1)*rectWidth, y*rectHeight, rectWidth, rectHeight);
      }

      if (y+1 < rows){  // Overlay tile on bottom
        rect(x*rectWidth, (y+1)*rectHeight, rectWidth, rectHeight);
      }

      if (x+1 < colms && y+1 < rows){  // Overlay tile on bottom right
        rect((x+1)*rectWidth, (y+1)*rectHeight, rectWidth, rectHeight);
      }
    }
  }
}

function arrangement(){
  // Changes the flipping pattern 
  let x = getCurrentX();
  let y = getCurrentY();
  switch(patternState){
    case 0:
      flip(x, y); 

      if (x+1 < colms){ // Flip tile on right
        flip(x+1, y);
      }
      if (x-1 >= 0){  // Flip tile on left
        flip(x-1, y);
      }

      if (y-1 >= 0){  // Flip tile on top
        flip(x, y-1);
      }
      if (y+1 < rows){  // Flip tile on bottom
        flip(x, y+1);
      }
      break;
    case 1:
      flip(x, y); 

      if (x+1 < colms){ // Flip tile on right
        flip(x+1, y);
      }

      if (y+1 < rows){  // Flip tile on bottom
        flip(x, y+1);
      }

      if (x+1 < colms && y+1 < rows){ // Flip tile on bottom right
        flip(x+1, y+1);
      }
  }
}