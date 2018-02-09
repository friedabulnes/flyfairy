var i;
function Board (canvas,height,width){
    this.x = 150;
    this.height = height;
    this.width = width;
    this.ctx = canvas ;
    this.image = new Image();
    this.image.src = "img/bosque.png";
    //Con esta funcion auto-ejecutamos drawBoard()
    this.image.addEventListener("load",this.drawBoard.bind(this) )
}
Board.prototype.drawBoard = function (){
    if(this.x<-1200) this.x = 0;
    this.x--;
    this.ctx.drawImage(this.image, this.x, 0, this.width, this.height)
    this.ctx.drawImage(this.image, this.x+1200, 0, this.width, this.height)
    myGame.hada1.drawHada();
    myGame.hada2.drawHada();
}
Board.prototype.clearBoard = function (){
    this.ctx.clearRect(0,0,this.width,this.height)
}

