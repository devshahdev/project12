var path, jaxon, jaxon_running, edges;
var pathImage, leftBoundary, rightBoundary;

function preload(){
//pre-load images
jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
pathImage = loadImage("path.png");
}

function setup(){
//creating canvas
createCanvas(400,400);

//creating a path and adding velocity to it
path = createSprite(200,200);
path.addImage("path",pathImage);
path.velocityY = 4;
path.scale=1.2;

//creating a jaxon sprite
jaxon = createSprite(200,270,50,50);
jaxon.addAnimation("running",jaxon_running);
jaxon.scale=0.09;

//creating right boundary
rightBoundary = createSprite(390,190,30,490);
rightBoundary.visible=false;

//creating left boundary
leftBoundary = createSprite(10,200,30,490)
leftBoundary.visible=false;
}

function draw() {
// adding backgroung
background(0);

//adding velocity to path
path.velocityY=4;

//controlling jaxon with mouse movement
jaxon.x = World.mouseX;

//bouncing off jaxon 
jaxon.collide(leftBoundary);
jaxon.collide(rightBoundary);

//logging jaxon
console.log(jaxon.y)

//resetting path
if (path.y > 400)
{
path.y = height/2;
}
  
//dawing sprites
drawSprites();

}
