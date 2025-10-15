// Objects Mini Demo
// Adrian Chan
// October 10, 2025


// GLOBAL VARIABLES
let myBall;
let ballCollection = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball(100, 100);
}

function draw() {
  background(220);
  myBall.move();
  myBall.display();


  // Add a new object to array
  if (mouseIsPressed){
    ballCollection.push(new Ball(mouseX, mouseY));
  }

  // Process collection of objects
  for (let b of ballCollection){
    b.move();
    b.display();
  }
}


class Ball{
  // Constructor
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.size = 15;
    this.speed = random(2, 10);

  }


  // Class Method/ Fuction
  display(){
    fill(this.c);
    circle(this.x, this.y, this.size);

  }

  move(){
    // Horizontal movement only
    this.x += this.speed;
    if(this.x > width){
      this.x=0
    }
  }
}