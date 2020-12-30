class Zombie{
    constructor(x,y){
        this.zombie = createSprite(x,y,20,20)
        this.imageleft = loadImage("zombieLeft.gif")
        this.imageright = loadImage("zombieRight.gif")
        this.imagedown = loadImage("zombieDown.gif")
        this.imageup = loadImage("zombieUp.gif")
    }

    display(){
        this.zombie.addImage('right',this.imageright)
        this.zombie.addImage('left',this.imageleft)
        this.zombie.addImage('down',this.imagedown)
        this.zombie.addImage('up',this.imageup)
        this.zombie.velocityX = 2
        this.zombie.scale=0.5

    }
}