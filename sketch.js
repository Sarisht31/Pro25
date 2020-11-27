
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(200,650,800,20);
	

	paper = new Paper(200,600);
	container = new dustbin(650,480);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   paper.display();
   ground.display();
   container.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:60,y:-60});
  
	}
}



