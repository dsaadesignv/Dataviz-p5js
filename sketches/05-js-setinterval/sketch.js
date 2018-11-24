let valeurCible = 360;
let valeurActuelle = 0;
let diametre = 300;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  noStroke();
  fill(150);
  ellipse(width/2,height/2,diametre);
  fill(0,200,220);
  // Fonction d'interpolation linéaire
  valeurActuelle = lerp(valeurActuelle,valeurCible,0.2);
  // Dessin de l'arc https://p5js.org/reference/#/p5/arc
	arc(width/2, height/2, 300, 300, 0, radians(valeurActuelle),PIE);
  textAlign(CENTER);
  text("valeur actuelle : "+round(valeurActuelle)+" / valeur cible : "+valeurCible,width/2,height/2+diametre/2+20);
}

// Changement de la valeur de destination toutes les secondes avec la fonction javascript setInterval()
setInterval(function(){
  valeurCible = round(random(360));
},1000);
