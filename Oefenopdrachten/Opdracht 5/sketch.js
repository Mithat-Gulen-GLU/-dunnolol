let a = random(0, 100);
let b = random(0, 100);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (keyCode === 32) {
    text("Waarde a:" + a, 20, 20);
    text("Waarde b:" + b, 20, 40);  
  }

  // if (a > b) {
  //   text("a is groter dan b");
  // } else if (a < b) {
  //   text("a is kleiner dan b");
  // } else {
  //   text("a en b zijn gelijk");
  // }
}