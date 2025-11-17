// Cars Cars Cars (Traffic Simulator)
// Adrian Chan
// October 20, 2025

// GLOBAL VARIABLES
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  drawRoad();
}



function drawRoad(){
  
  // Draw Pavement
  rectMode(CENTER);
  noStroke();
  fill(50);
  rect(width/2, height/2, width, height*0.6);

  // Draw Lines
  //rectMode(CORNERS)
  fill("yellow");
  for (let i = 0; i < width; i += 150){
    rect(i, height/2, 100, 15);
  }
  
}

class Cars{
  // Constructor
  constructor(x, y, type){
    this.x = x;
    this.y = y;
    this.type = type;
    this.xSpeed = random(1, 15);
    this.color = color(random(255), random(255), random(255));
  }

  // Class Methods
  display(){
    noStroke();
    fill(this.color);
    
  }
}