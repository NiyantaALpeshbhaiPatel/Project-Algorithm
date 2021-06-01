var fixedbox,movingbox

var a,b;
function setup() {
  createCanvas(800,400);
 fixedbox= createSprite(100, 200, 50, 50);
 movingbox=createSprite(700,200,70,40);
 fixedbox.shapeColor="Green";
 movingbox.shapeColor="Green";
 fixedbox.velocityX=5;
 movingbox.velocityX=-5;
 a=createSprite(400,50,20,20);
 b=createSprite(400,350,20,20);
 a.velocityY=5;
 b.velocityY=-5;


}

function draw() {
  background(255,255,255); 
  bounceoff(movingbox,fixedbox);
  bounceoff(a,b);
  drawSprites();
}
