// Block Pusher Starter
// Adrian Chan
// November 7, 2025

tiles = []; // 0-> grass  1->chicken  2->cow  3->star
let level = [
  [0, 1, 0, 3, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

let playerX = 3; let playerY = 4
let rows = level.length;
let colms = level[0].length;
let tileSize = 100;

function setup() {
  createCanvas(tileSize*colms, tileSize*rows);
  loadAssets();
  level[playerY][playerX] = 2;
}

async function loadAssets(){
  for(let i = 0; i< 4; i++){
    tiles.push(await loadImage("assets/"+i+".png"));
  }
}

function draw() {
  background(220);
  renderBoard();
}

function swap(x1, y1, x2, y2){
  // Modify the gameboard -- swutch two tiles
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed(){
  // Enact a single action per keypressed
  if (keyCode === LEFT_ARROW){
    if(playerX >0){ // Make sure not of left edge
      if(level[playerY][playerX-1]===0){  // Grass, so swap
        swap(playerX, playerY, playerX-1, playerY);
        playerX--;
      }
      else if(level[playerY][playerX-1]===1){ // Chicken
        // Check to see there is room for it to be pushed
        // Check to see if there is grass beyond the chicken
        if(playerX > 1 && level[playerY][playerX-2] === 0){
          // Swap grass and chicken
          swap(playerX-1, playerY, playerX-2, playerY);
          // Swap grass and cow
          swap(playerX, playerY, playerX-1, playerY);
          playerX--;
        }
        
      }
    }
    
  }
  if (keyCode === RIGHT_ARROW){
    if(playerX < colms-1){
      if(level[playerY][playerX+1]===0){  // Grass, so swap
        swap(playerX, playerY, playerX+1, playerY);
        playerX++;
      }
      else if(level[playerY][playerX+1]===1){ // Chicken
        // Check to see there is room for it to be pushed
        // Check to see if there is grass beyond the chicken
        if(playerX < colms-2  && level[playerY][playerX+2] === 0){
          // Swap grass and chicken
          swap(playerX+1, playerY, playerX+2, playerY);
          // Swap grass and cow
          swap(playerX, playerY, playerX+1, playerY);
          playerX++;
        }
        
      }
    }
    
  }
  if (keyCode === UP_ARROW){
    swap(playerX, playerY, playerX, playerY-1);
    playerY--;
  }
  if (keyCode === DOWN_ARROW){
    swap(playerX, playerY, playerX, playerY+1);
    playerY++;
  }
}

function renderBoard(){
  // Interpret the data in 2D array
  // Place images on the canvas
  for (let y = 0; y< rows; y++){
    for(let x = 0; x<colms; x++){
      let imageIndex = level[y][x];
      let currentImage = tiles[imageIndex];
      image(currentImage, x*tileSize, y*tileSize, tileSize, tileSize);
    }
  }
}