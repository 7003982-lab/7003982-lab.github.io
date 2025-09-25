// Working with Images
// Adrian Chan
// 25 September, 2025

// GLOBAL VARIABLES
let lionL; let lionR;
let facingRight = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  imageMode(CENTER);
  noCursor();
}

async function loadAssets(){
  // Handle loading all the images
  lionL = await loadImage("assets/lion-left.png");
  lionR = await loadImage("assets/lion-right.png");
}

function draw() {
  background(220);
  // Update direction
  if (pmouseX < mouseX){    // pmouseX = x position of mouse 1 frame ago
    facingRight = true;
  }
  else if (pmouseX > mouseX){
    facingRight = false;
  }
  // Update drawing
  if (facingRight){
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
  else{
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  
}


