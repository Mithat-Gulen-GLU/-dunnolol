let playerTurn = 0;
let blueClick = false;
let redClick = false;
let cellXpositie = 350;
let cellYpositie = 100;
let cellWidth = 50;
let cellHeight = 50;
let cell1; // TOP LEFT
let cell2; // TOP MIDDLE
let cell3; // TOP RIGHT
let cell4; // MIDDLE LEFT
let cell5; // MIDDLE MIDDLE
let cell6; // MIDDLE RIGHT
let cell7; // BOTTOM LEFT
let cell8; // BOTTOM MIDDLE
let cell9; // BOTTOM RIGHT
// let newGamePlus = 0;

function setup() {
  createCanvas(1000, 440);
}

function draw() {
  // BACKROUND
  background("gray");
  push();
  noStroke();
  if (playerTurn === 1) {
    fill("crimson");
    rect(0, 0, 1000, 440);
  }

  if (playerTurn === 2) {
    fill("blue");
    rect(0, 0, 1000, 440);
  }
  pop();

// TIC TAC TOE

// CELLS

push();
fill(0, 0, 0);
rect(cell1, cellXpositie, cellYpositie, 50, 50);
rect(cell2, cellXpositie + 100, cellYpositie, cellWidth, cellHeight);
rect(cell3, cellXpositie + 200, cellYpositie, cellWidth, cellHeight);
rect(cell4, cellXpositie, cellYpositie + 100, cellWidth, cellHeight);
rect(cell5, cellXpositie + 100, cellYpositie + 100, cellWidth, cellHeight);
rect(cell6, cellXpositie + 200, cellYpositie + 100, cellWidth, cellHeight);
rect(cell7, cellXpositie, cellYpositie + 200, cellWidth, cellHeight);
rect(cell8, cellXpositie + 100, cellYpositie + 200, cellWidth, cellHeight);
rect(cell9, cellXpositie + 200, cellYpositie + 200, cellWidth, cellHeight);

// rect(350, 100, 50, 50);
// rect(450, 100, 50, 50);
// rect(550, 100, 50, 50);
// rect(350, 200, 50, 50);
// rect(450, 200, 50, 50);
// rect(550, 200, 50, 50);
// rect(350, 300, 50, 50);
// rect(450, 300, 50, 50);
// rect(550, 300, 50, 50);
pop();

// CIRCLES
push();
fill("black");
circle(375, 125, 30);
circle(475, 125, 30);
circle(575, 125, 30);
circle(375, 225, 30);
circle(475, 225, 30);
circle(575, 225, 30);
circle(375, 325, 30);
circle(475, 325, 30);
circle(575, 325, 30);
// if (blueTurn === TRUE && mouse click){
//   fill("blue");
//   all the Circles ctrl+c and ctrl+v here
// }
pop();

// X'ES
push();
fill("black");
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
// if (redTurn === TRUE && mouse click){
//   fill("crimson");
//   all the X'es ctrl+c and ctrl+v here
// }
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
  // console.log("red turn"+ playerTurn);
}
pop();

if (redClick === true) {
  // REVEAL X'ES, BASED ON TURN CAN OBSCURE CIRCLES, ISSUE MAKING OBSCURATION PERMANENT
  // console.log("red click");
}

// BLUE TURN

push();
if (playerTurn === 2) {
  blueClick = true;
  // noStroke();
  // fill("blue");
  // rect(0, 0, 1000, 440); // ---> Can be replaced with "Rect();" instead
  // console.log("blue turn"+ playerTurn);
}
pop();

if (blueClick === true) {
  // REVEAL CIRCLES, BASED ON TURN CAN OBSCURE X'ES, ISSUE MAKING OBSCURATION PERMANENT
  // console.log("blue click");
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

// NG+

// if (newGamePlus button clicked) {
//   newGamePlus++;
//   if (newGamePlus >= 2) {
//     newGamePlus = 0;
//   }
// }
// if (newGamePlus === 1) {
//   echo();
// }