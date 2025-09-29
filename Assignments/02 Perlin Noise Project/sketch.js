// Perlin Noise Project
// Adrian Chan
// September 29, 2025

// GLOBAL VARIABLES
let rectWidth = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();

}

function draw() {
  //background(220);
}

function generateTerrain(){
  // Use a loop to generate and draw several rectangles side to side to look like 2D terrain
  rectMode(CORNERS);

  for(let x=0; x< width; x+rectWidth){
    // Generate random height
    // Change from random to noise
    let rectHeight = random(height*0.2, height*0.8);

    // Calculate the upper-right corner of rect
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);
  }







  rectMode(CORNER);


}
