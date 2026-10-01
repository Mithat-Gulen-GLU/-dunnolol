// VARIABLES & ARRAYS:

// FORMS ADDED:
// RECTANGLES
// CIRCLES
// ELLIPSES
// TRIANGLES (SCRAPPED, REASON = IMPOSSIBLE TO BALANCE SIZE)
// HEXAGONS (SCRAPPED, REASON = IMPOSSIBLE TO SHAPE AN ELLIPSE INTO A HEXAGON)

// COLOURS: (1)
let colours = ["red", "yellow", "green", "white", "gray", "blue", "purple", "orange"];

function setup() { // SETUP FUNCTION
  createCanvas(800, 600);

  // GENERATION SPEED:
  frameRate(1);
}

function draw() { // DRAW FUNCTION
  background(0);

  // PROSEDURAL GENERATION:

  // RECTANGLES:
  push();
  noStroke();
  for (let index = random(1, 25); index < 25; index++) {
    fill(random(colours));
    rect(random(20, 780), random(20, 580), 20, 20);
  }
  pop();

  // CIRCLES:
  push();
  noStroke();
  for (let index2 = random(1, 25); index2 < 25; index2++) {
    fill(random(colours));
    circle(random(20, 780), random(20, 580), 20);
  }
  pop();

  // ELLIPSES:
  push();
  noStroke();
  for (let index3 = random(1, 25); index3 < 25; index3++) {
    fill(random(colours));
    ellipse(random(20, 780), random(20, 580), 20, 10);
  }
  pop();
}

// ACTIVATION-BY-BACKSPACE:

function keyPressed() { // BUTTON-CLICK-CHECK FUNCTION
if (keyCode === BACKSPACE) { // BUG-BC1

  // RECTANGLES:
  push();
  noStroke();
  for (let index = random(1, 25); index < 25; index++) {
    fill(random(colours));
    rect(random(20, 780), random(20, 580), 20, 20);
  }
  pop();

  // CIRCLES:
  push();
  noStroke();
  for (let index2 = random(1, 25); index2 < 25; index2++) {
    fill(random(colours));
    circle(random(20, 780), random(20, 580), 20);
  }
  pop();

  // ELLIPSES:
  push();
  noStroke();
  for (let index3 = random(1, 25); index3 < 25; index3++) {
    fill(random(colours));
    ellipse(random(20, 780), random(20, 580), 20, 10);
  }
  pop();

  spawnPositionX.push(int(random(0, 780)));
  spawnPositionY.push(int(random(0, 580)));
  }
}

// BUG FIXING:

// FOR LOOP MUST GENERATE 25 RECTANGLES AT SEPERATELY RANDOMIZED SPOTS = BUG-FL1R // FIXED
// FOR LOOP MUST GENERATE 25 CIRCLES AT SEPERATELY RANDOMIZED SPOTS = BUG-FL2C // FIXED
// CIRCLES AND RECTANGLES MUST NOT OVERLAP = BUG-OV1 // FIXED
// FORM GENERATION SPEED IS TOO FAST = BUG-GSP1 // FIXED
// BUTTON CLICK ACTIVATES THE CODE THAT GENERATES SHAPES ON TOP OF THE ALREADY ACTIVE CODE THAT GENERATES SHAPES = BUG-BC1 // IS A DESIGN CHOICE (I KNOW, CHEESY AND LAZY)
