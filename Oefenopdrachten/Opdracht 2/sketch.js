function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

// Hier staat de Variabelen
let x = 100;
let a = 20;
let b = 10;

// Dit is het Greeting Variabel
let greeting = "Hello World!";

// Deze vier Variabelen zijn speciaal doordat wij hen later gaan defineren, ze hebben eigenlijk geen waardes om zijn eigen
let optellen;
let aftrekken;
let vermeningvuldigen;
let delen;

// Hier defineren wij de vorige fier Variabelen door specifieke situaties met de twee variabelen "a" en "b" te gebruiken zoals optellen, aftrekken, etc.
optellen = a + b;
aftrekken = a - b;
vermeningvuldigen = a * b;
delen = a / b;

text(x, 20, 20);

// Hier tonen wij het Greeting Variabel
text(greeting, 20, 60);

// Hier tonen wij het resultaten van onze rekeningen
text("Optellen:" + optellen, 20, 100);
text("Aftrekken:" + aftrekken, 20, 120);
text("Vermeningvuldigen:" + vermeningvuldigen, 20, 140);
text("Delen:" + delen, 20, 160);
}