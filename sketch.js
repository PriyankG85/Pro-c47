const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var startup = 0;
var play = 1;
var gameState = 1;

var engine, world;
var bird, jump_sound, hit_sound, die_sound, point_sound;
var bgImg, livesImg, groundImg;
var foodCollection = 0;
var lives = 3;

function preload() {
  bgImg = loadImage('images/bg.png');
  livesImg = loadImage('images/lives.png');
  groundImg = loadImage('images/ground.png');
  jump_sound = loadSound('sounds/wing.wav');
  hit_sound = loadSound('sounds/hit.wav');
  die_sound = loadSound('sounds/die.wav');
  point_sound = loadSound('sounds/point.wav');
}

function setup() {
  createCanvas(displayWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 2;

  bird = new flappyBird(width / 3, height / 2);

}

function draw() {
  background(bgImg);

  drawSprites();
  Engine.update(engine);

  bird.display();


  if (gameState == 0) {
    // var playBtn=createButton()

  }

  // console.log(lives);

  if (gameState == 1) {
    // if (keyCode == 32 && lives > 0) {
    //   lives -= 1;
    // }
    // lives--;
    Body.setStatic(bird.body, false);
    textSize(26);
    fill('brown');
    text('Food Collected: ' + foodCollection, 120, 60);
    var a = 350;
    for (var i = 1; i <= lives; i++) {
      a += 40;
      var live = createSprite(a, 50, 30, 30);
      live.addImage(livesImg);
      live.scale = 0.4;
    }
  }
}

function keyPressed() {
  if ((keyCode == 74 || keyCode == 38) && gameState == 1) {
    Body.applyForce(bird.body, bird.body.position, { x: 0, y: -70 });
    jump_sound.play();
  }
}






