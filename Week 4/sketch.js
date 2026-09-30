// VARIABLES & ARRAYS
let shapeColour = 0;
// let number = 25;

// FORMS (1)
let rectangles = [] // RECTANGLES (1) // MAY ACTUALLY NOT BE NEEDED
let circles = [] // CIRCLES (1) // MAY ACTUALLY NOT BE NEEDED
let triangles = [] // TRIANGLES (1) // MAY ACTUALLY BE SCRAPPED
let ellipses = [] // ELLIPSES (1)
let hexagons = [] // HEXAGONS (1, EXPERIMENTAL) // MAY ACTUALLY BE SCRAPPED

// POSITION (1)
let spawnPositionX = []
let spawnPositionY = []

// MOVEMENT (1)
let speed = [5, 10, 15, 20]

// COLOURS (1)
let colours = ["red", "yellow", "green", "black", "gray", "blue", "purple", "orange"]

// NUMBER (1)
let numbers = []

function setup() {
  createCanvas(800, 600);

  // POSITION (2)
  spawnPositionX.push(int(random(0, 780)));
  spawnPositionY.push(int(random(0, 580)));

  // MOVEMENT (2)

  // COLOURS (2)

  // NUMBER (2)
  numbers.push(int(random(0, 25)));
}

function draw() {
  background(0);

  // PROSEDURAL GENERATION

  // RECTANGLES (2)
  push();
  for (let index = 0; index < 25; index++) {
    fill(colours[0]);
    rect(random(20, 780), random(20, 580), 20, 20); // BUG-SP1
  }
  pop();

  // CIRCLES (2)
  push();
  for (let index2 = 0; index2 < 25; index2++) {
    fill(colours[1]);
    circle(random(20, 780), random(20, 580), 20); // BUG-SP1
  }
  pop();

  // TRIANGLES (2, EXPERIMENTAL, MIGHT BE SCRAPPED)
  // for (let index3 = 0; index3 < 25; index3++) {
  //   triangle([spawnPositionX], [spawnPositionY], 1, 2, 3, 4);
  // }

  // ELLIPSES (2)
  push();
  for (let index4 = 0; index4 < 25; index4++) {
    fill(colours[2]);
    ellipse(random(20, 780), random(20, 580), 20, 10); // BUG-SP1
  }
  pop();

  // HEXAGONS (2, EXPERIMENTAL, MIGHT BE SCRAPPED)
  // for (let index5 = 0; index5 < 25; index5++) {
  //   ellipse(random(20, 780), random(20, 580), 20, 10, 6); // BUG-HX1
  // }

  // BUG FIXING
  // FOR LOOP MUST GENERATE 25 RECTANGLES AT SEPERATELY RANDOMIZED SPOTS = BUG-F1R // FIXED
  // FOR LOOP MUST GENERATE 25 CIRCLES AT SEPERATELY RANDOMIZED SPOTS = BUG-F2C // FIXED
  // CIRCLES AND RECTANGLES MUSN'T OVERLAP = BUG-O1 // FIXED
  // GENERATED FORMS TOO FAST = BUG-SP1
  // HEXAGONS HAVE TO HAVE 6 VERTICES, THEY DON'T HAVE 6 VERTİCES = BUG-HX1
}

// ACTIVATION-BY-BACKSPACE
// function keyPressed() {
//   if (keyCode === BACKSPACE) {
//     PER CLICK, THE POSITIONS AND THE COLOR MUST CHANGE
//     spawnPositionX.push(int(random(0, 780)));
//     spawnPositionY.push(int(random(0, 580)));
//   }
// }
