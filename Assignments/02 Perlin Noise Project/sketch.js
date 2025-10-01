// Perlin Noise Project
// Adrian Chan
// September 29, 2025

// GLOBAL VARIABLES
let rectWidth = 1;
let noiseTime = 0;
let noiseStart
let noiseOff = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseStart = noiseTime;

}

function draw() {
  background(220);
  generateTerrain();
  
}

function keyPressed(){
  // Check if any key is being pressed
  if (keyCode === 37){
    if (rectWidth > 1){
      rectWidth -= 1;
    }
    
  }
  if (keyCode === 39){
    if (rectWidth < 10){
      rectWidth += 1;
    }
    
  }
}

function generateTerrain(){
  // Use a loop to generate and draw several rectangles side to side to look like 2D terrain
  rectMode(CORNERS);
  highestPeak = 0
  peakX = 0;
  peakY = 0;

  for(let x=0; x< width; x+=rectWidth){
    // Generate random height
    // Change from random to noise
    rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, height*0.3, height*0.9);
    


    // Calculate the upper-right corner of rect
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    // Check for highest peak
    if (rectHeight > highestPeak){
          highestPeak = rectHeight;
          peakX = x2;
          peakY = y2;
        }

    // Draw the rectngle
    rect(x, height, x2, y2);

    // Change the noise() value
    noiseTime += noiseOff;
  }

  // Set noiseTime to 1 frame after
  noiseStart += noiseOff;
  noiseTime = noiseStart;

}

function drawFlag(x, y){

}
