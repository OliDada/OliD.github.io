// Hér kemur kóðinn þinn:
var x = 0;
var y = 0;
var xSpeed = 2;
var ySpeed = 0;
var gravity = 0.15;

function setup() {
	createCanvas(700, 500);
	noStroke();
}

function draw() {
  background(255, 200, 0);
  fill(236,36,94);
  if(mouseX < width/2 && mouseY < height / 2){
		rect(0,0,width/2,height/2);
    background(255,200,0);
    ellipse(x, y, 30, 30);
    x = x + xSpeed;
    y = y +ySpeed;
    ySpeed = ySpeed+gravity;
    if ((x > width) || (x < 0)) {
      xSpeed = xSpeed * -1;
    }
    //til að láta boltann skoppa þegar neðri rönd snertir
    //skjáinn þarf að draga 15 frá height, því þvermál
    //boltans er 30.
    if (y > (height-15)) {
      ySpeed = ySpeed * -0.9;
      y = height-15; //til að boltinn festist ekki
    }
	}
	if(mouseX > width/2 && mouseY < height / 2){
		rect(width/2,0,width/2,height/2);
	}
	if(mouseX < width/2 && mouseY > height / 2){
		rect(0,height/2,width/2,height/2);
	}
	if(mouseX > width/2 && mouseY > height / 2){
		rect(width/2,height/2,width/2,height/2);
	}
}
