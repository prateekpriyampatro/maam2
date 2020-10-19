
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var m1,m2,m3,m4,m5,m6,t,b,s,ss1,ss2,ss3,ss4,ss5,ss7,ss6,g;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	g=  new ground(200,650,800,20);
	t =  new tree(400,300,100,200);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
}



