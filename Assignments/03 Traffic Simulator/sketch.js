// Cars Cars Cars (Traffic Simulator)
// Adrian Chan
// October 20, 2025

// GLOBAL VARIABLES
let eastbound = [];
let westbound = [];
// let car;
// let car1;
let trafficLight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // car = new Cars (200, 0, 0);
  // car1 = new Cars (100, 1, 1);
  for (let i = 0; i<20; i++){
    westbound.push(new Cars(random(width), Math.floor(random(0,2)), 0));
    eastbound.push(new Cars(random(width), Math.floor(random(0,2)), 1));
  }
  trafficLight = new TrafficLight();
}

function draw() {
  background(200);
  drawRoad();
  
  for(let w of westbound){
    w.action();
  }
  for(let e of eastbound){
    e.action();
  }
  // car.action();
  // car1.action();
  trafficLight.display();

}

function mousePressed(){
  // regular click = add an eastbound car
  // Shift click = add a westbound car
  if (keyIsPressed && keyCode === SHIFT){
    westbound.push(new Cars(random(width), Math.floor(random(0,2)), 0));
  }
  else{
    eastbound.push(new Cars(random(width), Math.floor(random(0,2)), 1));
  }
}

function keyIsPressed(){
  if (keyCode === SPACE){
    trafficLight.redLight();
  }
}

function drawRoad(){
  // Draw Road
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
  constructor(x, type, direction){
    this.direction = direction  // 0-> westbound  1-> eastbound
    this.x = x;
    if (this.direction === 0){
      this.y = random(height*0.25, height*0.45);
    }
    else if (this.direction === 1){
      this.y = random(height*0.55, height*0.75);
    }
    
    this.type = type;   // Math.floor(random(0,2))
    this.xSpeed = Math.floor(random(1, 15));
    this.color = color(random(255), random(255), random(255));
  }

  // Class Methods
  display(){
    noStroke();
    fill(this.color);
    if (this.type === 0){   // 0->car 1->truck
      rect(this.x, this.y, 60, 30);
      fill(0);
      rect(this.x-20, this.y-20, 15, 5);
      rect(this.x+20, this.y-20, 15, 5);
      rect(this.x-20, this.y+20, 15, 5);
      rect(this.x+20, this.y+20, 15, 5);
    }
    if (this.type === 1){
      push();
      translate(this.x, this.y)
      if (this.direction === 1){
        rotate(180);
      }
      rect(0, 0, 80, 40);
      fill(255)
      rect(0-28, 0, 15, 30);
      fill(0);
      rect(0-15, 0, 2, 40)
      pop();
    }
  }

  move(){
    
    if (this.direction === 0){
      this.x -= this.xSpeed;
      if(this.x<-50){
        this.x = width+50;
      }
    }
    if (this.direction === 1){
      this.x += this.xSpeed;
      if(this.x>width+50){
        this.x = -50;
      }
    }
  }

  speedUp(){
    let speedPer = Math.floor(random(0,100));
    if (speedPer === 50){
      if (this.xSpeed < 15){
        this.xSpeed += 1;
      }
    }
        
  }

  speedDown(){
    let speedPer = Math.floor(random(0,100));
    if (speedPer === 75){
      if (this.xSpeed > 0){
        this.xSpeed -= 1;
      }
    }
  }

  changeColor(){
    let colorPer = Math.floor(random(0,100));
    if (colorPer === 25){
      this.color = color(random(255), random(255), random(255));
    }
  }

  action(){
    this.move();
    this.display();
    this.speedUp();
    this.speedDown();
    this.changeColor();
  }
}

class TrafficLight{
  // Constructor
  constructor(red){
    this.x = width/2;
    this.y = height*0.1;
    this.d = height*0.15;
    this.red = red;
    this.frame = 120;
  }

  // Class Methods
  display(){
    stroke(0)
    strokeWeight(5);
    if (this.red === false){
      fill(0, 255, 0);
    }
    else if (this.red === true){
      if(this.frame>0){
        fill(255, 0, 0);
        this.frame -= 1;
      }
    } 
    circle(this.x, this.y, this.d);
  }

  redLight(){
    
    
  }

}