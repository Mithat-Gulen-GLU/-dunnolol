// ARRAYS & VARIABLES
let image1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // MINECRAFT QUIZZ (THE NETHEROLOGIST EDITION™)
  // JOKE QUESTION (WIE WILL GEEN MILJAARDEN HEBBEN? A:IKKE! B:IKKE! C:IKKE! D:IKKE!)
  // 5 VRAGEN MET 4 MOGELIJKE ANTWOORDEN
  // GELUID & IMAGE
  image(image1, 0, 0, 100, 100)  
}

function preload() {
  image1 = loadImage("kapak_fotosu.png"); // BUG-FL-1
}

// BUGFIXING
// FOTO NOT LOADING = BUG-FL-1