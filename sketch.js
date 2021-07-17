var seaImage, sea
var shipAni, ship
function preload(){
shipAni = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,10,10);
  sea.velocityX = -3;
  sea.addImage("waves",seaImage);
  sea.scale = 0.25;
  
  ship = createSprite(200,200);
  ship.addAnimation("bobbing",shipAni);
  ship.scale = 0.25;

  

  }


function draw() {
  background("white");
  
  if(sea.x < 0){
    sea.x = sea.width/100;
  }
  drawSprites();
 
}