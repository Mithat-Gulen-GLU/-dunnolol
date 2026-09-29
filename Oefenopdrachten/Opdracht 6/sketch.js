// let color = ["crimson", "gold", "green"]
// let index = 0;
let colourNames = ["red", "green", "blue", "purple", "yellow"] // ENCOUNTERED A WEIRD BUG, PICKS THE ARRAY UP FROM 4 INSTEAD OF 0
let textCount = 0;

function setup() {
  createCanvas(800, 600);

//   for (let i = 5; i = 1; i--) {
//     console.log(i);    
//   }
}

function draw() {
  background(220);

  // for (let i = 0; i <= 2; i++) {
  //   circle(30, 30 + (i * 35), 30);
  //   fill(color[i]);
  // }

  // while (index < 5) {
  // rect(50 + (index * 50), 50, 50, 50);
  // index++
  // }

  for (let textCount = 0; textCount < 5; textCount++) {
    text("testing", 20, 20 + (textCount * 20));
    shift([0]); // ERASING 1'ST ITEM OF THE ARRAY, "RETURNS" IT (HE DOES NOT, WHAT A BIG FAT FUCKING THIEF!)
    push([5]); // ADDS AN ITEM AT THE END OF THE ARRAY, iT DOES NOT, WHAT A LOAD OF BULLCRAB!
    fill(colourNames[textCount]);
  }
}
