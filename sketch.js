const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,obj1;
var engine,world,obj2;



function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  var obj1option = {
    isStatic: true
  }
  obj1 = Bodies.rectangle(0,392,800,3,obj1option);
  World.add(world,obj1);

var obj2option = {

restitution:1

}
obj2 = Bodies.rectangle(200,200,50,50,obj2option);
World.add(world,obj2);



  console.log(obj1);
  console.log(obj2);


}

function draw() {
  background("LIGHTGREEN");  
  Engine.update(engine);

  rect (obj1.position.x,obj1.position.y,800,5);
  rect (obj2.position.x,obj2.position.y,50,50);





 
}