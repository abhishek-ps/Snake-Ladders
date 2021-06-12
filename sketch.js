var boardImg;
var snake1,snake2;
var dice;
var number=1;
var player,playerImg;

function preload(){
    boardImg = loadImage("images/Snakes-Ladders.jpg");
    playerImg = loadImage("images/boy.png")
}

function setup(){
    var canvas = createCanvas(800,800);
    snake1 = createSprite(650,350,100,100);
    snake2 = createSprite(200,60,100,100);
    player = createSprite(335,650);
    player.addImage(playerImg);
}

function draw(){
    background(0);
    imageMode(CENTER);
    image(boardImg,400,400);

    if(keyWentDown("space")){
        dice = Math.round(random(1,6));
        number = number+dice;
        console.log(dice,number);
        player.x = player.x+((number-1)*150);
    }
    drawSprites();
    
   
}

/*function rollDice(){
    return Math.round(random(1,6));
}*/