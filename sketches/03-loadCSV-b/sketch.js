let data;
let valeurs
let labels;
let t = 0;
let w = 2000;

function preload() {
  data = loadTable(
    'data2.csv',
    'csv',
    'header');
}

function setup() {
  createCanvas(800, 600);
  // donne le nom des colonnes
  console.log(data.columns);
  // donne le nombre de lignes
  console.log(data.getRowCount());
  // donne les valeurs de la colonne Mass (Tt)
  years = data.getColumn("Year");
  exajouls = data.getColumn("Exajoule (EJ)");
  console.log(years);
  console.log(exajouls);
      noStroke();

}

function draw() {
  background(200);
  // déplacement du canvas avec translate pour faire défiler le diagramme
  let canvasX = map(mouseX,0,width,-20,w-width+20);
  translate(-canvasX,0);
  // boucle
  for (let i = 0; i < exajouls.length; i++) {
    let annee = years[i];
    let posx = map(annee, 1750, 2008, 20, w);
    fill(i * 2, 0, 0);
    rect(posx, height - exajouls[i],1, exajouls[i]);
    push();
    textAlign(RIGHT);
    textSize(8);
    translate(posx, height - exajouls[i]-5);
    rotate(radians(45));
    text(annee, 0,0);
    pop();
  }
}