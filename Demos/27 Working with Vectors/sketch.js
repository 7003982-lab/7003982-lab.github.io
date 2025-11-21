// Working with Vectors
// Adrian Chan
// November 21, 2025

// GLOBAL VARIABLES
let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }

  for(let o of objects){
    if (keyIsDown(32)){
      o.move();
    }
    //o.calcMouse();
    
    o.display();
  }
}

class Ball{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(random(5, -5), -5);
    this.grav = createVector(0, 0.2);
  }

  calcMouse(){
    // Mouse vector "attractor" calculation
    this.grav = createVector(mouseX, mouseY);
    this.grav.sub(this.pos);
    this.grav.normalize();  // set hypotenuse  1
    this.grav.mult(4);
  }

  move(){
    this.vel.add(this.grav);
    this.vel.limit(20)  // Can't go outside 20 and -20
    this.pos.add(this.vel);

    // Wallbounce
    if(this.pos.x<0 || this.pos.x>width){
      this.vel.x *= -1;
    }

    // Floor bounce 
    if(this.pos.y > height){
      this.vel.y *= -1  ;
    }
  }

  display(){
    // Display ball 
    stroke(0);
    circle(this.pos.x, this.pos.y, 20);

    // Display vectors
    if (false){
      stroke(255, 0, 0);
      line(0, 0, this.pos.x, this.pos.y);
      let endX =  this.pos.x + this.vel.x;
      let endY =   this.pos.y + this.vel.y;

      stroke(0, 0, 255);
      line(this.pos.x, this.pos.y,endX, endY);

      stroke(0, 255, 0);
      line(endX, endY, endX + this.grav.x, endY + this.grav.y);
    }
  }

}