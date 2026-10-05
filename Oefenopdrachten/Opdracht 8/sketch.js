function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  tekenHuis(200, 200, 200, 200);
}

function addition(a, b) {
  return a + b; // TURNS OUT, RETURN IS ONLY FOR CALCULATING NUMBERS
}

let totaal = addition(10, 5);
console.log(totaal);

function tekenHuis(x, y, width, height) {
  rect(x, y, width, height);

  // DEUR
  rect(x + 75, y + 130, width - 150, height - 130);

  //RAMEN
  rect(x + 25, y + 25, width-150, height-150);
  rect(x + 125, y + 25, width-150, height-150);

  // DAK
  triangle(x, y, x + 100, y - 50, x + 200, y);
}