class Game{
constructor(){

}
    getState(){
    var gameStateref=database.ref('gameState')
    gameStateref.on("value",function(data){gameState=data.val()})

    }
    update(state){
    database.ref('/').update({gameState:state})
    }



   async start(){
    if (gameState===0){
    player=new Player()
    var playerCountref=await database.ref('playerCount').once("value")
    if (playerCountref.exists()){
        playerCount=playerCountref.val()
        player.getCount();
    }
    form=new Form()
    form.display() 
    }
    car1=createSprite(100,200)
    car1.addImage("car1",car1Image)
    car2=createSprite(300,200)
    car2.addImage("car2",car2Image)
    car3=createSprite(500,200)
    car3.addImage("car3",car3Image)
    car4=createSprite(700,200)
    car4.addImage("car4",car4Image)
    cars=[car1,car2,car3,car4]
}

    play(){
   // console.log("beforePlay")
    form.hide()
    textSize(30)
    text("GAME START",120,100)
    Player.getPlayerInfo()
    if (allPlayers!=undefined){
        var index=0,x=0,y=0
   // console.log("insidePlay")
    for (var plr in allPlayers){
        background(groundImage)
        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x
        cars [index-1].y=y
        if(index===player.index){
            stroke(10)
            fill("red")
            ellipse(x,y,60,60)
        // cars[index-1].shapeColor="red"
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
        }
    }
    }
    if (keyIsDown(UP_ARROW)){
        player.distance+=10
        player.update()
    }
    if (player.distance>3860){
        gameState=2
    }
    drawSprites()
    }
    end(){
        console.log("game END")
    }
    
    }