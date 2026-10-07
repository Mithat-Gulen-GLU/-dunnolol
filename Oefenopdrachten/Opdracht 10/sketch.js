let = colours["red", "crimson", "black", "white", "gray", "blue", "azure", "green", "yellow", "gold", "orange", "purple", "magenta", "turqoise", "cyan"];
let files = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];
let buttons = []; // WE'LL FOR-LOOP 10 ANIMALS IN

function setup() {

  let button = createButton("Touch me"); //
  button.position(100, 100);
  button.style("backround-color", "#107955")
  button.style("font-size", "24px");
  button.mousePressed(testFunction); //

  createCanvas(800, 400);
}

function draw() {
  background(220);

  image(img, 0, 0);

  for (let i = 0; i < colours.length; i++) {
    z
  }
}

function testFunction() {
  console.log("test succesful");
}

function preload() {
  img = loadImage("ultimate_meme_trap_card.png");
}