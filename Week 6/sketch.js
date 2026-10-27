// ARRAYS, DATA-OBJECTS & VARIABLES
// let radiance = 0;
let imagesPet = []; // necessary for pet states
let itemsShop = []; // necessary for shop items
let width = 100; // necessary for stat bars
let shopVisible  = false;  
const maxStats = 100; // cap for stat bars
let stats = {
  health: maxStats,
  energy: maxStats,       // stats
  happiness: maxStats,
  hunger: maxStats
};

let decreases = { // sets the amount by which stats decrease with the passage of time
  health: 1,
  energy: 0.5,
  happiness: 1.5,
  hunger: 1,
}

function setup() {
  createCanvas(800, 600);

  background("gray")

  let button = createButton("Shop"); // shop button, opens up the show when clicked
  button.position(700, 20);
  button.mousePressed(shop);
  button.style("background-color", "gold");
  // button.show
  // button.hide

  frameRate(30);
}

function draw() {
  background(220);

  image(imagesPet[0], 300, 200, 100, 100); // shows the image of the pet being alive
  push();
  textSize(24);
  text("Keep Jabba Alive Challenge", 150, 40);
  pop();

  // push();
  // noStroke();
  // fill("Orange");
  // circle(350, 200, 50);            // tried to make a radiant sun behind the pet with these lines of code, didn't work, will get to it later
  // fill("Gold");
  // circle(350, 200, 50 + radiance);
  // pop();
  updateStats(); // runs the codes having to do with the creation of stat rectangles, stat decaying, and the stat increment per mouse click

  if (shopVisible) {
    rect(500, 40, 50, 50);
    rect(560, 40, 50, 50);
    rect(620, 40, 50, 50);
    rect(680, 40, 50, 50);
    image(itemsShop[0], 500, 40, 50, 50);
    image(itemsShop[1], 560, 40, 50, 50);
    image(itemsShop[2], 620, 40, 50, 50);
    image(itemsShop[3], 680, 40, 50, 50);
  }

  push();
  textSize(24);
  text("Items:", 20, 380);
  fill("gold");
  rect(0, 400, 800, 200);
  pop();

  push();
  textSize(24);
  image(itemsShop[0], 150, 500, 50, 50);
  image(itemsShop[1], 300, 500, 50, 50);
  image(itemsShop[2], 450, 500, 50, 50);
  image(itemsShop[3], 600, 500, 50, 50);
  text("0x", 220, 530);
  text("0x", 370, 530);
  text("0x", 520, 530);
  text("0x", 670, 530);
  pop();
}

// FUNCTIONS
function mousePressed() {
  if (mouseButton == LEFT) {
    for (let i = 0; i < Object.keys(stats).length; i++) { // increases stats by 5 per mouse click, used to keep the pet alive
      let key = Object.keys(stats)[i];
      stats[key] += 5;
      if (stats[key] > maxStats) {
        stats[key] = maxStats; // makes it so that stats cannot exceed the 100/100 limit
      }
    }
  }
}

function updateStats() {  
  for (let i = 0; i < Object.keys(stats).length; i++) {
    let key = Object.keys(stats)[i];
    stats[key] -= decreases[key] * deltaTime / 1000; // decreases stats with the passage of time, "key" refers to the entire list of elements within the array
    if (stats[key] < 0) {
      stats[key] = 0;
    }
    push();
    rect(20, 20 + (30 * i), 100, 20); // bars being given colours based on position within the array
      if (i == 0){
        fill("red");
      }
      else if (i == 1){
        fill("gold");
      }
      else if (i == 2) {
        fill("green")
      }
      else if (i == 3){
        fill("blue");
      }
    rect(20, 20 + (30 * i), 100 * (stats[key] / maxStats), 20); // stat bars being made out of rectangles to represent 100/100 stats
    pop();

    if (stats[key] == 0) {
      text("Jabba is dead bro...", 300, 175); // shows the image where the pet is dead depending on any stats being equal to 0 with a death message
      image(imagesPet[1], 300, 200, 100, 100);
    }
  }
}

function preload() { // necessary for pet state images
  // pet states
  imagesPet[0] = loadImage("img/pet.png"); // Pet is alive
  imagesPet[1] = loadImage("img/petDead.png"); // pet is dead

  // Shop Items
  itemsShop[0] = loadImage("img/shopItems/shopItemOneSoap.png"); // item 1, cleans pet
  itemsShop[1] = loadImage("img/shopItems/shopItemTwoDawgbone.png"); // item 2, plays games with pet
  itemsShop[2] = loadImage("img/shopItems/shopItemThreeTwinkleTheLittleStar.png") // item 3, makes pet fall asleep
  itemsShop[3] = loadImage("img/shopItems/ShopItemFourHanSoloStone.png") // item 4, makes pet immune to hunger
}

function shop() { // shop function, necessary for the shop button
   if (shopVisible == true) {
    shopVisible = false;
   } else {
    shopVisible = true;
   }

  //  if (mouse hovers over a shop item) {
  //    show item description
  //  } else if (mouse hovers over a shop item and clicks) {
  //    purchase the shop item (shop item counter +1)
  //  }
  //
  //  if (shop item counter +1) {
  //    inform the texts in draw so that they update and become, for instance, "1x" or "27x"
  //  }
}

// BUGFIXING
// SHOP BUTTON  TRIGGERS FEEDING PET CODE
// CLICKS DON'T ALWAYS REGISTER = BUG-CR-1 // FIXED

// BRAINSTORMING
// I WANT TO MAKE IT SO THAT THE LONGER THE PET IS ALIVE, THE MORE YOU EARN COINS
// I WANT TO MAKE IT SO THAT HOVERING OVER SHOP ITEMS SHOWS THEIR DESCRIPTION
// I WANT TO GIVE HUNGER IMMUNITY IF JABBA EATS HAN SOLO STONE, HAN SOLO STONE IS A SHOP ITEM THAT IS BOUGHT WITH 100 GOLD

// SETUP
// getItem and storeItem
// if (getItem("honger") == null) {
// honger = 100
// } else{
// honger = getItem("honger");
// honger 100;
// }

// DRAW
// storeItem("honger", honger);