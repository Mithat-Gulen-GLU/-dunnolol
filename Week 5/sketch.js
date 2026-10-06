// ARRAYS & VARIABLES
// let fotographs = 
// [
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRntDZ1bpzcoDgEgEbC1KWRLEFGUA0ReP89dSwr0Y48UFTOux3FGyQfbdaa&s=10", // BUG-FL-1 // [TEMPORARILY] FIXED
//   ""
// ];
let img;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  // MINECRAFT QUIZZ (THE NETHEROLOGIST EDITION™)
  // JOKE QUESTION (WIE WILL GEEN MILJAARDEN HEBBEN? A:IKKE! B:IKKE! C:IKKE! D:IKKE!)
  // 5 VRAGEN MET 4 MOGELIJKE ANTWOORDEN
  // GELUID & IMAGE
  image(img, 350, 60, 100, 100)  
}

function preload() {
  img = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRntDZ1bpzcoDgEgEbC1KWRLEFGUA0ReP89dSwr0Y48UFTOux3FGyQfbdaa&s=10"); // BUG-FL-1 // [TEMPORARILY] FIXED
}

// QUESTIONS
// function question() { // PARAMETER TO BE FILLED WITH CODE THAT WRITES NEXT QUESTION IF CURRENT ONE IS ANSWERED
//   z
// }

// BUGFIXING
// FOTO NOT LOADING = BUG-FL-1 // [TEMPORARILY] FIXED, WILL TRY TO REPLACE THE URL WITH LOCAL SCREENSHOT