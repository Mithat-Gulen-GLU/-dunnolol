// ARRAYS & VARIABLES
let question = "Wie wordt [geen] euromiljonair?";
let img = [];
let buttons = [button1, button2, button3, button4];
// let mouseClick = 0;
// let questionShown = false;

function setup() {
  // BUTTONS MUST BE PLACED HERE
  button1 = createButton("A:Ikke!");
  button2 = createButton("B:Ikke!");
  button3 = createButton("C:Ikke!");
  button4 = createButton("D:Ikke!");
  button1.position(350, 250);
  button1.mousePressed(newQuestion); // BUG-UB-1
  button2.position(600, 250);
  button2.mousePressed(newQuestion); // BUG-UB-1
  button3.position(350, 300);
  button3.mousePressed(newQuestion); // BUG-UB-1
  button4.position(600, 300);
  button4.mousePressed(newQuestion); // BUG-UB-1
  createCanvas(1000, 600);
}

function draw() {
  background("orange");
  // MINECRAFT QUIZZ (THE NETHEROLOGIST EDITION™)

  // JOKE QUESTION & 5 VRAGEN MET 4 MOGELIJKE ANTWOORDEN

  // if (mouseIsPressed);{
  //   questionShown = true;
    text(question, 420, 225);
  // } else {
  //   questionShown = false;
  // }

  // VRAAG 1: WAT IS SOUL SAND? A:ZAND MET ZIEL B:ENERGIEBRON C:FOSSIELE BRANDSTOF D:EEUWIGE GEVANGENIS VOOR DE VERDOEMDEN
  // VRAAG 2: WAT MAAKT DE SOUL SAND VALLEYS? A:OORLOG B:ZONDAARS C:LIJKEN D:WITHERS
  // VRAAG 3: WIE HEEFT DE NETHER FORTRESSES OPGEBOUWD? A:ENDERMEN B:ANTIEKE BOUWERS C:PIGLINS D:ILLAGERS
  // VRAAG 4: WAT IS DE NAAM VAN DEZE WEZEN? A:GHAST B:RES ALBA VOLANS NETHERIENSIS C:RES ALBA VOLANS DOMESTICUS D:PSEUDO RES ALBA VOLANS
  // VRAAG 5: WAT IS HET VERSCHIL TUSSEN RES ALBA VOLANS NETHERIENSIS EN PSEUDO RES ALBA VOLANS? A:IK WEET HET NIET! B:F*CK Y**! C:HET IS NIET GRAPPIG! D:'Pseudo Res Alba Volans' beschrijft een lid van een soort dat zich gedraagt ​​alsof het een echte Res Alba Volans is.

  // IMAGE
  image(img[0], 450, 100, 100, 100); // BUG-IO-1
  image(img[1], 450, 100, 100, 100); // BUG-IO-1
  image(img[2], 450, 100, 100, 100); // BUG-IO-1
  image(img[3], 450, 100, 100, 100); // BUG-IO-1
  image(img[4], 450, 100, 100, 100); // BUG-IO-1
  image(img[5], 450, 100, 100, 100); // BUG-IO-1
}

function preload() {
  img[0] = loadImage("img/kapak_fotosu.png");
  img[1] = loadImage("img/res_alba_volans_netheriensis.png"); // QUESTION 4
  img[2] = loadImage("img/who_built_this.png"); // QUESTION 3
  img[3] = loadImage("img/what_created_these.png"); // QUESTION 2
  img[4] = loadImage("img/what_is_soul_sand.png"); // QUESTION 1
  img[5] = loadImage("img/pseudo_res_alba_volans_domesticus.png"); // QUESTION 5
}

// QUESTIONS
function newQuestion() {
  button1.html("testing"); // BUG-UB-1
  button2.html("testing2"); // BUG-UB-1
  button3.html("testing3"); // BUG-UB-1 
  button4.html("testing4"); // BUG-UB-1
}

// function keyPressed() {
//   if (mouseIsPressed === true) {
//     mouseClick++;
//     console.log("+1");
//     if (mouseClick >= 6) {
//       mouseClick = 0;
//       console.log("Back to 0");
//     }
//   }
// }

// BUGFIXING

// WEIRD CONSOLE BUG, "button1" IS NOT DEFINED?????

// IMAGES OVERLAPPING = BUG-IO-1
// UNVERSAL BUTTON CLICK CHECK = BUG-UB-1 // MIGHT BECOME A [DESIGN] FEATURE
// BUTTON TEXT UNCHANGING = BUG-BT-1 // FIXED
// BUTTON OUT OF BOUNDS = BUG-OB-1 // FIXED
// FOTO NOT LOADING = BUG-FL-1 // FIXED

// BRAINSTORMING
// I WANT TO USE THE "newQuestion" FUNCTION TO CYCLE THROUGH THE 6 QUESTIONS
// I AM THINKING OF WAYS TO MAKE THE TEXT CHANGE DEPENDENT ON VARIABLES INSIDE OF IF-LOOPS THAT CHECK FOR [MOUSE] BUTTON CLICKS