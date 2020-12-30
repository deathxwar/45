const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player;
var zombieArr=[];
var Background;
var bulletArr=[];
var bullet;
var bulletDir=1;
var wall1,wall2,wall3,wall4,wall6,wall7;
var healthbar;
var zombie;
var zombieAttackimg,zombieAttack;
var bgsound;
function preload(){
    Background =loadImage("zombieBackground.gif")
    zombieAttackimg = loadAnimation("zombieattack/0.png","zombieattack/1.png","zombieattack/2.png",
    "zombieattack/3.png","zombieattack/4.png","zombieattack/5.png","zombieattack/6.png",
    "zombieattack/7.png","zombieattack/8.png")
    bgsound = loadSound("sound/background.wav")
    
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-150);
    
    healthbar = new HealthBar();
    player = new Player(500,200)

    
}

function draw(){
    background(Background)
    text('HealthBar',60,70)
    // wall
    wall1   = createSprite(730,80,1030,30)
    wall2   = createSprite(730,610,1030,30)
    wall3   = createSprite(250,480,30,280)
    wall4   = createSprite(250,150,30,100)
    wall5   = createSprite(1260,480,30,280)
    wall6   = createSprite(1260,140,30,150)
    wall1.visible=false
    wall2.visible=false
    wall3.visible=false    
    wall4.visible=false
    wall5.visible=false
    wall6.visible=false
    //spawn zombies
    if(frameCount%500===0){
        zombie=new Zombie(20,290)
        zombieArr.push(zombie)
    }
    //bullet fire
    if(keyWentDown('space')){
        if(bulletDir===1){
            bullet = new Bullet(player.player.x+50,player.player.y+33)
        }
        if(bulletDir===0){
            bullet = new Bullet(player.player.x-40,player.player.y-33)

        }
        if(bulletDir===2){
            bullet = new Bullet(player.player.x+34,player.player.y-55)
        }
        if(bulletDir===3){
            bullet = new Bullet(player.player.x-32,player.player.y+40)
        }
        bulletArr.push(bullet)
    }
    //bullet,zombie,and player display
    for(var i = 0;i<bulletArr.length;i++){
        bulletArr[i].display(bulletDir);
      }  
    for(var i = 0;i<zombieArr.length;i++){
      zombieArr[i].display();
    }  
    player.display();
    //player movement
    if(keyDown("a")){
        player.moveleft();
        bulletDir=0
    }
    if(keyDown("d")){
        player.moveright();
        bulletDir=1
    }
    if(keyDown("w")){
        player.movetop();
        bulletDir=2
    }
    if(keyDown("s")){
        player.movedown();
        bulletDir=3
    }
    drawSprites();
}   