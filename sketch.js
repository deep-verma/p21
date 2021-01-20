var music, musicb , b1, b2, b3, b4, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,500);
    //musicb = addSound(music);
    //create 4 different surfaces
    b1 = createSprite(100,700,20,20);
    b1.shapeColor = "red";
    b2 = createSprite(200,700,20,20);
    b2.shapeColor = "black";
    b3 = createSprite(300,700,20,20);
    b3.shapeColor = "green";
    b4 = createSprite(400,700,20,20);
    b4.shapeColor = "blue";
    //create box sprite and give velocity
    box = createSprite(random(100,500));
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 3;
}

function draw() {
    background("pink");
    //create edgeSprite
    if( box.x> width || box.x < 0) { 
        box.velocityX = box.velocityX * -1; 
            //positionX = positionX - xSpeed; 
      }
        
      if(box.y > height || box.y < 0) { 
         box.velocityY = box.velocityY * -1;
            //positionY = positionY - ySpeed;
            // positionX = positionX + xSpeed; 
      }

    drawSprites();
    //add condition to check if box touching surface and make it box
    /*if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor = "orange";
    }*/
    if(box.isTouching(b1)){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(box.isTouching(b2)){
        box.shapeColor = "black";
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(box.isTouching(b3)){
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(box.isTouching(b4)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
    }
}
function isTouching(object1,object2){
    if(object1.x-object2.x < object2.width/2 + object1.width/2
      && object2.x-object1.x < object2.width/2 + object1.width/2
      && object1.y-object2.y < object2.height/2 + object1.height/2
      && object2.y-object1.y < object2.height/2 + object1.height/2
      ){
      return true;
    }
    else{
      return false;
    }
  }