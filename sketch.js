var issImg;
var spacebgImg;
var spacecraft1Img;
var spacecraft2Img;
var spacecraft3Img;
var spacecraft4Img;
var hasDocked = false;
var spacecraft;

function preload(){
 issImg = loadImage("Docking-undocking/iss.png");
 spacebgImg = loadImage("Docking-undocking/spacebg.jpg");
 spacecraft1Img = loadImage("Docking-undocking/spacecraft1.png");
 spacecraft2Img = loadImage("Docking-undocking/spacecraft2.png");
 spacecraft3Img = loadImage("Docking-undocking/spacecraft3.png");
 spacecraft4Img = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(issImg)
  iss.scale = 0.25
}

function draw() {
  background(spacebgImg);  

  spacecraft.addImage(spacecraft1Img);
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-2;
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x = spacecraft.x-1;
    }
    
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft2Img);
      spacecraft.x = spacecraft.x+1;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft1Img);
    }
    
  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking successfull",200,300)
  }
  drawSprites();
}