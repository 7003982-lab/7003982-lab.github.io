// Map Data Structures and Reading Files
// Adrian Chan
// October 31, 2025

// GLOBAL VARIABLES
let textFile;
let imgText, rows, cols, colorMap;

function preload(){
  // Use this function to load the text from our files
  textFile = loadStrings("assets/info.txt");
  imgText = loadStrings("assets/colorImage.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  processText();

  // Determie number of rows and columns
  rows = imgText.length;
  cols = imgText[0].length;

  // Construct the map of colors
  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)],
    ["p", "lightblue"],
    ["r", "brown"],
    ["l", "tan"]
  ]);

  drawImage();
}

function processText(){
  // Look at 3 different ways to split up a larger string 
  // into words or individual characters
  // split() and spread syntax

  print("SPLIT INZTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("SPLIT INTO CHARACTERS");
  let splitCharacters = textFile[1].split("");
  print(splitCharacters);

  print("SPREAD INTO CHARACTERS");
  let spreadCharacters = [...textFile[2]];
  print(spreadCharacters);
}

function drawImage(){
  // Read through out text information and construct an image
  let pixelSize = 50;
  for(let y = 0; y<rows; y++){
    let currentRow = imgText[y];
    for(let x =0; x<cols; x++){
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey));
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
    }
  }
}

function draw() {
  //background(220);
  
}
