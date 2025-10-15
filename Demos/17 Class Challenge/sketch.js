// First Class Challenge
// Adrian Chan
// October 14, 2025

// GLOBAL VARIABLES
let racer1;
let racer2;
let racer3

function setup() {
  createCanvas(windowWidth, windowHeight);
  racer1 = new RoundRacer(height*0.25, 50);
  racer2 = new RoundRacer(height*0.5, 150);
  racer3 = new RoundRacer(height*0.75, 250);
}

function draw() {
  background(0);
  

  racer1.move();
  racer1.display();
  racer2.move();
  racer2.display();
  racer3.move();
  racer3.display();
  
    

}


class RoundRacer{
  // Constructor
  constructor(yPosition, color){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.xSpeed = random(3,15);
    this.color = color
  }

  // Function
  display(){
    fill(this.color);
    circle(this.xPosition, this.yPosition, 20)
  }

  move(){
    this.xPosition += this.xSpeed;
    if (this.xPosition> width){
      this.xPosition = 0;
    }
  }
}