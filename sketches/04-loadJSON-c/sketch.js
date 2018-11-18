let earthquakes;
let earth;
let nb;
let slider;

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
  total = earthquakes.features.length;
  slider = createSlider(0, total, 1);
  slider.position(10, height - 100);
  slider.style('width', width - 30 + 'px');
}

function draw() {
  earth.resize(width, 0);
  background(255);
  image(earth, 0, 0);
  fill(0,100);
  // Ou alors avec la mouseX
  // nb = map(mouseX,0,width,1,total);
  // nb = round(nb);
  nb = slider.value() - 1;

  for (let i = nb; i > 0; i--) {
    let earthquakeMag = earthquakes.features[i].properties.mag;
    let lat = earthquakes.features[i].geometry.coordinates[1];
    let lon = earthquakes.features[i].geometry.coordinates[0];
    let c = convert(lat, lon);
    ellipse(c.x, c.y, earthquakeMag * 3, earthquakeMag * 3);
  }
}

function convert(lat, lon) {
  var y = ((-1 * lat) + 90) * (earth.height / 180);
  var x = (lon + 180) * (width / 360);
  return {
    x: x,
    y: y
  };
}
