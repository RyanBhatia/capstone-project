const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rock
var rope;
var fruit_con;


var bg_img;
var rock;
var boat;
var boats
var button

function preload()
{
  bg_img = loadImage('background.png');
  rock = loadImage('hi2.png');
  boat = loadImage('hi.png');

}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
boats = createSprite(420,625,100,100)
boats.addImage(boat)
boats.scale = 0.5
button = createImg('cut_button.png')
button.position(220,30)
button.size(50,50)
button.mouseClicked(drop)
  rope = new Rope(7,{x:245,y:30});
  rock = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,rock);

  fruit_con = new Link(rope,rock);

  /*if(boats.isTouching(rock))
  {
    boat.visible = false
    rock.visible = false
  }*/

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  
}

function draw() 
{
  background(51);

  image(bg_img,0,0,490,690);
push()
imageMode(CENTER);
if(rock!= null ){
  image(rock,rock.position.x,rock.position.y,70,70);
}
pop()


  rope.show();

  Engine.update(engine);
 ground.show()

 
drawSprites()
}
 
   


function drop(){
  rope.break()
  fruit_con.detach()
  fruit_con = null
}





