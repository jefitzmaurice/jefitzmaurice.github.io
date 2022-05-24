let title = 'Welcome to my p5 projects!!'
let paint = 'Paint Project'
let hfp = 'Happy Face Project'
let ani = 'Animation Project'
let vari = 'Variation Project'
let scr = 'Scroll down to see the projects!'


let img;
// function preload() {
//   img = loadImage('/Users/jessicafitzmaurice/Documents/GitHub/final project/variation-project.png');
// }

function setup() {
  createCanvas(windowWidth, windowHeight);

  //mage(img, 50, 200);
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
  text(hfp, 50, 450, 500, 500);
  text(ani, 600, 150, 500, 500);
  text(vari, 600, 450, 500, 500);
  fill(235, 64, 52);
  text(scr, 700, 50, 400, 400);


}

function petals() {

  push();

  stroke(255);

  translate(1250, 175); //changes 0,0 point to 250, 250
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
