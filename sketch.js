var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
 
 car= createSprite(50, 200, 50, 50);
 car.shapeColor=color("blue");
 wall=createSprite(1500,200,60,height/2);
 wall.shapeColor=color(80,80,80);

car.velocityX=5;

 //car.velocityX=speed;

 speed=random(25,31);
 weight=random(400,1500);
}

function draw() {
  background("pink");
 
  
  if(wall.x-car.x <(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 *weigth* speed* speed/22500;
  
  if(deformation>180)
  {
    car.shapeColor=color("yellow");
    wall.shapeColor=color("white");
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color("green");
    wall.shapeColor=color("white");

  }
  if(deformation<100)
  {
    car.shapeColor=color("red");
    wall.shapeColor=color("white");
  }
}
drawSprites(); 

}
  
