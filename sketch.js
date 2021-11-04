var fixedRect, movingRect;
var sprite1, sprite2, sprite3, sprite4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -2;
  fixedRect.velocityY = -2;
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX = 2;
  movingRect.velocityY = 2;
  movingRect.debug = true;

  sprite1 = createSprite(300,100,40,90);
  sprite1.velocityY = 2;
  sprite1.velocityX = -2;
  sprite1.shapeColor = "yellow";

  sprite2 = createSprite(400,300,30,50);
  sprite2.velocityY = -2;
  sprite2.velocityX = 2;
  sprite2.shapeColor = "green";

  sprite3 = createSprite(500,400,10,30);
  sprite3.velocityY = -2;
  sprite3.velocityX = 2;
  sprite3.shapeColor = "white";

  sprite4 = createSprite(700,200,40,60);
  sprite4.velocityY = 2;
  sprite4.velocityX = -2;
  sprite4.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  if(isTouching(movingRect,sprite3)){
 movingRect.shapeColor = "red";
 sprite3.shapeColor = "red";
  }
  else{
  movingRect.shapeColor = "blue";
  sprite3.shapeColor = "blue";
  }

  bounceOff(movingRect,fixedRect);
  bounceOff(movingRect,sprite4);
  bounceOff(sprite1,sprite2);
  bounceOff(sprite3, sprite4);

  drawSprites();
}

