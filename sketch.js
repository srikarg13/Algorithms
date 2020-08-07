var fixedRect, movingRect;
var additionalRect
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 500,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  additionalRect = createSprite(800,500,50,75)

  movingRect.velocityX = +5;
  additionalRect.velocityX = -5;

}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,additionalRect);
  drawSprites();

}

 