
let bgImage;

function preload() {
  bgImage = loadImage('C:\Users\mykal\OneDrive\Desktop\Tap-And-Dash\img\track-sketch.jpg');
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
