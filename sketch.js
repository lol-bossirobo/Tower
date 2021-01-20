
//Namespaces
//const so that the variable name doesn't get modified

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var world,eng,bod,con;
var ground,stand; 
var block1,block2,block3;
var sling;
var polygon;
var polImg;
//preload the images

function preload () {
    
    polImg = loadImage("polygon.png");

}

function setup () {
//creating canc
    createCanvas(900,400);

    eng = Engine.create();

    world = eng.world;
    Engine.run(eng);

    ground = new Ground();
    stand = new Stand(650,300,200,10);
    block1 = new Block(650,270);
    block2 = new Block(650,240);
    block3 = new Block(650,210);
    block4 = new Block(670,270);
    block5 = new Block(670,240);
    block6 = new Block(670,210);
    polygon=Bodies.circle(100,200,20);
    World.add(world,polygon);

    sling = new Sling(this.polygon,{x:100, y:200});



}

function draw () {

   background("brown");
  text("space to reload", 800,40);
   ground.display();
   stand.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   sling.display();
   imageMode(CENTER);
   image(polImg,polygon.position.x,polygon.position.y,60,60);

 //   Engine.update();












}
    
    
function mouseDragged() {

    Body.setPosition(this.polygon,{x: mouseX, y: mouseY});

}

function mouseReleased () {

    sling.fly();

}

function keyPressed() {

    if(keyCode === 32){
        sling.attach(this.polygon);
    }



}