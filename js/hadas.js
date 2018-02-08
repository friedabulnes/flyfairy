function Hada (canvas,height,width,posX,posY,image){
    this.height = height;
    this.width = width;
    this.ctx = canvas ;
    this.image = new Image();
    this.image.src = image;
    //Con esta funcion auto-ejecutamos drawBoard()
    this.image.addEventListener("load",this.drawHada.bind(this) )
    this.posx = posX;
    this.posy = posY;
    // this.lifes = 3; 
}

Hada.prototype.drawHada = function (){
    this.ctx.drawImage(this.image, this.posx, this.posy, this.width, this.height);
};

Hada.prototype.up = function () {
    this.posy = this.posy-10; 
 }

 Hada.prototype.down = function () {
    this.posy = this.posy+10;   
}

Hada.prototype.left = function () {
    this.posx = this.posx-10;   
}

Hada.prototype.right = function () {
    this.posx = this.posx+10;     
}  

Hada.prototype.touchBall = function(ball){
    return  (this.posx < ball.ballX + ball.width) &&
            (this.posx + this.width > ball.ballX) &&
            (this.posy < ball.ballY + ball.height) &&
            (this.posy + this.height > ball.ballY);
}
        
