class Player{
    constructor(x,y){
        this.player = createSprite(x,y,20,20)
        this.imageRight = loadImage("PlayerRight.gif")
        this.imagetop = loadImage("PlayerUp.gif")
        this.imagedown = loadImage("PlayerDown.gif")
        this.imageleft = loadImage("PlayerLeft.gif")
    }
    moveleft(){
      this.player.x-=10
      this.player.changeImage('left')
    }
    movedown(){
      this.player.y+=10
      this.player.changeImage('down')
    }
    moveright(){
      this.player.x+=10
      this.player.changeImage('right')
    }
    movetop(){
      this.player.y-=10
      this.player.changeImage('top')
    }
    
    display(){
       this.player.addImage('right',this.imageRight)
       this.player.addImage('left',this.imageleft)
       this.player.addImage('down',this.imagedown)
       this.player.addImage('top',this.imagetop)
       this.player.scale=0.5
    }
}