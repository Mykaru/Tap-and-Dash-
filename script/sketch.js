
let bgImage;
let windowHeight = screen.height;
let windowWidth = screen.width;

function preload() { 
  bgImage = loadImage("img/track-sketch.jpg");
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(bgImage);
}

function draw() {
  text("put your p5.js code here",10, frameCount % height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
