const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(0, 600, 2000, 10);
  cannon = new Canon(20,20,20,20);
  
}

function draw() {
  background(189);
  image(backgroundImg, 600, 300, 1200, 600);

  

  Engine.update(engine);
  ground.display();
  tower.display();
  cannon.showMyCanon();
 
}







