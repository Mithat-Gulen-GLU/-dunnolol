// ARRAYS, DATA-OBJECTS & VARIABLES
// let radiance = 0;
let imagesPet = []; // necessary for pet states
let itemsShop = []; // necessary for shop items
let width = 100; // necessary for stat bars
let shopVisible  = false; // necessary for shop loop
let timeElapsed = 0; // necessary for time calculation
let money = 0; // necessary for money gain and shop loop
const maxStats = 100; // cap for stat bars

let stats = {
  health: maxStats,       // stats
  energy: maxStats,       // stats
  happiness: maxStats,    // stats
  hunger: maxStats        // stats
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

  let shopButton = createButton("Shop"); // shop button, opens up the show when clicked
  shopButton.position(700, 20);
  shopButton.mousePressed(shop);
  shopButton.style("background-color", "gold");
  // shopButton.show();
  // shopButton.hide();

  frameRate(30);
}

function draw() {
  background(220);

  image(imagesPet[0], 300, 200, 100, 100); // shows the image of the pet (alive)
  push();
  textSize(24);
  text("Keep Jabba Alive Challenge", 150, 40); // name of the game
  pop();

  timeElapsed += deltaTime; // time calculation
  if (timeElapsed >= 10000 && stats[key] != 0) { // time calculation and code triggering based on any of the stat bars hitting 0
    money += 10; // money gain
    timeElapsed = 0; // resetting time calculation
  }

  updateStats(); // runs the codes having to do with the stat bars creation, stat decaying, and the stat increment per mouse click

  if (shopVisible) { // shop
    rect(500, 40, 50, 50);
    rect(560, 40, 50, 50);
    rect(620, 40, 50, 50);
    rect(680, 40, 50, 50);
    image(itemsShop[0], 500, 40, 50, 50); // item 1: soap
    image(itemsShop[1], 560, 40, 50, 50); // item 2: dawgbone
    image(itemsShop[2], 620, 40, 50, 50); // item 3: twinkle, the little star
    image(itemsShop[3], 680, 40, 50, 50); // item 4: han solo stone
  }

  push();
  textSize(24);
  text("Items:", 20, 380); // shows items on the item bar
  text("Money:" + money, 120, 380); // shows amount of money
  fill("gold");
  rect(0, 400, 800, 200); // item bar (bottom of the screen)
  pop();

  push();
  textSize(24);
  image(itemsShop[0], 150, 500, 50, 50);
  image(itemsShop[1], 300, 500, 50, 50);
  image(itemsShop[2], 450, 500, 50, 50);
  image(itemsShop[3], 600, 500, 50, 50);
  text("0x", 220, 530); // shows the ammount of item 1 you have
  text("0x", 370, 530); // shows the ammount of item 2 you have
  text("0x", 520, 530); // shows the ammount of item 3 you have
  text("0x", 670, 530); // shows the ammount of item 4 you have
  pop();
}

// FUNCTIONS
function mousePressed() {
  if (mouseButton == LEFT) {
    for (let i = 0; i < Object.keys(stats).length; i++) { // increases stats by 5 per mouse click, used to keep the pet alive
      let key = Object.keys(stats)[i];
      stats[key] += 5;
      if (stats[key] > maxStats) {
        stats[key] = maxStats; // makes it so that stats cannot exceed the 100/100 stat cap
      }
    }
  }
}

function updateStats() {  
  for (let i = 0; i < Object.keys(stats).length; i++) {
    let key = Object.keys(stats)[i];
    stats[key] -= decreases[key] * deltaTime / 1000; // decreases stats with the passage of time, "key" refers to the entire list of elements within the data object of stats
    if (stats[key] < 0) {
      stats[key] = 0;
    }
    push();
    rect(20, 20 + (30 * i), 100, 20); // bars being given colours based on position within the data object
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
  //  } else if (mouse hovers over a shop item && clicks) {
  //    purchase the shop item (shop item counter +1)
  //  }
  //
  //  if (shop item counter +1) {
  //    inform the texts in draw so that they update and become, for instance, "1x" or "27x"
  //  }
}

// BUGFIXING
// MONEY IS GIVEN IF EVEN ONE BAR IS NOT ZERO, I WANT IT TO STOP BASED ON DEATH SCREEN = DESIGN CHOICE
// SHOP BUTTON  TRIGGERS FEEDING PET CODE = BUG-SPF-1
// CLICKS DON'T ALWAYS REGISTER = BUG-CR-1 // FIXED

// BRAINSTORMING
// I HAVE TO ADD LOCAL STORAGE

// I WANT TO MAKE IT SO THAT HOVERING OVER SHOP ITEMS SHOWS THEIR DESCRIPTION:
// STEP 1: I CAN BUTTONIZE MY RECTANGLES WITH AABB CHECKS
// STEP 2: BASED ON MOUSE INPUT, I CAN INCREASE THE STATS IN AN ARRAY/DATA OBJECT CALLED "shopItemCounter"
// STEP 3: I CAN THEN UPDATE THE STATS WITHIN THE ITEM BAR AT THE BOTTOM OF THE SCREEN

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