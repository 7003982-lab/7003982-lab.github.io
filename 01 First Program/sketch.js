// Coordinate Systems and User Events
// Adrian Chan
// September 10,2025
// A first look at interactive programs with p5.js


function setup() {    //runs once at the start
  createCanvas(400, 400);
  print(windowWidth, windowHeight, width, height)
  //windowWidth is current browser width 
  //width is the canvas width
}

function draw() {     //runs over and over targeting 60 frames per second
  //STRIVE to keep draw() clean and tidy
  background(220);    //draws a big solid rectangle
  drawTwoCircles();   //calls fuction
}

function drawTwoCircles() {  //[ALT] [SHIFT] [F] -> Autoformat
  //draws two circle, 
  //one at a fixed location
  //one at the mouse location  
  fill(255,0,255)
  circle(width/2,height/2,100)

  fill(0, 255, 0); //0:black   255:white
  //R     G   B
  circle(mouseX, mouseY, 30);

}


