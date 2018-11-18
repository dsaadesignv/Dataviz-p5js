// Création d'une variable d'objet
let earthquakes;

function preload() {
  // chargement du foichier .geojson
  let url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  earthquakes = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  // Affichage des données récupérées dans la console
	console.log(earthquakes);
}

function draw(){
  background(100);
  // Déclaration des variables de position
  let posX = 50;
  let posY = 50;

  // On parcourt le l'objet
  for(let i = 0; i < earthquakes.features.length; i++){
    // On récupère la valeur de magnitude pour chaque sous-objet features[i]
  	let earthquakeMag = earthquakes.features[i].properties.mag;

    // Ellipse
		fill(0,255,200,150);
    // Positionnée en posX et posX, avec pour diamètre la valeur de magnitude * 10
    ellipse(posX, posY, earthquakeMag * 10, earthquakeMag * 10);
    // Texte
    fill(255);
    textAlign(CENTER);
    text(earthquakeMag, posX, posY);
    
    // Cette condition permet de passer à la ligne
    // Si posX est plus petit que la taille du canvas on ajoute 50 à posX 
    if(posX < width-100){
      posX += 50;
      // Sinon on ajoute 50 à posY pour passer à la ligne et on remet posX à 0
    }else{
      posY += 50;
      posX = 50;
    }
  }
}
