// Inheritance and Code in Multiple Files
// Adrian Chan
// October 30, 2025

// GLOBAL VARIABLES
let objects =[];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i< 20; i++){
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CircleObject(random(width), random(height)));
    objects.push(new LineObject());
  }
}

function draw() {
  background(220);
  
  for(let o of objects){
    o.move();
    o.display();
  }
}






