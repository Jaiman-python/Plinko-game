
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(521,800);

  engine = Engine.create();
  world = engine.world;

  for(var i = 65; i<590; i += 65){
    var columnSprite = createSprite(-65+i,700,5,250);
    columnSprite.shapeColor=color(0);

    column = Bodies.rectangle(-65+i,700,5,250,{isStatic:true,friction:1});
	  World.add(world, column);
  }

  for(var i = 50; i<520; i += 50){
    var pegsprite = createSprite(0+i,100,15,15);
    pegsprite.shapeColor=color("darkblue");

    peg = Bodies.rectangle(0+i,100,15,15,{isStatic:true,friction:1});
	  World.add(world, peg);
  }
  for(var i = 50; i<520; i += 50){
    var pegsprite = createSprite(0+i,200,15,15);
    pegsprite.shapeColor=color("darkblue");

    peg = Bodies.rectangle(0+i,100,15,15,{isStatic:true});
	  World.add(world, peg);
  }

  for(var i = 50; i<520; i += 50){
    var pegsprite = createSprite(0+i,300,15,15);
    pegsprite.shapeColor=color("darkblue");

    peg = Bodies.rectangle(0+i,100,15,15,{isStatic:true});
	  World.add(world, peg);
  }

  for(var i = 50; i<520; i += 50){
    var pegsprite = createSprite(0+i,400,15,15);
    pegsprite.shapeColor=color("darkblue");

    peg = Bodies.rectangle(0+i,100,15,15,{isStatic:true});
	  World.add(world, peg);
  }
    ground = new Ground(width/2,height,width,5);
    balls1 = new Balls(width/2, 0, 10);
    balls2 = new Balls(width/2, 0, 10);
    balls3 = new Balls(width/2, 0, 10);
    balls4 = new Balls(width/2, 0, 10);
    balls5= new Balls(width/2, 0, 10);
    balls6 = new Balls(width/2, 0, 10);
    balls7 = new Balls(width/2, 0, 10);
    balls8 = new Balls(width/2, 0, 10);
    balls9 = new Balls(width/2, 0, 10);
    balls10 = new Balls(width/2, 0, 10);
    balls11 = new Balls(width/2, 0, 10);
    balls12 = new Balls(width/2, 0, 10);
    balls13 = new Balls(width/2, 0, 10);
    balls14 = new Balls(width/2, 0, 10);
    balls15 = new Balls(width/2, 0, 10);
    balls16 = new Balls(width/2, 0, 10);
    balls17 = new Balls(width/2, 0, 10);
    balls18 = new Balls(width/2, 0, 10);
    balls19 = new Balls(width/2, 0, 10);
    balls20 = new Balls(width/2, 0, 10);
    balls21 = new Balls(width/2, 0, 10);
    balls22 = new Balls(width/2, 0, 10);
    balls23 = new Balls(width/2, 0, 10);
    balls24 = new Balls(width/2, 0, 10);
    balls25 = new Balls(width/2, 0, 10);
    balls26 = new Balls(width/2, 0, 10);
    balls27 = new Balls(width/2, 0, 10);
    balls28 = new Balls(width/2, 0, 10);
    balls29 = new Balls(width/2, 0, 10);
    balls30 = new Balls(width/2, 0, 10);
    balls31 = new Balls(width/2, 0, 10);
    balls32 = new Balls(width/2, 0, 10);
    balls33 = new Balls(width/2, 0, 10);
    balls34 = new Balls(width/2, 0, 10);
    balls35 = new Balls(width/2, 0, 10);
    balls36 = new Balls(width/2, 0, 10);
    balls37 = new Balls(width/2, 0, 10);
    balls38 = new Balls(width/2, 0, 10);
    balls39 = new Balls(width/2, 0, 10);
    balls40 = new Balls(width/2, 0, 10);


    /*
    for(var i = 1; i<100; i+=1){
      balls = new Balls(width/2, 0, 10);
    }
    */

  Engine.run(engine);
	
}

function draw() {
  background("darkgreen");  
  Engine.update(engine);

  ground.display();

  balls1.display();
  balls2.display();
  balls3.display();
  balls4.display();
  balls5.display();
  balls6.display();
  balls7.display();
  balls8.display();
  balls9.display();
  balls10.display();
  balls11.display();
  balls12.display();
  balls13.display();
  balls14.display();
  balls15.display();
  balls16.display();
  balls17.display();
  balls18.display();
  balls19.display();
  balls20.display();
  balls21.display();
  balls22.display();
  balls23.display();
  balls24.display();
  balls25.display();
  balls26.display();
  balls27.display();
  balls28.display();
  balls29.display();
  balls30.display();
  balls31.display();
  balls32.display();
  balls33.display();
  balls34.display();
  balls35.display();
  balls36.display();
  balls37.display();
  balls38.display();
  balls39.display();
  balls40.display();
  
  drawSprites();
}