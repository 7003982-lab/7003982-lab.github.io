// Child Class 1 - Circle
class CircleObject extends AnimatedObject{
    constructor(x, y){
      super(x, y);
      // Can also add on to whatwas in the parent class
      this.size = random(20, 40);
    }
  
    // No meantion of move()... it will be the same as parent's move()
  
    display(){  // Function override; copies overtop of parent version
      if(dist(this.x, this.y, mouseX, mouseY)<this.size/2){
        fill(0, 255, 0);
      }
      else{
        fill(255);
      }
      circle(this.x, this.y, this.size);
    }
  }
  