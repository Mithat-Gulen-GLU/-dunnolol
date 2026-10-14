// ARRAYS, DATA-OBJECTS & VARIABLES
// let radiance = 0;
let width = 100;
const maxStats = 100;
let stats = {
  health: maxStats,
  energy: maxStats,
  happiness: maxStats,
  hunger: maxStats
};

let decreases = {
  health: 1,
  energy: 0.5,
  happiness: 1.5,
  hunger: 1,
}

function setup() {
  createCanvas(800, 600);

  frameRate(30);
}

function draw() {
  background(220);

  // push();
  // noStroke();
  // fill("Orange");
  // circle(350, 200, 50);
  // fill("Gold");
  // circle(350, 200, 50 + radiance);
  // pop();

  updateStats();
}

// FUNCTIONS
function mousePressed() {
  if (mouseButton == LEFT) {
    for (let i = 0; i < Object.keys(stats).length; i++) {
      let key = Object.keys(stats)[i];
      stats[key] += 5;
      if (stats[key] > maxStats) {
        stats[key] = maxStats;
      }
    }
  }
}

function updateStats() {  
  for (let i = 0; i < Object.keys(stats).length; i++) {
    let key = Object.keys(stats)[i];
    stats[key] -= decreases[key] * deltaTime / 1000;
    if (stats[key] < 0) {
      stats[key] = 0;
    }
    push();
    rect(20, 20 + (30 * i), 100, 20);
      if (i == 0){
        fill("red");
      }
      else if (i == 1){
        fill("gold");
      }
      else if (i == 2) {
        fill("green")
      }
      else if (i == 3){
        fill("blue");
      }
    rect(20, 20 + (30 * i), 100 * (stats[key] / maxStats), 20);
    pop();

    if (stats[key] == 0) {
      text("You dead bro", 250, 250);
    }
  }
}

// BUGFIXING
// CLICKS DON'T ALWAYS REGISTER = BUG-CR-1 // FIXED