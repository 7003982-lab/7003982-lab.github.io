// Local Storage
// Adrian Chan
// October 24, 2025

// GLOBAL VARIABLES
let mySquare;
let totalBounces = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  mySquare = new Bouncer(width/2, height/2);
  textSize(30);
  textAlign(CENTER, CENTER);
  if (localStorage.getItem("numBounces")===null){
    localStorage.setItem("numBounces", 0);
  }
  else{
    totalBounces = int(localStorage.getItem("numBounces"));
  }
}

function draw() {
  background(220);
  mySquare.move();
  mySquare.display();
  text(totalBounces, width/2, height/2);
}

function keyPressed(){
  localStorage.setItem("numBounces", 0);
  totalBounces = 0;
}


class Bouncer{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-5, 5);
  }

  // Class Methods
  display(){
    square(this.x, this.y, 30);
  }

  move(){
    // Calculate new position
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Bounce?
    if (this.x <0 || this.x > width){
      this.xSpeed *= -1;
      totalBounces ++;
      localStorage.setItem("numBounces", totalBounces);
    }

    if (this.y <0 || this.y > height){
      this.ySpeed *= -1;
      totalBounces ++;
      localStorage.setItem("numBounces", totalBounces);
    }

  }
}