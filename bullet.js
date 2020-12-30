class Bullet{
    constructor(x,y){
        this.body = createSprite(x,y,5,5)
        this.imageright = loadImage("bulletright.png")
        this.imageleft = loadImage("bulletleft.png")
        this.imageup = loadImage("bulletup.png")
        this.imagedown = loadImage("bulletdown.png")
    }
    display(bulletDir){
        
        if(bulletDir===0){
            this.body.velocityX = -3
            this.body.addImage(this.imageleft)
        }
        else if(bulletDir===1){
            this.body.velocityX = 3
            this.body.addImage(this.imageright)
        }
        else if(bulletDir===2){
            this.body.velocityY=-3
            this.body.addImage(this.imageup)
        }
        else if(bulletDir===3){
            this.body.velocityY = 3
            this.body.addImage(this.imagedown)
        }
        this.body.scale=0.5
    }
}