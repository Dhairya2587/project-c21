
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
	   density:1.2
	}
    matter.Bodies.circle(x,y,1.5,[option],[maxsides]) 
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
groundObj = new ground(width/2,670,width,20);
leftside = new ground(1100,600,20,120);
right = newground(1900,900,20,120);
  drawSprites();
 
}



