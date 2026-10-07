// ARRAYS & VARIABLES
let img = [];
let buttons = [];

function setup() {
  // BUTTONS MUST BE PLACED HERE
  let button = createButton("Touch me"); // BUG-BOB-1
  button.position(20, 20);
  createCanvas(800, 600);
}

function draw() {
  background(220);
  // MINECRAFT QUIZZ (THE NETHEROLOGIST EDITION™)

  // JOKE QUESTION (WIE WORDT [GEEN] EUROMILJONAIR? A:IKKE! B:IKKE! C:IKKE! D:IKKE!)

  // 5 VRAGEN MET 4 MOGELIJKE ANTWOORDEN
  // VRAAG 1: WAT IS SOUL SAND? A:ZAND MET ZIEL B:ENERGIEBRON C:FOSSIELE BRANDSTOF D:EEUWIGE GEVANGENIS VOOR DE VERDOEMDEN
  // VRAAG 2: WAT MAAKT DE SOUL SAND VALLEYS? A:OORLOG B:ZONDAARS C:LIJKEN D:WITHERS
  // VRAAG 3: WIE HEEFT DE NETHER FORTRESSES OPGEBOUWD? A:ENDERMEN B:ANTIEKE BOUWERS C:PIGLINS D:ILLAGERS
  // VRAAG 4: WAT IS DE NAAM VAN DEZE WEZEN? A:GHAST B:RES ALBA VOLANS NETHERIENSIS C:RES ALBA VOLANS DOMESTICUS D:PSEUDO RES ALBA VOLANS
  // VRAAG 5: WAT IS HET VERSCHIL TUSSEN RES ALBA VOLANS NETHERIENSIS EN PSEUDO RES ALBA VOLANS? A:IK WEET HET NIET! B:F*CK Y**! C:HET IS NIET GRAPPIG! D:'Pseudo Res Alba Volans' beschrijft een lid van een soort dat zich gedraagt ​​alsof het een echte Res Alba Volans is.

  // GELUID & IMAGE
  image(img[0], 350, 60, 100, 100);
  image(img[1], 100, 100, 100, 100);
  image(img[2], 0, 0, 100, 100);
  image(img[3], 400, 20, 100, 100);
  image(img[4], 0, 300, 100, 100);
  image(img[5], 300, 300, 100, 100);
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
// function question() { // PARAMETER TO BE FILLED WITH CODE THAT WRITES NEXT QUESTION IF CURRENT ONE IS ANSWERED
//   z
// }

// BUGFIXING
// BUTTON OUT OF BOUNDS = BUG-OB-1 // FIXED
// FOTO NOT LOADING = BUG-FL-1 // FIXED

// let test = {
//   naam: "m",
//   adresgegevens: {
//     straat: "bloemerslaan",
//     nummer: 723,
//     postcode: "923JR"
//   },
//   broers: ["ouder broer", "kleine broer"]
// }