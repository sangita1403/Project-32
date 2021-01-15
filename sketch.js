
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygongonImage;
var backgroundImg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon;
var score = 0;

 function preload()
 {
  getBg();
 }

 function setup(){
    createCanvas(1600,500);

    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(800,490,1600,20);

    stand1=new Stand(400,350,250,10);
    block1=new Block(306,320,30,50);
    block2=new Block(338,320,30,50);
    block3=new Block(370,320,30,50);
    block4=new Block(402,320,30,50);
    block5=new Block(434,320,30,50);
    block6=new Block(466,320,30,50);
    block7=new Block(498,320,30,50);
    block8=new Block(338,268,30,50);
    block9=new Block(370,268,30,50);
    block10=new Block(402,268,30,50);
    block11=new Block(434,268,30,50);
    block12=new Block(466,268,30,50);
    block13=new Block(370,235,30,50);
    block14=new Block(402,235,30,50);
    block15=new Block(434,235,30,50);
    block16=new Block(402,205,30,50);

    stand2=new Stand(900,200,190,10);
    block17=new Block(836,170,30,50);
    block18=new Block(868,170,30,50);
    block19=new Block(900,170,30,50);
    block20=new Block(932,170,30,50);
    block21=new Block(964,170,30,50);
    block22=new Block(868,145,30,50);
    block23=new Block(900,145,30,50);
    block24=new Block(932,145,30,50);
    block25=new Block(900,120,30,50);


    polygon=new Polygon(100,200,30)
    slingshot=new SlingShot(polygon.body,{x:100,y:200})
    
    Engine.run(engine);
 }

 function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }

    ground.display();
    stand1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    stand2.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    polygon.display();
    slingshot.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    text("Score ="+ score,25,50)

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
  
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body);
  }
}

async function getBg(){
  var TimeInfo = await fetch("http://worldclockapi.com/api/json/est/now")
  var TimeInfoJSON = await TimeInfo.json()
  console.log(TimeInfoJSON.currentDateTime)
  var Hour = TimeInfoJSON.currentDateTime.slice(11,13)
  console.log(Hour)
  if(Hour>=06 && Hour<=18){
    bg = "bg.png"
  }
  else{
      bg = "bg2.jpg"
  }
  backgroundImg = loadImage(bg)
}