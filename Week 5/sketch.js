// ARRAYS & VARIABLES
let img;

function setup() {
  // BUTTONS MUST BE PLACED HERE
  let button = createButton("Touch me"); // BUG-BOB-1
  createCanvas(800, 600);
}

function draw() {
  background(220);
  // button.position(20, 20); // BUG-OB-1
  // MINECRAFT QUIZZ (THE NETHEROLOGIST EDITION™)
  // JOKE QUESTION (WIE WILL GEEN MILJAARDEN HEBBEN? A:IKKE! B:IKKE! C:IKKE! D:IKKE!)
  // 5 VRAGEN MET 4 MOGELIJKE ANTWOORDEN
  // GELUID & IMAGE
  image(img, 350, 60, 100, 100)  
}

function preload() {
  img = loadImage("img/kapak_fotosu.png");
  // img = loadImage(img/res_alba_volans_netheriensis.png);
  // img = loadImage(img/who_built.png);
}

// QUESTIONS
// function question() { // PARAMETER TO BE FILLED WITH CODE THAT WRITES NEXT QUESTION IF CURRENT ONE IS ANSWERED
//   z
// }

// BUGFIXING
// BUTTON OUT OF BOUNDS = BUG-OB-1
// FOTO NOT LOADING = BUG-FL-1 // FIXED