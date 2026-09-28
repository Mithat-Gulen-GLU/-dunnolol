let color = ["crimson", "gold", "green"]
let index = 0;

function setup() {
  createCanvas(1500, 670);

//   for (let i = 5; i = 1; i--) {
//     console.log(i);    
//   }
}

function draw() {
  background(220);

  for (let i = 0; i <= 2; i++) {
    circle(30, 30 + (i * 35), 30);
    fill(color[i]);
  }

  while (index < 5) {
  rect(50 + (index * 50), 50, 50, 50);
  index++
  }
}
