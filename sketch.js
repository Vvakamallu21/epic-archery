const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var base;
var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var person;
function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  rectMode(CENTER)

  //create player base body
  var options = {
     isStatic : true
  }
  base = Bodies.rectangle(windowWidth/10,windowHeight*3/4,20,20,options);
  World.add(world,base);
  //create player body
 player = Bodies.rectangle(windowWidth/10,base.position.y-100,40,20,options);
 World.add(world,player);


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage,player.position.x,player.position.y,80,120)
  //show the playerbase image using image() function
  image(baseimage,base.position.x,base.position.y,80,80)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
