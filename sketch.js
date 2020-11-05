
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(700,500,400,20);
	ground2 = new Ground(1100,300,300,20);
	
	box1 = new BoxB(550,465);
	box2 = new BoxB(600,465);
	box3 = new BoxB(650,465);
	box4 = new BoxB(700,465);
	box5 = new BoxB(750,465);
	box6 = new BoxB(800,465);
	box7 = new BoxB(850,465);

	box8 = new BoxP(600,415);
	box9 = new BoxP(650,415);
	box10 = new BoxP(700,415);
	box11= new BoxP(750,415);
	box12= new BoxP(800,415);

	box13 = new BoxG(650,365);
	box14 = new BoxG(700,365);
	box15 = new BoxG(750,365);

	box16 = new BoxGrey(700,315);
	box17 = new BoxB(1000,265);
	box18 = new BoxB(1050,265);
	box19 = new BoxB(1100,265);
	box20 = new BoxB(1150,265);
	box21 = new BoxB(1200,265);

	box22 = new BoxG(1050,215);
	box23 = new BoxG(1100,215);
	box24 = new BoxG(1150,215);

	box25 = new BoxP(1100,165);

	striker = new Striker(100,300,60,60);

	chain = new Slingshot(striker.body,{x: 100, y: 300});
  
}


function draw() 
{
  background(0);
  Engine.update(engine);
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  striker.display();
  chain.display();

}

function mouseDragged()
{
	Matter.Body.setPosition(striker.body,{x: mouseX,y: mouseY});
}

function mouseReleased()
{
	chain.fly();
}

function keyPressed()
{
	if(keyCode == 32)
	{
		chain.attach(striker.body);
	}
}



