// Noise and Objects
// Adrian Chan
// September 26, 2025

//GLOBAL VARIABLES
let ball; let ball2; let ball3; let ball4; let ball5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {    //object notation. Inside the bracket set up a bunch of property : value  pairs
    x: 300, y: 400, size: 20,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
  }
  ball2 = {
    x: 500, y: 200, size: 50,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.2
  }
  ball3 = {
    x: 400, y: 100, size: 40,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.05
  }
  ball4 = {
    x: 200, y: 300, size: 10,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.1
  }
  ball5 = {
    x: 100, y: 500, size: 30,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.15
  }
}

function draw() {
  background(255,50); //0-255   opacity: %
  moveBall(ball);
  moveBall(ball2);
  moveBall(ball3);
  moveBall(ball4);
  moveBall(ball5);
}

function moveBall(b){
  // b -> Ball type object
  // Update position and draw provided ball

  // Generate random position change (x and y)
  let dx = noise(b.timeX);
  dx = map(dx, 0, 1, -5, 5);
  let dy = noise(b.timeY);
  dy = map(dy, 0, 1, -5, 5);

  // Advanced our noise graph "cursor"
  b.timeX += b.timeOff; b.timeY += b.timeOff;
  b.x += dx; b.y += dy;

  // Handle any "wrap-arounds" necessary
  if (b.x < 0){
    b.x += width;
  }
  else if (b.x > width){
    b.x -= width;
  }
  if (b.y < 0){
    b.y += height;
  }
  else if (b.y > height){
    b.y -= height;
  }

  // render the circle
  fill(b.c);
  circle(b.x, b.y, b.size);
}