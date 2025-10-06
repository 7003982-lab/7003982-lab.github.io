// Nested Loops and Popping Bubbles
// Adrian Chan
// October 3, 2025

// GLOBAL VARIABLES
let bubbles = [];
let bubbleSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //drawWithGrid();
  populateArray();
}

function draw() {
  background(220);
  showBubbles();
}

function populateArray(){
  // Use a nested loop to generate x,y positions for all the bubbles
  for(let x=0; x<width; x+=bubbleSize){
    for(let y=0; y<height; y+=bubbleSize){
      let b = {
        x: x, y: y
      };
      bubbles.push(b);
    }
  }
    

}

function showBubbles(){
  // Traverse the array
  // Display a bubble for each (x,y)
  for (i=0; i<bubbles.length; i++){
    let b = bubbles[i]
    circle(b.x, b.y, bubbleSize);
    if(dist(b.x, b.y, mouseX, mouseY) < bubbleSize/2){
      // To delete an item, use .splice()
      // .splice(pos, # of times to delete, [replacement item])
      bubbles.splice(i, 1)
    }
  }
}







function drawWithGrid(){
  for(let y=0; y<=height; y+=30){
    for(let x=0; x<=width; x+=30){
      circle(x,y,1);

    }
  }

}
    
