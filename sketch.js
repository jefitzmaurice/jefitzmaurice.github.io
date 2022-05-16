let title = 'Welcome to my p5 projects!!'
let paint = 'Paint Project'
let hfp = 'Happy Face Project'
let ani = 'Animation Project'
let vari = 'Variation Project'

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(7, 45, 112);
  fill(255, 244, 25);
  petals();


  fill(135, 177, 250);
  textSize(50);
  text(title, 50, 50, 1000, 400);
  fill(250, 135, 244);
  textSize(30);
  text(paint, 50, 150, 500, 500);

}

function petals() {

  push();

  stroke(255);

  translate(1200, 200); //changes 0,0 point to 250, 250
  rotate(radians(40));
  ellipse(75, 0, 150, 50); // start from 75 (tip of ellipse, 150/2), since ellipse is 150 wide
  rotate(radians(40));
  ellipse(75, 0, 150, 50);
  rotate(radians(40));
  ellipse(75, 0, 150, 50);
  rotate(radians(40));
  ellipse(75, 0, 150, 50);
  rotate(radians(40));
  ellipse(75, 0, 150, 50);
  rotate(radians(40));
  ellipse(75, 0, 150, 50);
  rotate(radians(40));
  ellipse(75, 0, 150, 50);
  rotate(radians(40));
  ellipse(75, 0, 150, 50);
  rotate(radians(40));
  ellipse(75, 0, 150, 50);

  pop();
}
