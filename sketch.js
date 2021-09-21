var mr, fr

function setup() {
  createCanvas(1200,700);
 fr = createSprite(400, 100, 50, 80);
 mr = createSprite(400, 600, 80, 30);
 fr.shapeColor = "blue";
 mr.shapeColor = "green";
 mr.velocityY = -5;
 fr.velocityY = 5;
}

function draw() {
  background(0);
  //mr.x = mouseX;
  //mr.y = mouseY;
  if(mr.x - fr.x < mr.width/2 + fr.width/2
    && fr.x - mr.x < mr.width/2 + fr.width/2
    && mr.y - fr.y < mr.height/2 + fr.height/2
    && fr.y - mr.y < mr.height/2 + fr.height/2
    ){
  fr.shapeColor = "red";
  mr.shapeColor = "yellow";
  }
  else{
  fr.shapeColor = "blue";
  mr.shapeColor = "green";
  }
  if(mr.y - fr.y < mr.height/2 + fr.height/2
  && fr.y - mr.y < mr.height/2 + fr.height/2){
    mr.velocityY = mr.velocityY*(-1)
    fr.velocityY = fr.velocityY*(-1)
  }
  if(mr.x - fr.x < mr.width/2 + fr.width/2
    && fr.x - mr.x < mr.width/2 + fr.width/2){
      mr.velocityX = mr.velocityX*(-1)
      fr.velocityX = fr.velocityX*(-1)
    }
  drawSprites();
}