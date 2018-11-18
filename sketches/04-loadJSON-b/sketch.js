let earthquakes;
let earth;

function preload() {
  let url =
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
  earthquakes = loadJSON(url);
  earth = loadImage("earth.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //console.log(earthquakes);
}

function draw() {
  background(255);
  // Redimensionnement de la carte. Le paramètre 0 permet de calculer automatiquement la hauteur
  earth.resize(width, 0);
  // Affichage de la carte
  image(earth, 0, 0);
  // Fond des ellipses
  fill(0, 100);
  for (let i = 0; i < earthquakes.features.length; i++) {
    // On récupère la magnitude
    let earthquakeMag = earthquakes.features[i].properties.mag;
    // On récupère les coordonnées lat et lon
    let lat = earthquakes.features[i].geometry.coordinates[1];
    let lon = earthquakes.features[i].geometry.coordinates[0];
    // On appelle la fonction convert qu'on stocke dans un objet c. Cet objet possède 2 propriétés : x et y
    let c = convert(lat, lon);
    // On affiche l'ellipse. Ses positions x et y sont définis par les proporiétés x et y de l'objet c
    ellipse(c.x, c.y, earthquakeMag * 3, earthquakeMag * 3);
    // Affichage de la magnitude
    //textAlign(CENTER);
    //text(earthquakeMag, c.x, c.y-10);
  }
}

// La fonction de conversion. Elle prend 2 paramètres, lat et lon
function convert(lat, lon) {
  // Calcul de x et y par rapport à la taille de la carte. Une sorte de fontion map()
  var x = (lon + 180) * (earth.width / 360);
  var y = ((-1 * lat) + 90) * (earth.height / 180);
  // La fonction renvoie un objet json avec 2 propriétés
  return {
    x: x,
    y: y
  };
}
