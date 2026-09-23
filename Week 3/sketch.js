// TIC TAC TOE

let playerTurn = 1;
let blueClick = false;
let redClick = false;

// let testCellXPositie = 0;
// let testCellYPositie = 0;
// let testCellWidth = 50;
// let testCellHeight = 50;

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

// let winCondition = false;
// let drawCondition = false;

function setup() {
  createCanvas(1000, 440);
}

function draw() {
  // BACKROUND
  background("gray");

  push();
  fill("purple");
  rect(300, 50, 350, 350);
  pop();

  push();
  if (playerTurn === 1) {
    fill("crimson");
    rect(0, 0, 1000, 440);
    push();
    fill("purple");
    rect(300, 50, 350, 350);
    pop();
  }

  if (playerTurn === 2) {
    fill("blue");
    rect(0, 0, 1000, 440);
    push();
    fill("purple");
    rect(300, 50, 350, 350);
    pop();
  }
  pop();

// MOUSE POSITION
  circle(mouseX, mouseY, 50);

// CELLS
push();
fill(0, 0, 0);
rect(cell1, cellXpositie, cellYpositie, cellWidth, cellHeight);
rect(cell2, cellXpositie + 100, cellYpositie, cellWidth, cellHeight);
rect(cell3, cellXpositie + 200, cellYpositie, cellWidth, cellHeight);
rect(cell4, cellXpositie, cellYpositie + 100, cellWidth, cellHeight);
rect(cell5, cellXpositie + 100, cellYpositie + 100, cellWidth, cellHeight);
rect(cell6, cellXpositie + 200, cellYpositie + 100, cellWidth, cellHeight);
rect(cell7, cellXpositie, cellYpositie + 200, cellWidth, cellHeight);
rect(cell8, cellXpositie + 100, cellYpositie + 200, cellWidth, cellHeight);
rect(cell9, cellXpositie + 200, cellYpositie + 200, cellWidth, cellHeight);

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

// TEST CELL
// rect(testCellXPositie, testCellYPositie, testCellWidth, testCellHeight);

// if  (
//       mouseX > testCellXPositie && mouseX < testCellXPositie + testCellWidth &&
//       mouseY > testCellYPositie && mouseY < testCellYPositie + testCellHeight
// ) {
//   fill("green");
// } else {
//   fill("gold");
// }

// TURN-BASED-SYSTEM

// TURN LOOP (PART 1)
if (playerTurn >= 3) {
  playerTurn = 1
}

}

// RED TURN

function mousePressed() {
push();
if (playerTurn === 1) {
  redClick = true;
  // console.log("red turn"+ playerTurn);

// if(redClick === true) { 
//   if  (
//         mouseX > cellXpositie && mouseX < cellXpositie + cellWidth &&
//         mouseY > cellYpositie && mouseY < cellYpositie + cellHeight
//       ){
//         fill(cell1 + "crimson");
//       }
// }
}
pop();

// BLUE TURN
push();
if (playerTurn === 2) {
  blueClick = true;
  // console.log("blue turn"+ playerTurn);

// if  (
//       mouseX > cellXpositie && mouseX < cellXpositie + cellWidth &&
//       mouseY > cellYpositie && mouseY < cellYpositie + cellHeight
//     ) {
//   fill(cell1 + "blue");
// }
}
pop();

// TURN LOOP (PART 2)
  if (mouseButton === LEFT) {
    playerTurn++;
    // console.log("clicked once");
    if (playerTurn >= 3) {
      playerTurn = 1;
    }
  }
}

// NG+
// if (newGamePlus button clicked === true) {
//   newGamePlus + 1;
//   if (newGamePlus >= 2) {
//     newGamePlus = 0;
//   }
// }
// if (newGamePlus === 1) {
//   restart the game
// }