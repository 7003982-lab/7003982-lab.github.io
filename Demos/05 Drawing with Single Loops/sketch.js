// Drawing with Single Loops
// Adrian Chan
// September 23, 2025
//



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradientBackground();
  circleLine(height*0.33, 25);
  circleLine(height/2, 50);
  circleLine(height*0.66, 75);
}

function gradientBackground(){
  // Create a gradient to use as a background
  let h = 1;   // Height of each triangle

  // Use a loop to draw a vertical stack of rectangle
  let y = 0;
  while (y <= height){
    noStroke();
    let mappedY = map(y, 0, height, 0, 255);
    let flippedY = 255 - mappedY;
    let mappedMouseX = map(mouseX, 0, width, 0, 255)
    let mappedMouseY = map(mouseY, 0, height, 0, 255)
    fill(mappedMouseY, flippedY, mappedMouseX);
    rect(0, y, width, h);
    y += h;
    
  }
}

function cDistance(x1, y1, x2, y2){
  // Calculate the straightline distance between (x1, y1) and (x2, y2)
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(pow(a,2) + pow(b,2));
  return c.toFixed(1);  // Keep 1 decimal place only
}

function circleLine(y, size){
   // Use this function to draw a line of circles (Loop)
   // y -> number    The height at which to draw the line
   // size -> Diameter of the circles
   let xStart = width*0.1;    // 10% from the left
   let xEnd = width*0.9;

   for (let x = xStart; x<= xEnd; x += size){
    let d = cDistance(x, y, mouseX, mouseY);
    if(d <= size/2){
      fill(200,200,0);
    }
    else{
      fill(225);
    }
    circle(x, y, size);
    fill(0)
    textAlign(CENTER, CENTER);
    text(d, x, y);
   }
}

