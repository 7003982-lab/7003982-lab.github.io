// Image Manipulation Exercise
// Adrian Chan
// November 13, 2025

// GLOBAL VARIABLES
let chip;
let race;
let nuit;
let hand;
let i, r, g, b;

function setup() {
  loadAssets();
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

async function loadAssets(){
  chip = await loadImage("assets/chip.jpg");
  race = await loadImage("assets/race.jpg");
  nuit = await loadImage("assets/nuit.jpg");
  hand = await loadImage("assets/hand.jpg");
}

function draw() {
  background(220);
  image(chip, 0, 0);
  loadPixels();
}

function setPixel(x, y, r, g, b){
  // x,y -> pixel location
  // r,g,b -> new pixel color
  let index = (width*y+x)*4;
  setPixelColor(index, r, g, b);
}

function setPixelColor(pos, r, g, b){
  // pos -> 1D location in pixels array 
  // r, g, b, -> new colors for that pixel
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}


function getAverage(x, y){
  // Return the avergae intensity of pixel (x, y)
  getRGB(x, y)
  return (r+g+b)/3
}

function getRGB(x, y){
  i = (width*y+x)*4;
  r = pixels[i];
  g = pixels[i+1];
  b = pixels[i+2];
}




function mainColor(){
  for(let x =0; x<width; x++){
    for(let y =0; y<width; y++){
      getRGB(x, y);
      if (r>g && r>b){
        setPixel(x, y, 255, 0, 0);
      }
      else if(g>r && g>b){
        setPixel(x, y, 0, 255, 0);
      }
      else if(b>r && b>g){
        setPixel(x, y, 0, 0, 255);
      }
    }
  }
}
