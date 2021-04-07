var cat,mouse,garden;    
var catImg,mouseImg,gardenImg 



function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("Images/mouse1.png")
    catImg2 = loadAnimation("images/cat2.png,cat3.png")
    mouseImg2 = loadAnimation("images/mouse2.png,mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(150,230,70,6-0);
    cat.addAnimation("catImg", cat_running);
    cat.scale = 0.08
    
    mouse = createSprite(50,50,20,50);
    mouse.addAnimation("mousseImg", mouse_running);
    mouse.scale = 0.06



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){



}
    drawSprites();
}





function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== LEFT_ARROW){

mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing")
mouse.frameDelay=25;

}

if(keyCode=== RIGHT_ARROW){

    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25;
    
    }
}
