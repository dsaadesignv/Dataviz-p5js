function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  // map de la valeur de mouseX (min 0 et max width) avec la couleur de fond (min 0 et max 255)
  let c = map(mouseX,0,width,0,255);
  // map de la valeur de mouseX avec la taille souhaitée du carré (de -100 à 100)
  let w = map(mouseY,0,height,-100,100);
  // on affecte la variable c à la fonction background
  background(c);
  // changement du rectMode en CENTER pour que le carré soit transformé par le centre https://p5js.org/reference/#/p5/rectMode
  rectMode(CENTER);
  // couleur du carré
  fill(0,220,220);
  // affichage du carré avec la variable w affectée à la largeur et la hauteur
  rect(width/2,height/2,w,w);
  // affichage des valeurs
  // changement du rectMode https://p5js.org/reference/#/p5/rectMode
  rectMode(CORNER);
  // bande blanche en bas
  fill(255);
  rect(0,height-30,width,30);
  // changement de couleur pour les textes
  fill(0);
  // affichage valeur de mouseX
  text("mouseX : "+mouseX,20,height-15);
  // affichage valeur de c (arrondie avec round() https://p5js.org/reference/#/p5/round)
  text("c : "+round(c),120,height-15);
  // affichage de w
  text("w : "+round(w),200,height-15);
}