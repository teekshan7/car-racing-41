class Form{
constructor(){
   this.input=createInput("name")
   this.button=createButton('play')
   this.greeting=createElement('h3')
   this.reset=createButton('reset')
}
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}
display(){
    var title=createElement('h2')
    title.html("CAR RACING GAME")
    title.position(displayWidth/2-50,0)
    this.input.position(displayWidth/2-40,displayHeight/2-80)
    this.button.position(displayWidth/2+30,displayHeight/2)
    this.reset.position(displayWidth-100,20)
    this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    player.index=playerCount+1
    player.update()
    player.updateCount(player.index)
    this.greeting.html("WELCOME TO MY GAME "+player.name)
    this.greeting.position(displayWidth/2-70,displayHeight/4)
        
    })
    this.reset.mousePressed(()=>{
     game.update(0)
     player.updateCount(0)
    })

}
}