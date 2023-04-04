
let bgImage;
let windowHeight = screen.height;
let windowWidth = screen.width;

function preload() { //put the image in project directory and make this a relative path
  bgImage = loadImage('C:\Users\mykal\OneDrive\Desktop\Tap-And-Dash\img\track-sketch.jpg');
}

function setup() { //needed to specify windowWidth and windowHeight
  createCanvas(windowWidth, windowHeight);
  background(bgImage);
}

function draw() {
  text("put your p5.js code here",10, frameCount % height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
