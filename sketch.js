var canvas;
var gameState=0;
var playerCount;
var database;
var form,player,game;
var allplayers;
var car1,car2,car3,car4;
var cars;
var trackImage,car1Img,car2Img,car3Img,car4Img,groundImage;

function preload(){
trackImage=loadImage("images/track.jpg");
car1Img=loadImage("images/car1.png");
car2Img=loadImage("images/car2.png");
car3Img=loadImage("images/car3.png");
car4Img=loadImage("images/car4.png");
groundImage=loadImage("images/ground.png");

}

function setup(){
  database= firebase.database();
  canvas=createCanvas(displayWidth+300,displayHeight+50);

  game= new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");

 if(playerCount===4){
    game.update(1);
 }
  
    if(gameState===1){
      clear ();
      game.play();
    }
  
    if(gameState===2){
      game.end();
    }
}

