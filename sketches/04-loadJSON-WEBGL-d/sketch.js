let n, r, t, lat, lon;
let earth;
let earthquakes, earthquakeMag;
let rotX, rotY;
let posZ = 0;
let a = 0;

function preload() {
  let url =
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
  earthquakes = loadJSON(url);
  earth = loadImage("world32k.jpg");
}

function setup() {
  // On ajoute le paramètre WEBGL à la fonction de création du canvas
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Rayon de la terre
  r = 300;
  // Variable utilisée pour la rotation automatique
  t = 0;
  // Initialisation des variables qui seront utilisées pour faire tourner la terre
  rotX = PI;
  rotY = PI;
}

function draw() {
  background(0);
  // On positionne la terre
  translate(0, 0, posZ);
  // Rotation automatique (décommenter la ligne ci-dessous pour l'activer)
  //rotateY(12 * radians(t += (TWO_PI / 365)));

  // Rotation 3D avec la souris
  rotateX(PI - rotX);
  rotateY(PI / 2 - rotY);
  if (mouseIsPressed) {
    rotX -= (pmouseY - mouseY) * 0.01;
    rotY -= (pmouseX - mouseX) * -0.01;
  }
  // Fin rotation avec la souris

  // Texture earth
  texture(earth);
  sphere(r);

  // Boucle principale
  for (let i = 0; i < earthquakes.features.length; i++) {
    // récupération des valeurs
    earthquakeMag = earthquakes.features[i].properties.mag;
    lat = earthquakes.features[i].geometry.coordinates[1];
    lon = earthquakes.features[i].geometry.coordinates[0];
    
    // Conversion des valeurs. On récupère un objet coord avec 3 propriétés (coord.x, coord.y et coord.z)
    let coord = convert(lat, lon);

    // Couleur sphères
    fill('rgba(200,255,0,0.5)');
    // On enlève les contours
    noStroke();
    // Début placement de la sphère
    push();
    // Placement
    translate(coord.x, coord.y, coord.z);
    // On affiche la sphère. Sa taille est calculée par rapport au sinus de la variable a (entre -1 et 1, d'où cet effet de clignotement)
    sphere(earthquakeMag * 3 * sin(a));
    pop();
    // Fin du placement de la sphère
  }
	// On incrémente la variable a
  a += 0.03;
}

// Scroll
function mouseWheel(event) {
  // On récupère la valeur de scroll et on la retranche à la variable posZ
  posZ -= event.delta;
  // Evite de faire scroller la page
  return false;
}

// Fonction de conversion entre coordonnées GPS et coordonnées sur une sphère
function convert(lat, lon) {
  let rlat = radians(lat);
  let rlon = radians(lon);
  let x = r * Math.cos(rlat) * Math.sin(rlon + radians(180));
  let y = r * Math.sin(-rlat);
  let z = r * Math.cos(rlat) * Math.cos(rlon + radians(180));

  return {
    x: x,
    y: y,
    z: z
  };
}