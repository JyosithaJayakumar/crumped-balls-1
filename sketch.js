
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
	ground=new Ground(400,690,800,20)
	
	box1=new Box(750,630,20,100);
	box2=new Box (550,630,20,100);
	box3=new Box(650,670,200,20);
	papper=new Papper(200,200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
papper.display()
keyPressed()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(papper.body,papper.body.position.x,{x:85,y:-85});
	}
}



