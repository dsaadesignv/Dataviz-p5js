// Création d'une variable qui servira de compteur
let a = 0;
// Nombre de carrés
let nb = 50;

function setup() {
  createCanvas(400, 400);
  // On calcule les positions des carrés (rect) à partir du centre
  rectMode(CENTER);
  // Pas de remplissage
  noFill();
}

function draw() {
  background(220);
  
  // Début de la boucle
  // On initialise le compteur avec i = 0
  // On vérifie que le compteur est plus petit que nb avec i<=nb
  // On incrémente le compteur de 1
  for(let i = 0; i<=nb; i++){
    // Fonction map() pour calculer la taille des carrés
    let t = map(i,0,nb,0,width);
    // Fonction map() pour calculer l'opacité entre 0 et 255
    let o = map(i,0,nb,255,0);
    // Affectation de l'opacité o à la fonction stroke()
    stroke(0,o);
    // On isole les transformations de chaqsue carré avec push() et pop()
    push();
    // On place au centre
    translate(width/2,height/2);
    // Rotation de a*i : a augmentant, le carré tourne / i augmentant également, la vitesse de rotation augmente
    rotate(radians(a*i));
    // On dessine le rectangle avec largeur et longueur égales à t
  	rect(0,0,t,t);
    // pop() pour clore les transformations
    pop();
  }
  // Fin de la boucle
  
  // On ajouter 0.1 à la variable a utilisée pour la rotation des carrés
  a+=0.1;
}