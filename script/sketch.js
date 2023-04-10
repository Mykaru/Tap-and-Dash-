// Player One // 
let playerOne = false;
let distance1 = 0;
let lastKeyPressed1 = null;
const threshold = 1200

// Player Two //
let playerTwo = false;
let distance2 = 0;
let lastKeyPressed2 = null;

//Background image shit idk // 
let bgImage;
let windowHeight = screen.height;
let windowWidth = screen.width;

function preload() { 
  bgImage = loadImage("img/track-sketch.jpg");
}

function setup() { 
  createCanvas(1280, 720);
}

function draw() {
  background(bgImage);

  fill(0,100,255)
  rect(distance1, 480, 50, 50);


  fill(0,255,100)
  rect(distance2, 620, 50, 50);

  if (distance1 > threshold) {
    rect(1100,100,100,100);
  }
  
}

// Backend Movement System for Player One //
function toggleBoolean1() {
  playerOne = !playerOne;
  if (playerOne) {
    distance1 += 15; // increment count by 5 each time playerOne is true
  }
  if (playerOne = false) {
    distance1 += 15; // increment count by 5 each time playerOne is true
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
  console.log("playerOne: " + playerOne + ", distance1: " + distance1);
});
//

// Backend Movement System for Player One //
function toggleBoolean2() {
  playerTwo = !playerTwo;
  if (playerTwo) {
    distance2 += 15; // increment count by 5 each time playerTwo is true
  }
  if (playerTwo = false) {
    distance1 += 15; // increment count by 5 each time playerOne is true
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
  console.log("playerTwo: " + playerTwo + ", distance2: " + distance2);
});
//

// When a player wins // 
function checkVariable() {
  let variableExceededThreshold = false;
  while (!variableExceededThreshold) {
    if (distance1 > threshold) {
      variableExceededThreshold = true;
      myFunction();
    }
  }
}

function myFunction() {
  alert("My variable has exceeded the threshold of 10!");
}

