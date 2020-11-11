const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1, box2, box3, box4, ground, pig1 ,pig2, log1, log2, log3, log4, bird1;
var poly,polyImg,slingShot

function preload(){
polyImg = loadImage("hex.png");

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var options ={
        restitution : 1.0,
        friction : 0.5,
        density : 0.4
    }
    poly = Bodies.circle(200,200,20,options);
    World.add(world,poly);

    slingShot = new Slingshot(poly,{x:200,y:400});
   
    ground1 = new Ground(900,200,400,20);
    ground2 = new Ground(700,500,400,20);
    
    box1 = new Box(530,470,60,40,"green");
    box2 = new Box(600,470,60,40,"green");
    box3 = new Box(670,470,60,40,"green");
    box4 = new Box(740,470,60,40,"green");
    box5 = new Box(810,470,60,40,"green");
    box6 = new Box(880,470,60,40,"green");
    
    box7 = new Box(560,430,60,40,"pink");
    box8 = new Box(630,430,60,40,"pink");
    box9 = new Box(700,430,60,40,"pink");
    box10 = new Box(770,430,60,40,"pink");
    box11 = new Box(850,430,60,40,"pink");
    
    box12= new Box(580,400,60,40,"blue");
    box13 = new Box(650,400,60,40,"blue");
    box14 = new Box(720,400,60,40,"blue");
    box15 = new Box(790,400,60,40,"blue"); 
   
    box16 = new Box(600,370,60,40,"red");
    box17 = new Box(670,370,60,40,"red");
    box18 = new Box(750,370,60,40,"red");
    
    //box19 = new Box(640,470,70,70,"blue");
    //box20 = new Box(680,470,70,70,"red");

    
   // ground1 = new Ground(900,200,400,20);
  

   
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
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
//------------------------------    
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
   // box19.display();
   // box20.display();*/
//--------------------------------    
   // ground1.display();
      ground2.display();

    image(polyImg,poly.position.x,poly.position.y,40,40);
   

    


}
function mouseDragged(){
    Matter.Body.setPosition(poly, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
if(keyCode === 32){
   slingShot.attach(poly);  
 }
}