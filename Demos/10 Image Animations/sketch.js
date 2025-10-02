// Image Animations
// Adrian Chan
// October 2, 2025

// GLOBAL VARIABLES
let pinImages = []; //array === list
let current = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
}

async function loadAssets(){
  // Load all of the pinwheel images
  // Imstead of doing this 9 times
  // pinImages.push(await loadAssets("assets/pin-00.png"));
  // Use a FOR loop as there is a pattern
  for(let i=0; i<9; i++){
    pinImages.push(await loadImage("assets/pin-0" + i + ".png"));
  }
}

function draw() {
  background(0);
  // animateWithFor();

  // Manage current image to display
  if (frameCount % 5 === 0){  // Limits the frame rate by only changing the image every 5 frame
    current += 1
    if(current>8){
      current = 0;
    }
  }
  

  imageMode(CENTER);
  image(pinImages[current], width/2, height*0.6)

}

function amimateWithFor(){
  // Make an animation with a FOR loop
  // DOESN'T WORK
  imageMode(CENTER);
  for(i=0; i<9; i++){
    image(pinImages[i], width/2, height*0.7);
  }
}
