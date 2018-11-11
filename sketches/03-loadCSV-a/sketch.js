let data;
let valeurs
let labels;
let t = 0;

function preload() {
  data = loadTable(
    'data.csv',
		'csv',
		'header');
}

function setup() {
  createCanvas(800,600);
  // donne le nom des colonnes
	console.log(data.columns);
  // donne le nombre de lignes
	console.log(data.getRowCount());
  // donne les valeurs de la colonne Mass (Tt)
  valeurs = data.getColumn("Mass (Tt)");
  labels = data.getColumn("Component");
  console.log(labels);
  console.log(valeurs);
}

function draw() {
  background(100);
    for(let i = 0; i< valeurs.length;i++){
      rect(i*40,height-1,40,-valeurs[i]*t);
      fill(255);
      //text(labels[i],i*40+20,height-1-valeurs[i]*t-10);
      // Pour pencher les textes à 45°
    push();
  	translate(i*40+20,height-1-valeurs[i]*t-10);
  	rotate(radians(-45));
    fill(255);
    text(labels[i],0,0);
    pop();

  }
  if(t<40){
  	t=t+1;
  }
}