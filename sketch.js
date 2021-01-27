const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine;
var ground;
var box1,box2;




function setup() {
  createCanvas(400,400);

engine = Engine.create();
world = engine.world;

ground = new Ground(200,390,400,20);

box1 = new Box(200,300,50,50);
box2 = new Box(240,200,50,100);


 
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();
box1.display();
box2.display();


}