var h,m,s,dh,dm,ds;

function setup() {
  createCanvas(600, 600);
  noStroke();
  blendMode(BLEND);
}

function draw() {
  background(200,200,100);
  h = hour();
	m = minute();
	s = second();
  
  // magic map()!
	dh = map(h,0,24,0,width);
	dm = map(m,0,60,0,width);
	ds = round(map(s,0,60,0,width));
  //
  
  fill(255,0,0,100);
  ellipse(width/2,height/2,ds);
  fill(0,255,0,100);
  ellipse(width/2,height/2,dm);
  fill(0,0,255,100);
  ellipse(width/2,height/2,dh);
  textAlign(CENTER);
  fill(0);
	text(h+':'+m+':'+s,width/2,height-40);
}