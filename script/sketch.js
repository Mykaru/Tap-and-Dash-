let playerOne = false;
let count1 = 0;
let lastKeyPressed1 = null;

let playerTwo = false;
let count2 = 0;
let lastKeyPressed2 = null;

let bgImage;
let windowHeight = screen.height;
let windowWidth = screen.width;

function windowResized() {7
  resizeCanvas(windowWidth, windowHeight);
}


function preload() { 
  bgImage = loadImage("img/track-sketch.jpg");
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(bgImage);
}

function draw() {
  
}

function toggleBoolean1() {
  playerOne = !playerOne;
  if (playerOne) {
    count1++; // add 1 to count each time isTrue becomes true
  }
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft" && lastKeyPressed1 !== "ArrowLeft") {
    toggleBoolean1();
    lastKeyPressed1 = "ArrowLeft";
  } else if (event.code === "ArrowUp" && lastKeyPressed1 !== "ArrowUp") {
    toggleBoolean1();
    lastKeyPressed1 = "ArrowUp";
  }
  console.log("playerOne: " + playerOne + ", count1: " + count1);
});



function toggleBoolean2() {
  playerTwo = !playerTwo;
  if (playerTwo) {
    count2++; // add 1 to count each time isTrue becomes true
  }
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowRight" && lastKeyPressed2 !== "ArrowRight") {
    toggleBoolean2();
    lastKeyPressed2 = "ArrowRight";
  } else if (event.code === "ArrowDown" && lastKeyPressed2 !== "ArrowDown") {
    toggleBoolean2();
    lastKeyPressed2 = "ArrowDown";
  }
  console.log("playerTwo: " + playerTwo + ", count2: " + count2);
});