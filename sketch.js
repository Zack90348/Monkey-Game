var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score = 0;
var ground,groundImage;
var survivalTime = 0;
var bananaImage,obstacleImage;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  obstacleImage = loadImage("obstacle.png");
  


}



function setup() {

  createCanvas(400, 400);
  
  ground = createSprite(200, 370, 400, 20);
  ground.x = ground.width / 2;
  

  monkey = createSprite(50, 340, 50, 50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

}


function draw() {

  background("pink");

  if (keyDown("space") && monkey.y >= 200) {
    monkey.velocityY = -13;
  }
    
  monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);


    if (ground.x < 0){
      ground.x = ground.width/2;
    }


  if (frameCount % 80 === 0){
    banana = createSprite(0,Math.round(random(120,200)));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = 1;
    banana.lifetime = 60;
  }
  
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);  
  
  drawSprites();
}

function obstacles(){
  if(frameCount % 300 === 0){
  obstacle = createSprite(200,345);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;  
  obstacle.velocityX = -1; 
  }
}
