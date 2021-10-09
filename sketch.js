const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;

var bg, bgImg;
var theif, theifImg
var spiderman, spidermanImg;
var tower, towerImg;
var spiderman1

function preload() {


  bgImg = loadImage("assets/background2.jpg")
  theifImg = loadImage("assets/theif6.png")
  spidermanImg = loadImage("assets/spiderman2.png")
  towerImg = loadImage("assets/tower.gif")
}

function setup() {


  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  
  world = engine.world;
  //adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 2
var options={
  fricton:1,
  density:0.8
}
spiderman2=Bodies.rectangle(100,100,10,10)
World.add(world,spiderman2)

  //creating the player sprite
  theif = createSprite(width - 100, height - 150, 50, 50);
  theif.addImage(theifImg)
  theif.scale = 0.5

  spiderman = createSprite( 75, 120, 50, 50);
  spiderman.addImage(spidermanImg)
  spiderman.scale = 0.5

}

function draw() {
  background(0);
  imageMode(CENTER)
  image (spidermanImg,spiderman2.position.x,spiderman2.position.y,50,50)
  Engine.update(engine);



  //moving the player up and down and making the game mobile compatible using touches


  //player goes back to original standing image once we stop pressing the space bar


  drawSprites();

}
