var btngreen, btnred;
function setup() {
  createCanvas(400,400);

  btnred = createButton("red");
  btnred.postion(250,50);
  btnred.mousePressed(red_bg);


  btngreen = createButton("green");
  btngreen.postion(100,50);
  btngreen.mousePressed(green_bg);

  
}

function draw() 
{
  background(30);

  

}

function red_bg(){
  r = 255;
  g = 0;
  b = 0;
}
function green_bg(){
  r = 0;
  g = 255;
  b = 0;
}



