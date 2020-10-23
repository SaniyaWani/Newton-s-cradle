
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   roof = new Roof(300,100,500,20);
	ball1 =new Bob(100);
	ball2 =new Bob(180);
	ball3 =new Bob(260);
	ball4 =new Bob(340);
  ball5 =new Bob(420);
  rope1 = new Rope(ball1.body,{x:100,y:100});
  rope2 = new Rope(ball2.body,{x:180,y:100});
  rope3 = new Rope(ball3.body,{x:260,y:100});
  rope4 = new Rope(ball4.body,{x:340,y:100});
  rope5 = new Rope(ball5.body,{x:420,y:100});
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  roof.display(); 
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function diw (){
if (keyDown(UP_ARROW)){
 ball1.velocityX=-2
 ball1.velocityY=-3


}


}
