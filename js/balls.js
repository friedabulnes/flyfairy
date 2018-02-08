function Ball(canvas, ballX, ballY, ballSpeedX, ballSpeedY,width,height,color) {
    this.ballX= ballX;
    this.ballY= ballY;
    this.ballSpeedX=ballSpeedX;
    this.ballSpeedY=ballSpeedY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx=canvas; 
    this.radius = 20;
}
Ball.prototype.drawBall = function(){

    this.ctx.beginPath();
    this.ctx.arc(this.ballX,this.ballY,this.radius,0,Math.PI*2,true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill(); 
}  
Ball.prototype.updateBall = function (){
    this.drawBall();
    this.ballX += this.ballSpeedX;
    this.ballY += this.ballSpeedY;
   
    if (this.ballY + this.radius > myGame.board.height || this.ballY - this.radius < 0) {
      this.ballSpeedY *= -1;
      console.log("regresa")
    }
    if ( this.ballX + this.radius  > myGame.board.width ||  this.ballX - this.radius < 0) {
      this.ballSpeedX *= -1;
      console.log("regresa2")

    }
   }
Ball.prototype.checkCollision = function (){
    var hitBall = myGame.player1.width -this.radius
}


