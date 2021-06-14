const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1;
var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(190,100,240,20,roof_options);
    World.add(world,roof);

    b1 = new Ball(100);
    World.add(world,b1)

	b2 = new Ball(140);
    World.add(world,b2)

	b3 = new Ball(180);
    World.add(world,b3)

	b4 = new Ball(220);
    World.add(world,b4)

	b5 = new Ball(260);
    World.add(world,b5)



	Engine.run(engine);
	
   rope1 = Matter.Constraint.create ({
       pointA : {x: 100 , y:100 },
       bodyB : b1.body ,
       length:150,
       stiffness: 10,
       
   })
   World.add(world,rope1);
 
   rope2 = Matter.Constraint.create ({
    pointA : {x: 140 , y:100 },
    bodyB : b2.body ,
    length:150,
    stiffness: 10,})
    World.add(world,rope2); 

    rope3 = Matter.Constraint.create ({
        pointA : {x: 180 , y:100 },
        bodyB : b3.body ,
        length:150,
        stiffness: 10,})
        World.add(world,rope3); 

        rope4 = Matter.Constraint.create ({
            pointA : {x: 220 , y:100 },
            bodyB : b4.body ,
            length:150,
            stiffness: 10,})
            World.add(world,rope4); 
            
        




}

function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine)

fill("#301934")
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
 
   //line(rope1.pointA.position.x, rope1.pointA.position.y, b1.body.position.x, b1.body.position.y)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.