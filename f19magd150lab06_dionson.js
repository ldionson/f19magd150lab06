
var r = 0.0;

function setup(){
  createCanvas(420, 420);
  background(200);
}

function draw() {
  //Translate centers everything drawn from this point on, declaring 0,0 to be at the
  //center of the screen.
  translate(width / 2, height / 2);

  scale(r); 
  rotate(r*4)
  slimeDraw(0)
  if (r < 5) {
    r += 0.02;
  }
    else {
    clear()
    fill(0, 102, 153);
    textSize(10);
    text('Slime Attack!!', -25, 0);
    //Created text to appear after the full rotation of the slime.
  }
 
}
//Made a function to call all the parts of the slime's body into one function.
function slimeDraw(slimePos) {
  spine()
  mainbody(50+slimePos)
  eyeball(-20+slimePos)
  eyeball(20+slimePos)
  mouth()
}

//Function that creates the larger ellipse as the slime's body.
function mainbody(radius) {
  fill(186, 36, 174)
  ellipse(0, 0, radius+30, radius)
}

//Function that creates a simple triangle to appear as the slime's spine.
function spine() {
  fill(186, 36, 174)
  triangle(-30, 15, 0, -50, 30, 15);
}

//Function that creates the parameters of the whites and iris of the eye.
function eyeball(eyeXposition) {
 fill(255)
 ellipse(eyeXposition,0,25,25)
 fill(0)
 ellipse(eyeXposition,0,5,5)
}

function mouth(){
  fill(0)
  line(9,14,-9,14)
}