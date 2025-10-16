// Object-Object Interactions
// Adrian Chan
// October 16, 2025


// GLOBAL VARIABLES
let nodes = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  for(let i =0; i<1; i++){
    nodes.push(new csNode(mouseX, mouseY));
  }
}
  

function draw() {
  background(0);
  for (let n of nodes){
    n.move();
    n.display();
    n.connect(nodes);
  }
}


class csNode{
  // Constructor
  constructor(x,y){
    // Properties related to position /display
    this.x = x; 
    this.y = y;
    this.size = 20;
    this.c = color(random(255),random(255),random(255));


    // Properties related to movement
    this.xTime = random(10);
    this.yTime = random(10);
    this.timeShift = 0.01; 
    this.maxSpeed = 20;
  }

  // Class methods
  display(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);

  }

  move(){
    // Use perlin noise for x/y movement
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;
    this.x += xSpeed;

    if (this.x<0){
      this.x = width;
    } 
    else if (this.x>width){
      this.x - 0;
    }


    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;
    this.y += ySpeed;

    if (this.y<0){
      this.y = height;
    } 
    else if (this.y>height){
      this.y - 0;
    }
  }

  connect(nodeArray){
    // Check if the current point is close to any other point
    // If so, join with a line
    stroke(this.c);
    for(let n of nodeArray){
      // this.x this.y compare with n.x n.y
      if (n !== this){  // Avoid comparing to self
        let d = dist(this.x, this.y, n.x, n.y);
        if (d < reach){
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
    
  }



}