let auto1positie = 0;
let timer = 0;
let wolk1positie = 0;
let wolk2positie = 0;
let zonpostie = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(173, 216, 230);
  // if (timer >= 800) {
  //   background(70, 70, 100);
  // }

  // push();
  // fill("black");
  // text("timer:" + timer, 20, 40);
  // text("auto1positie:" + auto1positie, 20, 20);
  // text("wolk1positie:" + wolk1positie, 20, 60);
  // text("wolk2positie:" + wolk2positie, 20, 80);
  // text("zonpositie:" + zonpostie, 700, 20);
  // pop();

  // DE GROND
  push();
  noStroke();
  fill("green");
  rect(0, 200, 800, 600);
  pop();

  // DE ZON
  push();
  zonpostie = zonpostie + 0.25;
  noStroke();
  fill(255, 255, 0);
  circle(zonpostie + 200, 40, 40);
  pop();
  if (zonpostie > 700) {
    zonpostie = -400;
  }

  // AUTOBAAN
  push();
  fill(0, 0, 0);
  rect(0, 220, 800, 20);

  fill(225, 223, 0);
  rect(20, 227.5, 40, 5);
  rect(120, 227.5, 40, 5);
  rect(220, 227.5, 40, 5);
  rect(320, 227.5, 40, 5);
  rect(420, 227.5, 40, 5);
  rect(520, 227.5, 40, 5);
  rect(620, 227.5, 40, 5);
  rect(720, 227.5, 40, 5);
  pop();

  // AUTO'S
  auto1positie++;
  if (auto1positie > 800) {
    auto1positie = -200;
  }
  // if (auto1snelheid > 800) {
  //   auto1snelheid = 0;
  // }
  push();
  noStroke();
  fill(0, 0, 0);
  rect(auto1positie + 20, 200, 40, 20); // DE AUTO

  fill(128, 128, 128);
  circle(auto1positie + 30, 220, 20); // WHEEL 1
  circle(auto1positie + 50, 220, 20); // WHEEL 2
  pop();

  // WOLKEN
  push();
  wolk1positie = wolk1positie - 0.5;
  wolk2positie = wolk2positie - 0.5;
  if (wolk1positie < -400) {
    wolk1positie = 800;
  }
  if (wolk2positie < -200) {
    wolk2positie = 800;
  }
  noStroke();
  fill(255, 255, 255);
  circle(wolk1positie + 300, 40, 20); // WOLK 1
  circle(wolk1positie + 290, 45, 20); // WOLK 1
  circle(wolk1positie + 310, 45, 20); // WOLK 1
  circle(wolk2positie + 90, 50, 20); // WOLK 2
  circle(wolk2positie + 110, 50, 20); // WOLK 2
  circle(wolk2positie + 100, 55, 20); // WOLK 2
  pop();

  // VERKEERSLICHT
  noStroke();
  fill(128, 128, 128);
  rect(750, 145, 10, 40); // PAAL
  rect(752.5, 185, 5, 10); // PAAL
  rect(750, 195, 10, 5); // PAAL

  // COLD WAR ERA CODE
  timer++;
  if (timer > 800) {
  timer = 0;
  }
  if (timer > 0 && timer < 400) {
    fill("green");
  circle(755, 180, 5); // GROEN
  }
  if (timer > 400 && timer < 600) {
    fill("yellow");
  circle(755, 165, 5); // GEEL
  }
  if (timer > 600 && timer < 800) {
    fill("red");
  circle(755, 150, 5); // ROOD
  }

  // MODERNIZED CODE
  // if(keyCode === 13) {
  //   fill("green");
  //   circle(755, 180, 5); // GROEN
  // }
  // if (keyCode === 13){
  //   fill("yellow");
  //   circle(755, 165, 5); // GEEL
  // }
  // if (keyCode === 13){
  //   fill("red");
  //   circle(755, 150, 5); // ROOD
  // }

  // BERGEN
  push();
  noStroke();
  fill(70, 70, 100);
  triangle(150, 200, 200, 100, 250, 200); // BERG 1
  triangle(250, 200, 300, 100, 350, 200); // BERG 2
  triangle(350, 200, 400, 100, 450, 200); // BERG 3

  fill(225, 232, 255);
  triangle(190, 120, 200, 100, 210, 120); // PIEK 1
  triangle(290, 120, 300, 100, 310, 120); // PIEK 2
  triangle(390, 120, 400, 100, 410, 120); // PIEK 3
  pop();

  // BOMEN
  push();
  noStroke();
  fill(100, 42, 42);
  rect(600, 180, 5, 20);
  rect(600, 400, 5, 20);

  fill(0, 100, 0);
  triangle(595, 400, 602, 360, 610, 400);
  triangle(595, 180, 602, 140, 610, 180);
  pop();

  // text("deneme", 20, 50);
  // COLOUR TEST
  // fill();
  // rect(20, 20, 5, 5);
}