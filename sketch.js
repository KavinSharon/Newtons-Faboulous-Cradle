
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var bobDiameter;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    bobDiameter = 40;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bobObject1 = new Bob(360,300,bobDiameter);
	 bobObject2 = new Bob(380,300,bobDiameter);
	 bobObject3 = new Bob(400,300,bobDiameter);
	 bobObject4 = new Bob(420,300,bobDiameter);
	 bobObject5 = new Bob(440,300,bobDiameter);
	 roof = new Roof(400,100,200,20);
	 rope1 = new rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	 rope2 = new rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	 rope3 = new rope(bobObject3.body,roof.body,0,0);
	 rope4 = new rope(bobObject4.body,roof.body,bobDiameter*1,0);
	 rope5 = new rope(bobObject5.body,roof.body,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
    roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50})
	}
}


