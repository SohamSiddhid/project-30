const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygonObj;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  //2nd object Level 1

  blockA = new Block(700,175,30,40);
  blockB = new Block(670,175,30,40);
  blockC = new Block(730,175,30,40);
  blockD = new Block(760,175,30,40);
  blockE = new Block(640,175,30,40);

  //Level 2

  blockF = new Block(700,150,30,40);
  blockG = new Block(670,150,30,40);
  blockH = new Block(730,150,30,40);

  //Level 3

  blockI = new Block(700,120,30,40);
  
  polygonObj = new polygon(150,260,30);

  launcherObj = new launcher(polygonObj.body,{x:150,y:260});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  
  fill("lightyellow");
  text("Drag the stone and launch to break the blocks and Press space to reset",120,32)
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();


  fill("yellow")
  blockA.display();
  blockB.display();
  blockC.display();
  blockD.display();
  blockE.display();

  fill("red")
  blockF.display();
  blockG.display();
  blockH.display();

  fill("green")
  blockI.display();

  polygonObj.display();

}


function mouseDragged(){
  Matter.Body.setPosition(polygonObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcherObj.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygonObj.body,{x:150,y:260})
    launcherObj.attach(polygonObj.body)
  }
}
