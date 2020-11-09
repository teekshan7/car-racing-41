var ball,position,database;
var gameState=0,playerCount=0,form,player,game
var car1,car2,car3,car4,cars
var   allPlayers
var trackImage,groundImage,car1Image,car2Image,car3Image,car4Image

function preload(){
    car1Image=loadImage("images/car1.png")
    car2Image=loadImage("images/car2.png")
    car3Image=loadImage("images/car3.png")
    car4Image=loadImage("images/car4.png")
    trackImage=loadImage("images/track.jpg")
    groundImage=loadImage("images/ground.png")
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);;
    database=firebase.database()

    game=new Game()
    game.start() 
}
function draw(){
    background("white");
    if(playerCount===4){
    game.update(1)
    }
    game.getState()
    if(gameState===1){
        clear()
        game.play()
    }
    if (gameState===2){
        game.end()
    }

}



    