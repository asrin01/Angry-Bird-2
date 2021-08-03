const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5, ground;
var pig1, pig2;
var log1, log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,320,70,70);   
    box2=new Box(960,320,70,70);
    ground=new Ground(600,height,1200,30); 
    
    pig1=new Pig(830,330,70,70);
    log1=new Log(830,260,340,PI/2);

    box3=new Box(960,230,70,70);
    box4=new Box(700,230,70,70);
    pig2=new Pig(830,230,70,70);
    log2=new Log(830,160,340,PI/2);
    box5=new Box(830,130,70,70);
    log3=new Log(790,90,140,PI/8);
    log4=new Log(910,90,140,-PI/8);
    bird1=new Bird(50,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}

