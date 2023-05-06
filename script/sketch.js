let gameStarted = false;
let applausePlayed = false;
let playeroneWins = false;
let playertwoWins = false;


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

//Player image dimensions
let customWidth = 250;
let customHeight = 350;


function preload() { 
  bgImage = loadImage("img/track-sketch.png");
  titleScreen = loadImage("img/title-screen.png");
  startSound = loadSound("sound/start-theme.wav");
  applauseSound = loadSound("sound/applause.wav");
  runnerStart = loadSound("sound/Ready-Set-Go.mp4")

  oneStart = loadImage("img/one-start.png");
  oneRun = loadImage("img/one-run.png");

  twoStart = loadImage("img/two-start.png");
  twoRun = loadImage("img/two-run.png");
}

function setup() { 
  createCanvas(1280, 720);
  startSound.setVolume(0.5);
  startSound.loop();
  applauseSound.setVolume(0.5);
  textAlign(CENTER, CENTER)
}  

function draw() {
  background(bgImage, 500, 500)

  if (!gameStarted) {
    // draw the title screen and start button
    background(titleScreen);
    playeroneWins = false
    playertwoWins = false
    
  } else {
    // code for the actual gameplay
    setTimeout(gamePlay, 6000);
    
    //Player One
    image(oneRun, distance1, 175, customWidth, customHeight);

    //Player Two
    image(twoRun, distance2, 350, customWidth, customHeight);
  } 

  if (playeroneWins) {
    textSize(64);
    fill(255)
    text("PLAYER ONE WINS!", width/2, height/2.75)
  }

  if (playertwoWins) {
    textSize(64);
    fill(255)
    text("PLAYER TWO WINS!", width/2, height/2.75)
  }

}

function mousePressed() {
  if (!gameStarted && mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/1.5 - 50 && mouseY < height/1.5 + 50) {
    gameStarted = true;
    runnerStart.play()
  }

  if (startSound.isPlaying()) {
    startSound.stop();
  }
}

function gamePlay() {

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
  if (event.code === "ArrowUp") {
    clapping();
  }
});

function clapping() {
  if (distance1 >= threshold && distance2 < threshold) {
    applauseSound.play();
    setTimeout(restartGame, 10000);
    playeroneWins = true
  }
}

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowRight") {
    clapping2();
  }
});

function clapping2() {
  if (distance2 >= threshold && distance1 < threshold) {
    applauseSound.play();
    setTimeout(restartGame, 10000);
    playertwoWins = true
  }
}


function restartGame () {
  location.reload();
}
