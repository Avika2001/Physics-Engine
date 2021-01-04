const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var ball,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  var groundOption={
    isStatic:true
  }
  ground=Bodies.rectangle(300,390,300,20,groundOption);
  World.add(world,ground);

  var ballOption={
    restitution:1.0
  }
  ball=Bodies.circle(300,100,20,ballOption);
  World.add(world,ball);
}

function draw() {
  background("black");
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
}