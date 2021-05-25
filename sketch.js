var fixedbox,movingbox


function setup() {
  createCanvas(800,400);
 fixedbox= createSprite(400, 200, 50, 50);
 movingbox=createSprite(400,200,70,40);
 fixedbox.shapeColor="Green";
 movingbox.shapeColor="Green";
}

function draw() {
  background(255,255,255); 
  movingbox.x=mouseX
  movingbox.y=mouseY
  if(movingbox.x-fixedbox.x<fixedbox.width/2+movingbox.width/2 &&
    fixedbox.x-movingbox.x<fixedbox.width/2+movingbox.width/2 &&
    movingbox.y-fixedbox.y<fixedbox.height/2+movingbox.height/2 &&
    fixedbox.y-movingbox.y<fixedbox.height/2+movingbox.height/2 ){
    fixedbox.shapeColor="Red";
    movingbox.shapeColor="Red";
  }else{
    fixedbox.shapeColor="Green";
 movingbox.shapeColor="Green";
  }
  drawSprites();
}