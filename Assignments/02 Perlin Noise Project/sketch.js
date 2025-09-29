// Perlin Noise Project
// Adrian Chan
// September 29, 2025

// GLOBAL VARIABLES
let rectWidth = 1;
let noiseTime = 0;
let noiseOff = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();

}

function draw() {
  //background(220);
  fill(0);
  text(rectWidth, 100, 100);
}

function keyPressed(){
  // Check if any key is being pressed
  if (keyCode === LEFT_ARROW){
    rectWidth -= 1;
  }
  if (keyCode === RIGHT_ARROW){
    rectWidth += 1;
  }
}

function generateTerrain(){
  // Use a loop to generate and draw several rectangles side to side to look like 2D terrain
  rectMode(CORNERS);

  for(let x=0; x< width; x+=rectWidth){
    // Generate random height
    // Change from random to noise
    rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, height*0.3, height*0.9);


    // Calculate the upper-right corner of rect
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    // Draw the rectngle
    rect(x, height, x2, y2);

    // Change the noise() value
    noiseTime += noiseOff;
  }






  rectMode(CORNER);


}
