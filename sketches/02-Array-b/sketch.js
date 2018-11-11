let valeurs = ["11.1","6.3","5.03","3.76","2.25","0.8","0.38","0.27","0.2","0.02"];
let posx = 0;
let total = 0;

function setup() {
  createCanvas(700, 400);
  background(200);
  noStroke();
  for(let i = 0; i<valeurs.length; i++){
  	total+=valeurs[i]*1;
  }
  console.log(total);
  for(let i = 0; i<valeurs.length; i++){
    fill(i*25, 50, i*10);
    let w = map(valeurs[i],0,total,0,width);
  	rect(posx,0,w,height);
    posx = posx + w;
  }

}

function draw() {
}
