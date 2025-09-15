// Multiple Keys and Oulines
// Adrian Chan
// September 15, 2025

// keyIsDown (keycode) -> return boolean

// Glabal Variables
let headSize = 100


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //checkMulti();
  drawBody();
  drawFace();
}

function checkMulti() {
  strokeWeight(mouseX/10);
  stroke(255, 100, 20);
  // check for multiple keypresses (3 simultanously)
  let a = keyIsDown(65); // 65 = a
  let b = keyIsDown(66);
  let c = keyIsDown(67);
  textSize(40);
  text("a:" + a + "\tb:" + b + "\tc:" + c, 100, 300);
}

function drawBody() {
  noStroke();
  fill(144,238,144)
  circle(width/2,height/2,headSize)
  rect((width-headSize)/2, height/2, headSize, headSize/2)
  rect((width-headSize)/2, height/2+headSize/2, 20, headSize/2)
  rect((width+headSize)/2-20, height/2+headSize/2, 20, headSize/2)
}

function drawFace(){
  noStroke()
  fill(0,0,0)
  circle((width-headSize/2)/2, height/2, 10);
  circle((width+headSize/2)/2, height/2, 10);
  rect((width-headSize/2+10)/2, height/2+headSize/2/2, headSize/2-10, headSize/50)
}