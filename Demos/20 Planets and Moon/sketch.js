// Planets and Moons
// Adrian Chan
// October, 17, 2025

// Objects within objects
// Overiting objects
// Basic transformations

// GLOBAL VARIABLES
let myPlanet;
let stars = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
  for (let i = 0; i < random(20, 100); i++){
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  for (let s of stars){
    s.display();
  }
  
  myPlanet.display();
}

function mousePressed(){
  // regular click = add a moon
  // Shift click = destroy and reset the moon
  if (keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(myPlanet.x, myPlanet.y);
  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode!== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}

class Planet{
  // Constructor
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.moons = [];

  }

  // Class methods
  display(){
    // Draw planets and all of its moons
  for (let a = this.s)
    circle(this.x, this.y, this.s);

    // Moons
    for (let m of this.moons){
      m.update(this.x, this.y)
    }
  }

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }
}



class Moon{
  // Constructor
  constructor(){
    this.speed = random(1, 5);
    this.angle = 0;
    this.orbitRadius = random(80, 250);
    this.s = random(5, 50);

  }

  // Class methods
  display(x,y){
    push();
    translate(x, y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();

  }

  move(){
    this.angle += this.speed;

  }

  update(x, y){
    // Helper function to handle helping calling class methods internally
    this.move();
    this.display(x,y);
  }
}

class Star{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.s = random(2, 10);

  }

  display(){
    circle(this.x, this.y, this.s)
  }

}