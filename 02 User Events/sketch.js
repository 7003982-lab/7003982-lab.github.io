// User Events
// Adrian Chan
// September 11,2025

// GLOBAL VARIABLES
// can only work with "simple" data in this section of code
// no system variables are available until in setup(). after canvas is made
let circleColor = false;
//   declaration  initialization
let currentColor = "white";
let x; let y = 300;
let tSize = 50;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  x = width / 2
}

function draw() {
  background(220);
  challenge();    //coordinate system challenge
  movement();
  rect(x, y, 60, 30)
  mouseReport();
}

function mouseReport() {
  fill(0);
  let src = mouseX + ", " + mouseY + ", " + mouseIsPressed + ", " + mouseButton;
  textSize(tSize);
  text(src, mouseX, mouseY);
}

function mousePressed(){
  if (mouseIsPressed){
    tSize = random(10,80)
  }
}

function movement() {
  //check for keyboard pressed each frame and move rectangle accodingly
  if (keyIsDown(UP_ARROW)) y -= 5
  if (keyIsDown(DOWN_ARROW)) y += 5
  if (keyIsDown(LEFT_ARROW)) x -= 5
  if (keyIsDown(RIGHT_ARROW)) x += 5
}

function keyPressed() {
  //this is a special EVENT function, gets automatically called eanytime a keyboard button is pressed
  print("key was pressed");
  if (keyCode === LEFT_ARROW) {
    x = x - 10
  }
  if (key === "g") {
    currentColor = "green";
  }
  else if (keyCode === CONTROL) {
    currentColor = "aqua";
  }
  circleColor = !circleColor;

  //how to tell which key was pressed
}

function challenge() {
  //draw 5 hollow circles, in 4 corners amd the center
  noFill();

  if (circleColor) {  //circleColor ===
    fill(currentColor);
  }

  //5 circles
  circle(0, 0, 50);
  circle(0, height, 50);
  circle(width, 0, 50);
  circle(width, height, 50);
  circle(width / 2, height / 2, 50);
}