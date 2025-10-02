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
  stroke(0);
}

function draw() {
  //frameRate(0.1);
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
  stroke(0);
  noFill();
  rectMode(CORNERS);
  highestPeak = 0
  peakX = 0;
  peakY = 0;
  sumY = 0;
  averageY = 0;

  for(let x=0; x< width; x+=rectWidth){
    // Generate random height
    // Change from random to noise
    rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, height*0.1, height*0.9);
    
    // Calculate the upper-right corner of rect
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    // Check for highest peak
    if (rectHeight > highestPeak){
      highestPeak = rectHeight;
      peakX = x2 + rectWidth/2 - 0.5;
      peakY = y2;
    }

    // Calculate the average height of each peak in frame
    sumY += rectHeight
    averageY = sumY/x

    // Draw the rectngle
    rect(x, height, x2, y2);

    // Change the noise() value
    noiseTime += noiseOff;
  }

  // Call the function to draw the average line
  drawAverage(averageY)

  // Call the function to draw flag on the peak
  drawFlag(peakX, peakY);

  // Set noiseTime to 1 frame after
  noiseStart += noiseOff;
  noiseTime = noiseStart;

}

function drawFlag(x, y){
  // Create the flag on the peak
  rectMode(CORNER);
  stroke(0);
  fill(0);
  rect(x, y, 1, height*-0.05);
  noStroke();
  fill(255, 0, 0)
  triangle(x+1.5, y+height*-0.05, x+1.5, y+height*-0.03, x+width*0.03, y+height*-0.04);
}

function drawAverage(y){
  // Create a line at the average height of all peaks
  rectMode(CENTER);
  noStroke();
  fill(255, 0, 0, 75);
  rect(width/2, height-y, width, height*0.01)
}