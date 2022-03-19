var papa, shaurya;
var hbpopUp, papaPic, sonPic;
var ob1,ob2,ob3;
var ground, surprise;

function preload() {
  hbImg = loadImage("happy bday.jpg")
  papaImg = loadImage("dadImage.png")
  sonImg = loadImage("son img.png")
  bgImg = loadImage("bg.jpg");

  //ob1Image = loadImage("");
  //ob2Image = loadImage("");
  //ob3Image = laodImage("");
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  ground = createSprite(width/2,height-50, windowWidth,100);

  papa = createSprite(100, height-130, 50, 50);
  papa.scale = 0.6
  papa.addImage(papaImg);

  shaurya = createSprite(width - 200, height-210, 50, 50);
  shaurya.addImage(sonImg);
  shaurya.scale = 0.2

  ob1 = createSprite(width/3-50, height-125, 25, 50);
  //ob1.addImage(ob1Image);
  //scale if required
  ob2 = createSprite(width/2, height-125, 25, 50);
  //ob2.addImage(ob2Image);
  //scale if required
  ob3 = createSprite(width/2+300, height-125, 25, 50);
  //ob3.addImage(ob3Image);
  //scale if required

  hbpopUp = createSprite(width/2, height/2);
  hbpopUp.addImage(hbImg);
  hbpopUp.visible = false;

  surprise = createElement("h2");
  surprise.position(width/2 - 150, height/2 - 250);
  surprise.html("Click button for surprise");
  surprise.hide();

  button = createButton("Click");
  button.size(100, 50);
  button.color = "#808080";
  button.position(width/2 - 50, height/2 - 350);
  button.hide();

}

function draw() {
  background(bgImg);  

  if(keyDown("RIGHT_ARROW")){
    papa.velocityX = 4;
  }

  if(keyDown("LEFT_ARROW")){
    papa.velocityX = -4;
  }

  if(keyDown("UP_ARROW")) {
    papa.velocityY = -12;
  }
  papa.velocityY = papa.velocityY + 0.8;
  papa.collide(ground);

  if(papa.collide(shaurya)){
    hbpopUp.visible = true;

    setTimeout( () => {
      hbpopUp.visible = false;
      surprise.show();
      button.show();
}, 5000)
  }

  

button.mousePressed(() =>{
  letter();
})

if(papa.collide(ob1) || papa.collide(ob2) || papa.collide(ob3)){
  papa.setVelocity(0,0);

  swal({
      title : 'Try Again !!',
      text : "You Can Do It",
      imageUrl : "funny.jpeg",
      imageSize : "200x200",
      confirmButtonText : "Play Again"  
    },
    function(isConfirm){
        if(isConfirm){
          location.reload();
        }
    }
  );
  }

  drawSprites();
}

function letter(){
  swal({
      title : 'LOVE YOU DAD',
      text : "Dear Papa, HAPPY BIRTHDAY! To the best papa in the world! I hope you are having a joyous life to all the years you have been on this planet! I cannot say how much I love you because it is beyond anything in the whole universe.  I am extremely thankful for everything you have did for me and in return I give you my respect and loyalty, Also, I give you THIS short BUT EXCELLENT GAME I MADE. I hope you enjoyed the game as I put a lot of effort into it and making you smile 😊!  Have a wonderful evening (and life) because it is your special day the day you were born. I love you soo much!!! 😊😉  From your one and only favourite son!  Shaurya Gangboir 😊 (the president of tech)",
      imageUrl : "heart.jpg",
      imageSize : "150x150",
      confirmButtonText : "Happy Birthday"
  });
}