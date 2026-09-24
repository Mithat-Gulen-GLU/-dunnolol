// TIC TAC TOE

let playerTurn = 1;
// let mouseClick = 0;
let blueClick = false;
let redClick = false;

// let colors = ["black", "blue", "red"]; // FIRST ARRAY ATTEMPT
// let cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];

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

// RED TURN (1)
if (redClick === true && blueClick === false) {
  if  (
      mouseX > cellXpositie && mouseX < cellXpositie + cellWidth &&
      mouseY > cellYpositie && mouseY < cellYpositie + cellHeight && 
      mouseButton === LEFT // && mouseClick === 1
      ) {
      // console.log(colors[2]);
      fill("red");
      rect(cellXpositie, cellYpositie, cellWidth, cellHeight);
  }
}
// PROBLEMS WITH THE CODE ABOVE: 1 - COLOR CHANGE IS TEMPORARY 2 - COLOR CHANGE IS INCONSISTENT 
// 3 - COLOR CHANGE TRIGGERS EVEN IF I CLICK OUT OF BOUNDS 4 - COLOR CHANGE STOPS IF I STOP HOVERING OVER THE CELL WITH MY CURSOR
// 5 - I KNOW WHAT I AM DOING TO SOME DEGREE, BUT I DON'T HAVE THE WHY BEHIND IT, I THINK

// BLUE TURN (1)

// TURN LOOP (PART 1)
if (playerTurn >= 3) {
  playerTurn = 1
}

}

// RED TURN (2)
function mousePressed() {
push();
if (playerTurn === 1) {
  redClick = true;
  blueClick = false;
  // console.log("red turn"+ playerTurn);
}
pop();

// BLUE TURN (2)
push();
if (playerTurn === 2) {
  blueClick = true;
  redClick = false;
  // console.log("blue turn"+ playerTurn);
}
pop();

// TURN LOOP (PART 2)
  if (mouseButton === LEFT) {
    playerTurn++;
    mouseClick++;
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