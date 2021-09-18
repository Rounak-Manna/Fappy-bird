var bird,birdImg;
var backgroundImg;
var bg;
var ob1,ob2,ob3,ob4,ob5,ob6
var ob7,ob8,ob9,ob10,ob11,ob12,ob13

function preload(){
  backgroundImg=loadImage("background 1.png");
  birdImg=loadImage("bird.png");
   
}

function setup() {
  createCanvas(1500,700);
  bg=createSprite(750,350)
  bg.addImage(backgroundImg);
 //bg.velocityX=-5;
 bg.scale=0.8;

  bird = createSprite(150,200);
  bird.addImage(birdImg);
  bird.scale=0.3;


}

function draw() {
  background(0);
  //bg.velocityX=-5;

 // if (bg.x < 0){   
 //   bg.x=bg.width/2; 
//}
if(keyDown("space")){
  bird.velocityY=-10;
}
bird.velocityY = bird.velocityY  + 0.5



  drawSprites();
}  