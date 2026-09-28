// let a = random(0, 100);
// let b = random(0, 100);
let colours = ["gray", "white"]

function setup() {
  createCanvas(1000, 670);
}

function draw() {
  background(220);
  // if (keyCode === 32) {
  //   text("Waarde a:" + a, 20, 20);
  //   text("Waarde b:" + b, 20, 40);  
  // }

  // if (a > b) {
  //   text("a is groter dan b");
  // } else if (a < b) {
  //   text("a is kleiner dan b");
  // } else {
  //   text("a en b zijn gelijk");
  // }

for (let pyramid = 0; pyramid < 12; pyramid++) {
  rect(100, 50 + (pyramid * 20), 50 + (pyramid * 50));
  if (pyramid >= 12) {
    pyramid--;
  }
}

for (let pyramid = 11; pyramid < 0; pyramid--) {
  rect(100);
  
}
}