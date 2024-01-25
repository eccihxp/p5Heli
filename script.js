var translateX=50;
var translateY=0;
 let rotation=0;
var X=100
var Y=-10
var R=1
var XX = 0
var W = 10
var RW = 1
var Y1 = 50
var Y2 = -50


function setup(){
    createCanvas(400, 400);
    angleMode(DEGREES);

}

function draw(){
    background(255,200,200);

    fill(256,256,256);
  
    translate(200+translateX,200+translateY);

    rect(62.5+X,-40+Y,20,100); //helicopter body
    
    rect(-100+X,0+Y,200,20); //helicopter tail

    ellipse(-100+X,10+Y,100,50); //helicopter cockpit

    fill(0,0,0);
    

    rect(172.5-W/2,10,W,5); //propeller2-1
  
    rotate(rotation);
     
    rect(-2.5,-100,5,200); //propeller
  
    if (translateX == -110) {
      R = -1;
    }
    if (translateX == 110) {
      R = 1;
    }
     
    pop();
     
    push();
     
    scale(Math.random()*0.01+0.995);
    translateY=Math.random(1,10) * 3 + (mouseY-200);
    translateX=Math.random(1,10) * 3 + (mouseX-200)
     
    rotation=rotation+10;

    fill(256,256,256);
    ellipse(-250+XX,Y1, 20, 20);
    ellipse(-250+XX,Y2,20,20);
    XX = XX+10
    if (XX == 400) {
      XX = 0;
      Y1 = Math.random(1,10) * 400;
      Y2 = Math.random(1,10) * 400;
    }
    W = W+(RW*10)
    if(W == 50){
      RW = -1
    }
    if (W == 0) {
      RW = 1
    }
    
}