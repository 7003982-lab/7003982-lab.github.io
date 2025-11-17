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
  createCanvas(600, 600);
  pixelDensity(1);
}

async function loadAssets(){
  chip = await loadImage("assets/chip.jpg");
  race = await loadImage("assets/race.jpg");
  nuit = await loadImage("assets/nuit.jpg");
  hand = await loadImage("assets/hand.jpg");
  butterfly = await loadImage("assets/butterfly.jpg");
}

function draw() {
  background(220);
  //image(chip, 0, 0);
  //image(race, 0, 0);
  image(nuit, 0, 0);
  //image(hand, 0, 0);
  //image(butterfly, 0, 0)
  loadPixels();
  //mainColor();
  //noGreen();
  //fiveColor();
  //mirror();
  //rotateImg();
  xBlur();
  updatePixels();
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
      else {
        setPixel(x, y, 0, 0, 255);
      }
    }
  }
}

function noGreen(){
  for(let x = 0; x<width; x++){
    for(let y = 0; y<height; y++){
      if(x>=width/2){
        getRGB(x, y);
        setPixel(x, y, r, 0, b);
      }
    }
  }
}

function fiveColor(){
  for(let x=0; x<width; x++){
    for(let y = 0; y<height;y++){
      let avg = getAverage(x,y);
      if(avg >= 205) setPixel(x, y, 170, 230, 220);
      else if(avg >=155)  setPixel(x, y, 105, 150, 210);
      else if(avg >=105)  setPixel(x, y, 120, 180, 60);
      else if(avg >=55)  setPixel(x, y, 130, 30, 130);
      else  setPixel(x, y, 90, 10, 50);
    }
  }
}

function mirror(){
  for(let x = 0; x<width; x++){
    for(let y = 0; y<height; y++){
      if (x<width/2){
        getRGB(width-x, y);
        setPixel(x, y, r, g, b);
      }
    }
  }
}

function rotateImg(){
  let srcPixels = structuredClone(pixels);
  for(let x=0; x<width;x++){
    for(let y = 0; y<height; y++){
      i = (width*y+x)*4;
      r = srcPixels[i];
      g = srcPixels[i+1];
      b = srcPixels[i+2];
      if(x<width/2 && y< height/2)  setPixel(x+width/2, y, r, g, b);
      else if(width/2 < x && y<height/2)  setPixel(x, y+height/2, r, g, b);
      else if(width/2 < x && height/2 <y) setPixel(x-width/2, y, r, g, b);
      else setPixel(x, y-height/2, r, g, b);
    }
  }
}

function getAverageR(x, y, r){

}

function xBlur(){
  let srcPixels = structuredClone(pixels);
  let radius = 5;
  for(let x=0; x<width;x++){
    for(let y = 0; y<height; y++){
      
      i = (width*y+x)*4;
      r = srcPixels[i];
      g = srcPixels[i+1];
      b = srcPixels[i+2];
      let sumR = r;
      let sumG = g;
      let sumB = b;
      for (let r = -radius; r<= radius; r++){
        i = (width*(y+r)+(x+r))*4;
        sumR += srcPixels[i];
        sumG += srcPixels[i+1];
        sumB += srcPixels[i+2];
      }
    }
  }
}