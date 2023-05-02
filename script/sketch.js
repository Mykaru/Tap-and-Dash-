let gameStarted = false;
let applausePlayed = false;

// Player One // 
let playerOne = null;
let distance1 = 30;
const threshold = 1215

// Player Two //
let playerTwo = null;
let distance2 = 30;

//Background image shit idk // 
let bgImage;
let windowHeight = screen.height;
let windowWidth = screen.width;

function preload() { 
  bgImage = loadImage("img/track-sketch.png");
  titleScreen = loadImage("img/title-screen.png");
  startSound = loadSound("sound/start-theme.wav");
  applauseSound = loadSound("sound/applause.wav")
}

function setup() { 
  createCanvas(1280, 720);
  startSound.setVolume(0.5);
  startSound.loop();

  applauseSound.setVolume(0.5);
}  

function draw() {
  background(bgImage)

  if (!gameStarted) {
    // draw the title screen and start button
    background(titleScreen);
    
  } else {
    // code for the actual gameplay
    gamePlay();
    
    fill(0,100,255)
    rect(distance1, 480, 50, 50);

    fill(0,255,100)
    rect(distance2, 620, 50, 50);
  } 

  if (distance1 > threshold) {
    rect(1100,100,100,100);
  }

  if (distance2 > threshold) {
    rect(1100,100,100,100);
  }


}

function mousePressed() {
  if (!gameStarted && mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/1.5 - 50 && mouseY < height/1.5 + 50) {
    gameStarted = true;
  }

  if (startSound.isPlaying()) {
    // .isPlaying() returns a boolean
    startSound.stop();
  }
}

function clapping () {
  //applauseSound.play();
}

function gamePlay() {
  //startSound.stop();

// Hopefully this fucking reset button works//
document.addEventListener("keydown", function(event) {
  if (event.key === "r") {
    distance1 = 30;
    distance2 = 30;

    console.log("Players reset!")
  }
});

// Backend Movement System for Player One //
function incrementValue1() {
  distance1 += 15;
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft" && playerOne !== "ArrowLeft") {
    incrementValue1();
    playerOne = "ArrowLeft";
  } else if (event.code === "ArrowUp" && playerOne !== "ArrowUp") {
    incrementValue1();
    playerOne = "ArrowUp";
  }
  console.log("playerOne: " + playerOne + ", distance1: " + distance1);
});
//

// Backend Movement System for Player One //
function incrementValue2() {
  distance2 += 15;
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowDown" && playerTwo !== "ArrowDown") {
    incrementValue2();
    playerTwo = "ArrowDown";
  } else if (event.code === "ArrowRight" && playerTwo !== "ArrowRight") {
    incrementValue2();
    playerTwo = "ArrowRight";
  }
  console.log("playerTwo: " + playerTwo + ", distance2: " + distance2);
});
}


// Code for applause // 
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp" || event.code === "ArrowRight") {
    clapping();
  }
});

function clapping () {
  if (distance1 === threshold) {
    applauseSound.play();
    setTimeout(restartGame, 10000);
  }
  else if (distance2 === threshold) {
    applauseSound.play();
    setTimeout(restartGame, 10000);
  }
}

function restartGame () {
  gameStarted = false;
  applauseSound.stop();
}
