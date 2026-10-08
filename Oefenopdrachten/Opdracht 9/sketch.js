let consoleMessages = false;
let timer = 0;
let car = {
  brand: "volvo",
  colour: "blue",
  speed: 120
};

let player = {
  name: "sam",
  age: "21"
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(car.colour);
  circle(100, 100, 50);
  player.age = 22;
  player.score = 100;
  delete player.score
  if (consoleMessages === false) {
   console.log(player);
   console.log(car); 
  }
}

function keyPressed() {
  if(keyCode === ENTER) {
    timer + 1;
    if (timer > 0) {
      consoleMessages = true
    }
  }
}

// let test = {
//   naam: "m",
//   adresgegevens: {
//     straat: "bloemerslaan",
//     nummer: 723,
//     postcode: "923JR"
//   },
//   broers: ["ouder broer", "kleine broer"]
// }