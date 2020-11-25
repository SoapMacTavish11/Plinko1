const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles= [];
var divisions= [];
var plinkos = [];

var divisionHeight=300;

var ground;


function setup() {
  createCanvas(600,800);

  engine = Engine.create();
	world = engine.world;
  
   ground=new Ground(300,792,602,20);

}


function draw() {
  background(0); 
  
  

  for (var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }


  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j=55;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for(var j=20;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  }

  ground.display();

}
