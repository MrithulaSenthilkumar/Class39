class Form{
    constructor(){
      this.title= createElement("h2");
      this.input= createInput("Enter Your Name");
      this.button= createButton("play");
      this.greeting= createElement("h3");
    }


    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }

display(){
  
   this.title.html ("Car Racing Game");
   this.title.position(displayWidth/2+80,0);

   this.input.position(displayWidth/2+80,displayHeight/2);
   this.button.position(displayWidth/2+140,displayHeight/2+70);

   this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

    playerCount+=1;
    player.name= this.input.value();
    player.index=playerCount;
 
    
    player.updateName(player.name);
    player.updateCount(playerCount);
   
    this.greeting.html("Hello welcome " + player.name);
    this.greeting.position(displayWidth/2,displayHeight/2);
})
    }
}