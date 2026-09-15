function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

  let score = 90;
  // random(score = score >= 1 || score <= 100) // [Deze code werkt niet, en ik weet niet hoe ik het can behandelen]

  if (score >= 90) {
    fill(0, 255, 0);
    text("Uitstekent!", 20, 20);
  } else if (score >= 70 && score <= 89 ) {
    fill(255, 255, 0);
    text("Goed gedaan!", 20, 40);
  } else if (score >= 50 && score <= 69) {
    fill(255, 125, 0);
    text("Voldoende...", 20, 60);
  } else {
    fill(255, 0, 0);
    text("Onvoldoende...", 20, 80);
  }
}