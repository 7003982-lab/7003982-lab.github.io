// Basic Transformations Sandbox
// Adrian Chan
// October 8, 2025


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  drawBasicGrid(220);


  //transformation one: TRANSLATION
  // push(); // Makes a copy of the current coordinate system

  // translate(100, 50);
  // drawBasicGrid(150);
  // rectangleRed(0,0);

  // pop();  // Discard the current coordinate system
  // rectangleBlue(0, 0);

  //add push()  pop()




  //transformation two: SCALE
  // rectangleRed(40, 0);
  // push();
  // // scale 1 -> no change   scale 2 -> smaller system   scale 3 -> larger system
  // let scaleAmount = mouseX;
  // scaleAmount = map(scaleAmount, 0, width, 0, 20);
  // translate(40, 40)
  // scale(scaleAmount);
  // rectangleRed(0, 0);
  
  // scale(scaleAmount);
  // translate(100, 0);
  // drawBasicGrid(150);
  // rectangleBlue(20, 20);



  // pop();



  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  
  
  // push();
  // translate(200, 200)
  // rotate(frameCount);
  // // drawBasicGrid(150);
  // face(0, 0);

  // pop();


  // //Combinations of Transformations
  // push();
  // scale(4);
  // translate(100, 40);
  // rotate(frameCount+100);
  // face(0,0);

  // pop();
  push();
  translate(200,200);
  rotate(frameCount);
  circle(0,0,150);
  for(i = 0; i < 90; i++){
    let x1 = 0;
    let y1 = -75;
    let x2 = 0;
    let y2 = 75
    line(x1, y1, x2, y2);
    rotate(1);
  }

  pop();

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}