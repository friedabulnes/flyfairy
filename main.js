var canvas;
var myGame;
var fps = 50;
var x=0;
var interval;
var frames = 0;
var music;

// const lifes = 3;
// var showingWinScreen = false;

$(document).ready(function(){
  $(".button").on("click",function(){
        var sound = new Audio("sonidos/Beautiful Fairytale Music - Sky Sylph.mp3");
        sound.play();
        canvas = document.getElementById("board").getContext('2d');
        myGame = new Game (canvas);
        // myGame.board.drawBoard();
        // myGame.ball.drawBall(); 
        keyListenerHada();
        interval = setInterval(updateGame,1000/fps);          
})
})


function keyListenerHada (){
  document.addEventListener("keydown", function(e){
    e.preventDefault();
    switch(e.keyCode){
    case 38:
      myGame.hada2.up();
      break;
    case 40:
      myGame.hada2.down();
      break;
    case 37:
      myGame.hada2.left();
      break;
    case 39:
      myGame.hada2.right();
      break;
      case 87:
      myGame.hada1.up();
      break;
    case 83:
      myGame.hada1.down();
      break;
    case 65:
      myGame.hada1.left();
      break;
    case 68:
      myGame.hada1.right();
      break;
    }
  });
}

// function keyListenerHada(evt){
//   if(showingWinScreen){
//       hada1= 0; 
//       hada2= 0; 
//       showingWinScreen = false;  
//   }

function updateGame(){
  frames++;
  // console.log(frames);
  myGame.board.clearBoard();
  myGame.board.drawBoard();
  myGame.ball1.updateBall();
  myGame.ball2.updateBall();
  myGame.ball3.updateBall();
  checkIfTouch();
  
  // startGame();
  // stopGame();
}

function sound() {
  this.sound = document.createElement("audio");
  this.sound.src = "sonidos/Beautiful Fairytale Music - Sky Sylph.mp3";
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
   this.sound.pause();
  }    
}

function checkIfTouch(){
  if(myGame.hada1.touchBall(myGame.ball1) || myGame.hada1.touchBall(myGame.ball2) || myGame.hada1.touchBall(myGame.ball3)){
    // myGame.hada1.lifes--
    // console.log(myGame.hada1.lifes);
    clearInterval(interval);
  }
    if(myGame.hada2.touchBall(myGame.ball1) || myGame.hada2.touchBall(myGame.ball2) || myGame.hada2.touchBall(myGame.ball3)){
      // myGame.hada2.lifes--
      // console.log(myGame.hada2.lifes);
      clearInterval(interval);
  }
}

// function checkLIfes(){
//   if(myGame.hada1.)
// }


// function startGame(){
//   if(showingWinScreen){
//     canvasCtx.fillStyle = "black"; 
//     if(hada1 >= WINNING_SCORE) {
//         canvasCtx.fillText("left player won!",350,200);
//     }else if(hada2 >= WINNING_SCORE) {
//         canvasCtx.fillText("right player won!",350,200);
        
//     }
//     canvasCtx.fillText("AGAIN!",350,500)
//     return; 
// }

// }

// function stopGame(){
//   ctx.fillStyle = "black";
//   ctx.font = "100px Arial"
//   ctx.fillText("GAME OVER", 100,200);
//   ctx.fillStyle = "red";
//   ctx.font = "30px Arial"
//   ctx.fillText("Press 'ESC' for restart", 100,300);
//   clearInterval(interval);
// }
