var canvas;
var player;
var playerImg;


function preload(){

}


function setup(){
    canvas = createCanvas(windowWidth, windowHeight)
    
    //criando o player 
    player = createSprite(windowWidth/4,windowHeight-50,50,50)
}


function draw(){
    background('red');
    
    drawSprites();
}


