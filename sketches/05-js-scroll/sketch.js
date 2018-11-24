let scroll = 0;

function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent('sketch');
}

function draw() {
	// map de scroll avec minimum 0 et maximum la taille du body (moins la hauteur de la fenêtre) définie en css
	let b = map(scroll,0,3000-windowHeight,100,255);
	let w = map(scroll,0,3000-height,0,width);
  background(100,255,b);
	fill(0);
	noStroke();
	rect(0,height/2,w,10);

}

window.addEventListener("scroll", function (event) {
    scroll = this.scrollY;
    console.log(scroll);
});
