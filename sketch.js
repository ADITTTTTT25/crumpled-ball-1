
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ball;
var box1,box2,box3;
var ground;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Ball = new Paper(100,650);
	box1 = new Dustbin(1190,650,200,20);
	box2 = new Dustbin(1090,610,20,100);
	box3 = new Dustbin(1290,610,20,100);
	ground = new Ground(800,680,1600,20);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  Ball.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Ball.body,Ball.body.position,{x:85,y:-85})
	}
}
