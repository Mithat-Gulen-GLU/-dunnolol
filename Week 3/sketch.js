let playerTurn = 0;
// let cellX = 350;
// let cellY = 100;
let blueClick = false;
let redClick = false;

function setup() {
  createCanvas(1000, 440);
}

function draw() {
  background("gray");

// TIC TAC TOE

// CELLS

push();
fill(0, 0, 0);
// rect(cellX, cellY, 50, 50);
// rect(cellX += 150, cellY, 50, 50);
// rect(cellX =+ 300, cellY, 50, 50);
// rect(cellX, cellY += 150, 50, 50);
// rect(cellX += 150, cellY += 150, 50, 50);
// rect(cellX += 300, cellY += 150, 50, 50);
// rect(cellX, cellY += 300, 50, 50);
// rect(cellX += 150, cellY += 300, 50, 50);
// rect(cellX += 300, cellY += 300, 50, 50);

rect(350, 100, 50, 50);
rect(450, 100, 50, 50);
rect(550, 100, 50, 50);
rect(350, 200, 50, 50);
rect(450, 200, 50, 50);
rect(550, 200, 50, 50);
rect(350, 300, 50, 50);
rect(450, 300, 50, 50);
rect(550, 300, 50, 50);
pop();

// CIRCLES
push();
fill("blue");
circle(375, 125, 30);
circle(475, 125, 30);
circle(575, 125, 30);
circle(375, 225, 30);
circle(475, 225, 30);
circle(575, 225, 30);
circle(375, 325, 30);
circle(475, 325, 30);
circle(575, 325, 30);
pop();

// X'ES
push();
fill("Crimson");
textSize(24);
text("X", 367, 133);
text("X", 467, 133);
text("X", 567, 133);
text("X", 367, 233);
text("X", 467, 233);
text("X", 567, 233);
text("X", 367, 333);
text("X", 467, 333);
text("X", 567, 333);
pop();

// TURN-BASED-SYSTEM

// // TURN LOOP (PART 1)
if (playerTurn >= 3) {
  playerTurn = 1
}

// RED TURN

push();
if (playerTurn === 1) {
  redClick = true;
  // noStroke();
  // fill("crimson");
  // rect(0, 0, 1000, 440); // ---> Can be replaced with "Rect();" instead
  console.log("red turn"+ playerTurn);
}
pop();

if (redClick === true) {
  // REVEAL X'ES, BASED ON TURN CAN OBSCURE CIRCLES, ISSUE MAKING OBSCURATION PERMANENT
  console.log("red click");
}

// BLUE TURN

push();
if (playerTurn === 2) {
  blueClick = true;
  // noStroke();
  // fill("blue");
  // rect(0, 0, 1000, 440); // ---> Can be replaced with "Rect();" instead
  console.log("blue turn"+ playerTurn);
}
pop();

if (blueClick === true) {
  // REVEAL CIRCLES, BASED ON TURN CAN OBSCURE X'ES, ISSUE MAKING OBSCURATION PERMANENT
  console.log("blue click");
}

}

// TURN LOOP (PART 2)
function mousePressed (){
  if (mouseButton === LEFT) {
    playerTurn++;
    // console.log("clicked once");
    if (playerTurn >= 3) {
      playerTurn = 1;
    }
  }
}

function keyCode () {
  //z
}