//Namespacing or Nicknaming
const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine, world;
var box, ground;
function setup() {
  createCanvas(400,400);
  //create an engine  & engine's world for my game
  engine = Engine.create();
  world = engine.world;//engine's world

  box= Bodies.rectangle(100,100,50,50);
  //Matter.World.add(world, object) - command from lib documentation
  World.add(world, box);
  //prints entire object on console
  console.log(box);
  //prints only box's area on console
  console.log(box.area);
  //prints box's position on console
  console.log(box.position);
  //prints box's position's x value
  console.log(box.position.x);

  var options = {
  	isStatic: true
  }
  ground = Bodies.rectangle(200, 380, 400, 10, options);
  World.add(world, ground)

  //lets print ground on console
  console.log(ground);
  console.log(ground.isStatic);
}

function draw() {
  background("Black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(200, 200, 50, 50);

  //shows the box on screen
  rect(box.position.x, box.position.y, 50, 50);
  rect(ground.position.x, ground.position.y, 400, 10);
}