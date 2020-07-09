var paperBall,ground,dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(700, 600);

	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = new Ground(width/2, 600, width, 50)
 	World.add(world, ground);

	paperBall = new paper(60, 550, 40);
	World.add(world, paperBall);

	dustbin1 = new Ground(550,575,150,20);
	World.add(world, dustbin1);

	dustbin2 = new Ground(475,535,20,100);
	World.add(world, dustbin2);

	dustbin3 = new Ground(625,535,20,100);
	World.add(world, dustbin3);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  background(225,150,0);
 
  ground.display("black");
 
  paperBall.display();
 
  dustbin1.display("green");
  dustbin2.display("green");
  dustbin3.display("green");
}

function keyPressed () {
  if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperBall.body, paperBall.body.positon, {x:85, y:-85});
  }
}