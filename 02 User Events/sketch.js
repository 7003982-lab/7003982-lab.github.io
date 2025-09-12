// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// GLOBAL VARIABLES
let circleColor = false;
//   declaration  initialization


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  challenge();    //coordinate system challenge
}

function keyPressed(){
  //this is a special EVENT function, gets automatically called eanytime a keyboard button is pressed
  print("key was pressed")
  circleColor = !circleColor 

  //how to tell which key was pressed
}

function challenge(){
  //draw 5 hollow circles, in 4 corners amd the center
  noFill();

  if(circleColor){  //circleColor ===
    fill(255,0,0)
  }

  //5 circles
  circle(0,0,50)
  circle(0,height,50);
  circle(width,0,50);
  circle(width,height,50);
  circle(width/2,height/2,50)
}