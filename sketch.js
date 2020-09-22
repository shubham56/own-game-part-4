var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38;
var barre1,barrel2,barrel3,barrel4,barrel5,barrel6,barrel7,barrel8,barrel9,barrel10,barrel11,barrel12,barrel13,barrel14,barrel15,barrel16,barrel17,barrel18,barrel19,barrel20,barrel21,barrel22,barrel23,barrel24,barrel25,barrel26,player;
var soldier,soldier1,soldier2,soldier3,soldier4,soldier5,soldier6,soldier7,soldier8,soldier9,terrorist1,terrorist2,terrorist3,terrorist4,terrorist5,terrorist6,terrorist7,terrorist8,terrorist9,terrorist10; 
var bullet,player_bullet;
var dir_flag = 0;
var score = 0;

function preload (){
  wall_Image = loadImage("images/wall1.png");
  wall_Image1 = loadImage("images/wall2.jpg");
  soldier_Image = loadImage('images/soldier.png')
  soldier1_Image = loadImage('images/soldier1.png')
  soldier2_Image = loadImage('images/soldier2.png')
  soldier3_Image = loadImage('images/soldier3.png')
  bullet1_Image = loadImage('images/bullet1.png')
  bullet2_Image = loadImage('images/bullet2.png')
  bullet3_Image = loadImage('images/bullet3.png')
  bullet4_Image = loadImage('images/bullet4.png')
}

function setup() {
  createCanvas(1366,625);

  // creating all the walls
    wall1 = new Wall(575,315,10,100);
    wall1.display(wall_Image,0.125);

    wall2 = new Wall(750,315,10,100);
    wall2.display(wall_Image,0.125);

    wall3 = new Wall(595,270,40,10);
    wall3.display(wall_Image1,0.077);

    wall4 = new Wall(595,360,40,10);
    wall4.display(wall_Image1,0.077);

    wall5 = new Wall(725,270,40,10);
    wall5.display(wall_Image1,0.077);

    wall6 = new Wall(725,360,40,10);
    wall6.display(wall_Image1,0.077);

    wall7 = new Wall(500,315,10,100);
    wall7.display(wall_Image,0.125);

    wall8 = new Wall(825,315,10,100);
    wall8.display(wall_Image,0.125);

    wall9 = new Wall(660,210,270,10);
    wall9.display(wall_Image1,0.2);

    wall10 = new Wall(660,410,270,10);
    wall10.display(wall_Image1,0.2);
  
    wall11 = new Wall(240,315,270,10);
    wall11.display(wall_Image,0.2);

    wall12 = new Wall(1100,315,270,10);
    wall12.display(wall_Image,0.2);

    wall13 = new Wall(195,240,270,10);
    wall13.display(wall_Image1,0.15);

    wall14 = new Wall(195,390,270,10);
    wall14.display(wall_Image1,0.15);

    wall15 = new Wall(1145,240,270,10);
    wall15.display(wall_Image1,0.15);

    wall16 = new Wall(1145,390,270,10);
    wall16.display(wall_Image1,0.15)
  
    wall17 = new Wall(350,150,270,10);
    wall17.display(wall_Image1,0.15)

    wall18 = new Wall(395,100,270,10);
    wall18.display(wall_Image,0.15)
  
    wall19 = new Wall(350,500,270,10);
    wall19.display(wall_Image1,0.15)
   
    wall20 = new Wall(400,550,270,10);
    wall20.display(wall_Image,0.15)

    
    wall21 = new Wall(990,150,270,10);
    wall21.display(wall_Image1,0.15)

    wall22 = new Wall(940,100,270,10);
    wall22.display(wall_Image,0.15)

    
    wall23 = new Wall(1010,480,270,10);
    wall23.display(wall_Image1,0.15)

    
    wall24 = new Wall(955,530,270,10);
    wall24.display(wall_Image,0.15)

    wall25 = new Wall(790,520,270,10);
    wall25.display(wall_Image1,0.2)

    
    wall26 = new Wall(640,520,270,10);
    wall26.display(wall_Image1,0.2)

    
    wall27 = new Wall(130,550,270,10);
    wall27.display(wall_Image1,0.2)
    
    
    wall28 = new Wall(1025,595,270,10);
    wall28.display(wall_Image1,0.2)

    wall29 = new Wall(1105,610,270,10);
    wall29.display(wall_Image,0.1)

    wall30 = new Wall(500,70,270,10);
    wall30.display(wall_Image,0.12)

    wall31 = new Wall(545,110,270,10);
    wall31.display(wall_Image1,0.12)
    
    wall32 = new Wall(100,40,270,10);
    wall32.display(wall_Image,0.1)

    wall33 = new Wall(50,70,270,10);
    wall33.display(wall_Image1,0.12)

    wall34 = new Wall(200,105,270,10);
    wall34.display(wall_Image,0.12)

    wall35 = new Wall(1290,300,270,10);
    wall35.display(wall_Image,0.2)

    wall36 = new Wall(1290,210,270,10);
    wall36.display(wall_Image,0.2)

    wall35 = new Wall(1290,450,270,10);
    wall35.display(wall_Image,0.2)

    wall36 = new Wall(1360,300,270,10);
    wall36.display(wall_Image1,0.2)

    wall36 = new Wall(1200,60,270,10);
    wall36.display(wall_Image,0.2)

    //making the player

    player = createSprite(550,600,30,30);
    player.addImage(soldier3_Image);
    player.scale = 0.2;

  // creating all the barrels

  barrel1 = new Barrel(470,300)
  barrel1.display();

  barrel2 = new Barrel(470,340)
  barrel2.display();

  barrel3 = new Barrel(855,300)
  barrel3.display();

  barrel4 = new Barrel(855,340)
  barrel4.display();

  barrel5 = new Barrel(690,556)
  barrel5.display();

  barrel6 = new Barrel(730,556)
  barrel6.display();

  barrel7 = new Barrel(987,513)
  barrel7.display();

  barrel8 = new Barrel(100,519)
  barrel8.display();

  barrel9 = new Barrel(430,570)
  barrel9.display();

  barrel10 = new Barrel(330,470)
  barrel10.display();

  barrel11 = new Barrel(275,370)
  barrel11.display();

  barrel12 = new Barrel(205,274)
  barrel12.display();

  barrel13 = new Barrel(364,120)
  barrel13.display();

  barrel14 = new Barrel(910,100)
  barrel14.display();
   
  barrel15 = new Barrel(1065,300)
  barrel15.display();

  barrel16 = new Barrel(1065,338)
  barrel16.display();

  barrel17 = new Barrel(560,140)
  barrel17.display();

  barrel18 = new Barrel(1350,20)
  barrel18.display();

  barrel19 = new Barrel(1270,20)
  barrel19.display();

  barrel20 = new Barrel(1313,20)
  barrel20.display();

  barrel21 = new Barrel(1350,608)
  barrel21.display();
  
  barrel22 = new Barrel(1313,608)
  barrel22.display();

  barrel23 = new Barrel(1350,570)
  barrel23.display();

  barrel24 = new Barrel(20,200)
  barrel24.display();

  barrel24 = new Barrel(20,240)
  barrel24.display();

  //creating the soldiers

    soldier1 = new Soldier(50,600,20,20);
    soldier2 = new Soldier(150,600,20,20);
    soldier3 = new Soldier(250,600,20,20);
    soldier4 = new Soldier(350,600,20,20);
    soldier5 = new Soldier(450,600,20,20);
    soldier6 = new Soldier(650,600,20,20);
    soldier7 = new Soldier(750,600,20,20);
    soldier8 = new Soldier(900,600,20,20);
    soldier9 = new Soldier(1200,600,20,20);

    //creating the terrorist

    terrorist1 = new Terrorist(150,50,20,20);
    terrorist2 = new Terrorist(250,50,20,20);
    terrorist3 = new Terrorist(350,50,20,20);
    terrorist4 = new Terrorist(450,50,20,20);
    terrorist5 = new Terrorist(550,50,20,20);
    terrorist6 = new Terrorist(650,50,20,20);
    terrorist7 = new Terrorist(750,50,20,20);
    terrorist8 = new Terrorist(900,50,20,20);
    terrorist9 = new Terrorist(1100,50,20,20);
    terrorist10 = new Terrorist(1300,50,20,20);

    //movement of soldiers
  soldier1.movement();
  soldier2.movement();
  soldier3.movement();
  soldier4.movement();
  soldier5.movement();
  soldier6.movement();
  soldier7.movement();
  soldier8.movement();
  soldier9.movement();

}



function draw() {
  background(80,80,80);  

  //soldier boundari
  soldier1.boundaries();
  soldier2.boundaries();
  soldier3.boundaries();
  soldier4.boundaries();
  soldier5.boundaries();
  soldier6.boundaries();
  soldier7.boundaries();
  soldier8.boundaries();
  soldier9.boundaries();

/*
  //updating score
  terrorist1.score();
  terrorist2.score();
  terrorist3.score();
  terrorist4.score();
  terrorist5.score();
  terrorist6.score();
  terrorist7.score();
  terrorist8.score();
  terrorist9.score();
  terrorist10.score();
  */

    if(dir_flag === 1){
    if(keyWentDown("space")){
      player_bullet = createBullet();
      player_bullet.x = player.x;
      player_bullet.y = player.y;
      player_bullet.addImage(bullet1_Image)
      player_bullet.scale=0.125;

      player_bullet.velocityX = 10;

      
    }
  }

  if(dir_flag === 2){
    if(keyWentDown("space")){
      player_bullet = createBullet();
      player_bullet.x = player.x;
      player_bullet.y = player.y;
      player_bullet.addImage(bullet2_Image)
      player_bullet.scale=0.125;

      player_bullet.velocityY = -10;

    }
  }

  if(dir_flag === 3){
    if(keyWentDown("space")){
      player_bullet = createBullet();
      player_bullet.x = player.x;
      player_bullet.y = player.y;
      player_bullet.addImage(bullet4_Image)
      player_bullet.scale=0.125;

      player_bullet.velocityX = -10;

    }
  }

  if(dir_flag === 4){
    if(keyWentDown("space")){
      player_bullet = createBullet();
      player_bullet.x = player.x;
      player_bullet.y = player.y;
      player_bullet.addImage(bullet3_Image)
      player_bullet.scale=0.125;

      player_bullet.velocityY = 10;
    }
  }

  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0;
    player.velocityY = 0;
  }

  if(keyWentUp(UP_ARROW)){
    player.velocityX = 0;
    player.velocityY = 0;
  }

  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0;
    player.velocityY = 0;
  }

  if(keyWentUp(DOWN_ARROW)){
    player.velocityX = 0;
    player.velocityY = 0;
  }

  soldier1.display();
  soldier2.display();
  soldier3.display();
  soldier4.display();
  soldier5.display();
  soldier6.display();
  soldier7.display();
  soldier8.display();
  soldier9.display();

  terrorist1.display();
  terrorist2.display();
  terrorist3.display();
  terrorist4.display();
  terrorist5.display();
  terrorist6.display();
  terrorist7.display();
  terrorist8.display();
  terrorist9.display();
  terrorist10.display();

  //displaying score
  text("score :" + score ,1000,50);

  drawSprites();

}

function keyPressed(){

  // up arrow key for forward movement 

  if(keyCode === 38){
    player.velocityY = -3;
    player.velocityX = 0;
    dir_flag = 2;
    player.addImage(soldier3_Image);
  }

  // A key for left movement

  if(keyCode === 37){
    player.velocityY = 0;
    player.velocityX = -3;
    dir_flag = 3;
    player.addImage(soldier2_Image);
  }

  // S key for backward movement

  if(keyCode === 40){
    player.velocityY = 3;
    player.velocityX = 0;
    dir_flag = 4;
    player.addImage(soldier1_Image);
  }

  // right arrow key for right movement 
  
  if(keyCode === 39){
    player.velocityY = 0;
    player.velocityX = 3;
    dir_flag = 1;
    player.addImage(soldier_Image);
  }
  
/*
  if(keyCode === 32){
    createBullet();
  }
  */
}

function createBullet(){
  var bullet = createSprite(100,100,5,5);
  //bullet.velocityX = 5;
  return bullet;
}