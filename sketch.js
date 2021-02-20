var hr,mn,sc;
var hrAngle, mnAngle, scAngle


function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
 translate(200,200)
rotate(-90)
hr= hour();
mn= minute();
sc= second();
scAngle=map(sc,0,60,0,360);
mnAngle=map(mn,0,60,0,360);
hrAngle= map(hr%12,0,12,0,360);
push();
rotate(scAngle)
stroke("red");
strokeWeight(6);
line(0,0,100,0)
pop();
strokeWeight(8);
noFill();
stroke("red")
arc(0,0,300,300,0,scAngle)

push();
rotate(mnAngle)
stroke("blue");
strokeWeight(6);
line(0,0,75,0)
pop();
stroke("blue")
arc(0,0,280,280,0,mnAngle)

push();
rotate(hrAngle)
stroke("yellow");
strokeWeight(6);
line(0,0,50,0)
pop();
stroke("yellow")
arc(0,0,260,260,0,hrAngle)
  drawSprites();
}