let valeurs = ["11.1","6.3","5.03","3.76","2.25","0.8","0.38","0.27","0.2","0.02"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  fill(0);
  let w = width/valeurs.length;
  for(let i = 0; i<valeurs.length; i++){
    let posx = map(i,0,valeurs.length,0,width);
    fill(0);
  	rect(posx,height/2-valeurs[i]*20,w,valeurs[i]*40);
    fill(255);
    textAlign(CENTER);
    push();
    translate(posx+w/2,height/2);
    rotate(radians(-90));
    text(valeurs[i],0,0);
    pop();
  }

}

function draw() {
}
