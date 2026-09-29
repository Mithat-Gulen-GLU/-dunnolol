// VARIABLES & ARRAYS
// let number = 25;

// FORMS (1)
let rectangles = []
let circles = []
let triangles = []
let ellipses = []

// POSITION (1)
let spawnPositionX = []
let spawnPositionY = []

// MOVEMENT (1)
let speed = [5, 10, 15, 20]

// COLOURS (1)
let colours = ["red", "yellow", "green", "black", "gray", "blue", "purple", "orange"]

function setup() {
  createCanvas(800, 600);

  // POSITION (2)
  spawnPositionX.push(int(random(0, 780)));
  spawnPositionY.push(int(random(0, 580)));

  // MOVEMENT (2)

  // COLOURS (2)
}

function draw() {
  background(220);

  // PROSEDURAL GENERATION
  for (let index = 0; index < 25; index++) {
    rect([spawnPositionX], [spawnPositionY], 20, 20); // BUG-F1
  }

  // BUG FIXING
  // FOR LOOP MUST GENERATE 25 RECTANGLES AT SEPERATELY RANDOMIZED SPOTS = BUG-F1
}

// ACTIVATION-BY-BACKSPACE
// function keyPressed() {
//   if (keyCode === BACKSPACE) {
//     spawnPositionX.push(int(random(0, 780)));
//     spawnPositionY.push(int(random(0, 580)));
//   }
// }
