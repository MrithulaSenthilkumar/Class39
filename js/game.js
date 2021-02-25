class Game {
    constructor(){
    }

    // three functions  
    // 1>  getState = we are going to ref the data from real time database created by us.
    // 2> update = we are going update ganestate  0, 1, 2
    
    // 3>  start function means how the gamestate 0 works

    //   0 = start    1= play     2= end 

 getState(){
     var gameStateRef= database.ref("gameState");
     gameStateRef.on("value", function(data){
         gameState= data.val();
     })
 }


 update(state){
   database.ref("/").update({
     gameState: state
   })
 }


 start(){
     if(gameState===0){
        player= new Player();
        player.getCount();
        form= new Form ();
        form.display();
     }

     car1=createSprite(100,200);
     car1.addImage("car1",car1Img);
     car2=createSprite(300,200);
     car2.addImage("car2",car2Img);
     car3=createSprite(500,200);
     car3.addImage("car3",car3Img);
     car4=createSprite(700,200);
     car4.addImage("car4",car4Img);

     cars=[car1,car2,car3,car4];
     console.log(cars);
 }

 play(){
    form.hide();  
     textSize(30);
     text("Game Start", 120,100);
     Player.getplayerInfo();
     
      

     if(allplayers!==  undefined){
       background(groundImage);
       //image (the name of the variable we loaded the image,x,y,width,height)
       image(trackImage,-150,-displayHeight*3,displayWidth+460,displayHeight*5);
      //var displayposition=130;
      //index of the array.
      var index=0
      //x andy positions of the car.
      var x=150;
      var y;
  
      for(var i in allplayers){
        //add 1 to the index of every loop.
        index=index+1;
        //the x position of the cars.
        x=x+200;
        //use the data from the database to display the y position of the cars.
        y=displayHeight-allplayers[i].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
        
        /*if(i ==="player"+ player.index){
           fill("red");
        }
        else{
          fill("blue")
        }
        displayposition+=20;
        textSize(15);
        text (allplayers[i].name + ": "+ allplayers[i].distance,120,displayposition) 
 
      }*/
      if(index===player.index){
        cars[index-1].shapeColor="red";

        fill("red");
        circle(x,y,60);
        camera.position.x=displayWidth/2;
        camera.position.y=cars[index-1].y;
      }
 
     }

     
     if(keyIsDown(UP_ARROW)&& player.index !==null){
       player.distance+=20;
        player.updateName();

    }

    if(player.distance>3000){
  gameState=2;

    }
   drawSprites();    
 }


}
end(){
  console.log("gameEnded");
}

}