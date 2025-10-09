// Clock (Transformation and Rotation)
// Adrian Chan
// October 9, 2025

// GLOBAL VARIABLES
let diameter = 500;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  clockFace();
  secondHand();
  minuteHand();
  hourHand();
}

function clockFace(){
  noFill();
  push();
  translate(width/2, height/2);
  strokeWeight(10)
  stroke(0);
  
  circle(0, 0, diameter);
  for (let i = 0; i<12; i++){
    strokeWeight(10);
    line (0, 175, 0, 225);
    rotate(6);
    for (let i=0; i<4; i++){
      strokeWeight(5);
      line (0, 200, 0, 225);
      rotate(6)
    }
  }
  pop();
}


function secondHand(){
  push()
  translate(width/2, height/2)
  strokeWeight(2);
  stroke(255, 0, 0);
  rotate(frameCount/10);
  line(0, 0, 0, -225);
  pop();
}

function minuteHand(){
  push()
  translate(width/2, height/2)
  strokeWeight(5);
  stroke(0);
  rotate(frameCount/600);
  line(0, 0, 0, -150);
  pop();
}

function hourHand(){
  push();
  translate(width/2, height/2)
  strokeWeight(10);
  stroke(0);
  rotate(frameCount/7200);
  line(0, 0, 0, -100);
  pop();
}