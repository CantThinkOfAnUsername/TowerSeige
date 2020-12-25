
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(900,200);
	block1 = new Block(900,180,40,40)
	block2 = new Block(880, 180,40,40)
	block3 = new Block(920,180,40,40)
	block4 = new Block(890,160,40,40)
	block5 = new Block(910, 160,40,40)
	block6 = new Block(900,140,40,40)
	polygon = new Polygon(200,20,50,50)
	sling = new Slingshot(polygon,170,20)

	
	//Create the Bodies Here.

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  ground.display();
  block1.display();
  block2.display();
  block2.display();
  block4.display();
  block5.display();
  block6.display();
  polygon.display();
  drawSprites();
 
}



