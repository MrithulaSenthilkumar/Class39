class Player{
    constructor(){
        // index means playercount is an index
        this.name=null;
        this.index=null;
        this.distance= 0;


    }
    // 1. getcount 2. upadateCount    3. updateName


    getCount(){
        var playerCountRef= database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount= data.val();
        })
    }
  
    updateCount(count){
        database.ref("/").update({
            playerCount:count,
        })
    }

    updateName(){

        // in databas you have player1  player2
        // "player"+ playerCount
             // player1
        var playerIndex= "players/player"+ this.index;
        database.ref(playerIndex).set({
            // Name:A
            name:this.name,
            distance:this.distance
        })
    }


    static getplayerInfo(){
       var playerInfo=database.ref("players");
       playerInfo.on("value", function(data){
           allplayers=data.val();
       })
    }




}
