// Interactive Scene
// Adrian Chan
// 16 September, 2025

// GLOBAL VARIABLES
let moonSunColor;
let moonColorState = 0;
let currentBack = 0;

function setup() {
  createCanvas(1900, 950);
  moonSunColor = color(250, 250, 220)
  
}

function draw() {
  background(color(0,185,255));
  changeBackground();
  drawMoonSun();
  drawMountains();
  drawLake();
  printName();  
  //mouseReport();
  
}

function printName(){
  // Adding name on the bottom right
  fill(255,255,255);
  text("Adrian Chan", 1800, 925)
}

function keyPressed(){
  // Check if any keys are pressed
  if (key === " "){   // Changes moon color if space is pressed
    if (moonColorState === 0){
      moonColorState ++
      moonSunColor = color(255,150,0)
    }
    else if (moonColorState === 1){
      moonColorState = 0
      moonSunColor = color(255, 255, 220) 
    }
  }
}
       
function mousePressed(){
  // Check if any mouse buttons are pressed
  if (mouseButton === CENTER){
    if (currentBack < 3){
      currentBack ++
    }
    else{
      currentBack = 0
    }
  }
}


function mouseReport() {
  fill(0);
  let src = mouseX + ", " + mouseY;
  textSize(20);
  text(src, mouseX, mouseY);
}

function changeBackground(){
  // Set up for background color change
  switch(currentBack){
    case 0:
      background(color(0,185,255));
      break;
    case 1:
      background(color(240,105,0));
      break;
    case 2:
      background(color(0,30,70));
      break;
    case 3:
      background(color(250,250,180));
  }
}


function drawMountains(){
  // Draw mountains in the background
  noStroke();
  fill(15,150,50);
  triangle(0, 400, 500, 450, 200, 230);
  triangle(350, 350, 800, 400, 700, 150);
  triangle(700, 430, 1100, 450, 900, 230);
  triangle(1000, 470, 1550, 450, 1380, 210);
  triangle(1400, 400, width, 450, 1650, 230);
  triangle(1800, 400, width, 450, width, 350);
  rect(0, 400, 1050, 150);
  rect(1050, 450, width, 100);
  rect(1500, 400, 400, 150);
  rect(350, 350, 400, 100);
}

function drawLake(){
  // Draw the lake
  noStroke();
  fill(0,0, 112);
  rect(0, 500, width, height)
}

function drawMoonSun(){
  // Draw moon and allow it to follow the mouse
  // Moon changes to sun if space pressed
  noStroke();
  fill(moonSunColor);
  circle(mouseX, mouseY, width/15);
}