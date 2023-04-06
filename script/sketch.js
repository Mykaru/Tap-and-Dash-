// Player One // 
let playerOne = false;
let distance1 = 0;
let lastKeyPressed1 = null;

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
  createCanvas(720, 720);
}

function draw() {
  background(220);

  fill(0,255,100)
  rect(distance1, 100, 50, 50);

  rect(distance2, 200, 50, 50);

  

}
// Backend Movement System for Player One //
function toggleBoolean1() {
  playerOne = !playerOne;
  if (playerOne) {
    distance1 += 5; // increment count by 5 each time isTrue is true
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
    distance2 += 5; // increment count by 5 each time isTrue is true
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