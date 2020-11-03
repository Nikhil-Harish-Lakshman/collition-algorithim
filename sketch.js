var fixed,moving

function setup() {
  createCanvas(800,400);
  fixed = createSprite(200, 200, 50, 80);
  moving=createSprite(400,200,80,50)
  fixed.shapeColor="green"
  moving.shapeColor="green"
}

function draw() {
  background(0);  
  moving.y=mouseY
  moving.x=mouseX
  console.log(moving.x-fixed.x)
  if(moving.x-fixed.x < moving.width/2+fixed.width/2
    && fixed.x-moving.x< moving.width/2+fixed.width/2 &&
    fixed.y-moving.y<moving.height/2+fixed.height/2 &&
    moving.y-fixed.y<fixed.height/2+moving.height/2){
    fixed.shapeColor="red"
  moving.shapeColor="red"
  }
  else{
    fixed.shapeColor="green"
    moving.shapeColor="green"
  
  }
  drawSprites();
}
