// valeurs cibles
let valeurs = ["23","165","200","111","290","345","12","129"];
// valeurs intermédiaires
let valeursLerp = [];
// index qui augmentera à intervalles réguliers
let index = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // Initialisation du tableau des valeurs intermédiaires (tout à zéro)
  for(let i = 0;i<valeurs.length;i++){
  	valeursLerp.push(0);
  }
}

function draw() {
  background(255);
  noStroke();
  fill(0,200,220);
  for(i=0;i<index;i++){
    let posx = map(i,0,valeurs.length,40,width);
  	valeursLerp[i] = lerp(valeursLerp[i],valeurs[i],0.2);
		rect(posx, height-20, 40, -valeursLerp[i]);
    textAlign(CENTER);
    text(round(valeursLerp[i]),posx+20,height-valeursLerp[i]-30);
  }
}

setInterval(function(){
  if(index<valeurs.length){
  	index+=1;
  }
},100);