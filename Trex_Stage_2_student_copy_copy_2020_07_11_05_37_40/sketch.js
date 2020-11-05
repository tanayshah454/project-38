var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudsGroup, cloudImage;
var ob1, ob2, ob3, ob4, ob5, ob6, obstacleGroup;

function preload(){
  trex_running = loadAnimation("images/trex1.png","images/trex3.png","images/trex4.png");
  trex_collided = loadImage("images/trex_collided.png");
  cloudImage=loadImage("images/cloud.png");
  groundImage = loadImage("images/ground2.png")
ob1=loadImage("images/obstacle1.png");
ob2=loadImage("images/obstacle2.png");
ob3=loadImage("images/obstacle3.png");
ob4=loadImage("images/obstacle4.png");
ob5=loadImage("images/obstacle5.png");
ob6=loadImage("images/obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  cloudsGroup=new Group();
  obstacleGroup=new Group();
}

function draw() {
  background("white");
  
  if(keyDown("space")&&trex.y>=162 ){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  console.log(trex.y)
  trex.collide(invisibleGround);
 spawnClouds();
  spawnObstacles();
  drawSprites();
}
function spawnClouds(){
if(frameCount%60===0){
cloud=createSprite(600,100,10,10);
cloud.addImage(cloudImage);
cloud.y=Math.round(random(90,120));
cloud.scale=0.5;
cloud.velocityX=-5;
cloud.lifetime=120;
cloud.depth=trex.depth
trex.depth=trex.depth+1;
cloudsGroup.add(cloud);
}
}
function spawnObstacles(){
if(frameCount%80===0){
var obstacles=createSprite(600,180,10,10);
var rand=random(1,6);
switch (rand) {
case 1:obstacles.addImage(ob1);
break;
case 2:obstacles.addImage(ob2);
break;
case 3:obstacles.addImage(ob3);
break;
case 4:obstacles.addImage(ob4);
break;
case 5:obstacles.addImage(ob5);
break;
case 6:obstacles.addImage(ob6);
break;
default:break;
}

 
obstacles.velocityX=-5;
obstacles.lifetime=120;
obstacleGroup.add(obstacles);
}}