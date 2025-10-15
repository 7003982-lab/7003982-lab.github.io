// Classes and Objects (Books)
// Adrian Chan
// October 15, 202

// GLOBAL VARIABLES
let myBook;
let bookshelf = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book ("CS30 Text", "Mr. Scott", 123456789011, "leatherbound", 515, width*0.3);
  for(let b = 0; b<20; b++){
    bookshelf.push(new Book("B", "Adrian", random(1000000000000, 9999999999999), "softcover", random(300, 500), width*b/20))
  }
  
}

function draw() {
  background(220);
  myBook.display();
  for (let b in bookshelf){
    b.display();
  }
}


class Book{
  // Costructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
      // "softcover"  "hardcover" "leatherbound"
    this.pages = pages;
    this.x = x;

    // Fields for pickup
    this.pickUp = false;
    this.left;
    this.right;
    this.top;
    this.bottom;
    this.updateSides();
  }




  // Class Methods
  updateSides(){
    this.top = height/2-75;
    this.bottom = height/2+75;
    this.left = this.x - this.pages/20;
    this.right = this.x + this.pages/20;
  }

  mouseIsOver(){
    // Return if mouse is over
    if (mouseX> this.left && mouseX< this.right){
      if(mouseY>this.top && mouseY< this.bottom){
        return true;
      }
    }
    return false;
  }

  display(){
    this.updateSides();
    // Render book object on the canvas
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(20);

    switch(this.cover){
      case "softcover":
        fill(250, 200, 150);
        break;

      case "hardcover":
        fill(120, 255, 255);
        break;

      case "leatherbound":
        fill(150, 100, 15);
        break;
    }

    // Draw the book
    push();
    translate(this.x, height/2);
    if(this.mouseIsOver()){
      scale(1.2);
    }
    rect(0, 0, this.pages/10, 150);

    fill(255);
    text(this.title[0], 0, -50);
    pop();


  }






}