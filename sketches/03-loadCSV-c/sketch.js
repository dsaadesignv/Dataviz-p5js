let data;
let valeurs
let labels;
let t = 0;
// largeur du diagramme
let w = 3000;

function preload() {
  data = loadTable(
    'data2.csv',
    'csv',
    'header');
}

function setup() {
  createCanvas(windowWidth, 600);
  // donne le nom des colonnes
  console.log(data.columns);
  // donne le nombre de lignes
  console.log(data.getRowCount());
  // donne les valeurs de la colonne Mass (Tt)
  years = data.getColumn("Year");
  exajouls = data.getColumn("Exajoule (EJ)");
}

function draw() {
  background(200);
  // déplacement du canvas avec translate pour faire défiler le diagramme
  let canvasX = map(mouseX, 0, width, -20, w - width + 50);
  translate(-canvasX, 0);


  // Début de la forme "ligne"
  beginShape();
  noFill();
  strokeWeight(1);
  stroke(0);
  // premier point de contrôle de la ligne (en bas à gauche)
  curveVertex(20, height);
  // boucle ligne
  for (let j = 0; j < exajouls.length; j++) {
    let annee = years[j];
    let posx = map(annee, 1750, 2008, 20, w);
    curveVertex(posx, height - exajouls[j]);
  }
  // dernier point de contrôle de la ligne (w + 100 : au bout du diagramme + 100px)
  curveVertex(w+100,0);
  // fermeture de la forme
  endShape();

  // boucle trame dates
  for (let h = 1750; h < 2009 ; h++) {
    // on mappe la position x des lignes
    let lx = map(h,1750,2008,20,w);
    stroke(180);
    line(lx,40,lx,height-5);
    // condition pour savoir si la date est un multiple de 50 : % permet d'obtenir le restant d'une division
    if(h%50==0){
      stroke(120);
      line(lx,25,lx,height-5);
      noStroke();
      fill(0);
      textAlign(CENTER);
      text(h,lx,20);
    }
  }

  // boucle EJ + points
  for (let i = 0; i < exajouls.length; i++) {
    let annee = years[i];
    let posx = map(annee, 1750, 2008, 20, w);
    strokeWeight(4);
    stroke(i * 2, 0, 0);
    point(posx, height - exajouls[i]);
    push();
      fill(i * 2, 0, 0);
      noStroke();
      textAlign(RIGHT);
      textSize(8);
      translate(posx, height - exajouls[i] - 8);
      rotate(radians(45));
      text(exajouls[i] , 0, 0);
    pop();
  }
}
