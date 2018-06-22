'use strict';

const playersOriginalX = 200;
const playersOriginalY = 390;
const enemyOriginalSpeedMultiplier = 100;

//our super class
class Character {
  constructor() {
    
  }

  // Drawing the enemy on the screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Enemies our player must avoid
class Enemy extends Character{
  constructor() {
    super();
    this.x = -100;
    this.y = getRandomNumber()*70; //50 125 225
    this.speed = getRandomNumber()*enemyOriginalSpeedMultiplier;
    this.sprite = 'images/enemy-bug.png';
  }

  update(dt) {
    this.x += this.speed*dt;

    //if they collide
    if (player.x+78 > this.x && player.x-78 < this.x && player.y-30 < this.y && player.y+30 > this.y) {
      window.setTimeout(()=>{
        player.x = playersOriginalX;
        player.y = playersOriginalY;
      },50); //wait for 50 milliseconds just to let the move appear then put the player back to its original position.
    }

    //if the enemy went out of the canvas
    if (this.x > 550) {
      this.x = -100;
      this.y = getRandomNumber()*70;
      this.speed = getRandomNumber()*enemyOriginalSpeedMultiplier;
    }

    //if the player reached the water
    if (player.y < 60) {
      document.getElementById('winner-msg').style.display = 'block';
    }
  }


}

//a function to return random numbers. we need it for speed multiplier and random y axes position.
function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

//Our player
class Player extends Character{
  constructor() {
    super();
    this.sprite = 'images/char-boy.png';
    this.x = playersOriginalX;
    this.y = playersOriginalY;
  }

  update() {

  }



  handleInput(key) {
    if (key=="right" && this.x < 400) {
      this.x += 100;
    } else if (key=="left" && this.x > 0) {
       this.x -= 100;
    } else if (key=="up" && this.y > 0) {
      this.y -= 82;
    } else if (key=="down" && this.y < 350) {
      this.y += 82;
    };
  }
}

//instantiating the enemies and player
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var allEnemies = [enemy1, enemy2, enemy3, enemy4];
var player = new Player();


//listening for keypresses to move player
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//Reseting the game or playing Again
function playAgain() {
  player.x = playersOriginalX;
  player.y = playersOriginalY;
  document.getElementById('winner-msg').style.display = 'none';
  console.log("got it");
}
