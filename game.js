function Game (canvas){
    this.board = new Board(canvas,600,1200);
    this.hada1 = new Hada(canvas,100,100,400,100,"img/hada5.png");
    this.hada2 = new Hada(canvas,90,90,800,100,"img/hada4.png");
    this.ball1 = new Ball(canvas,600,300,5,5,20,20,"pink"); 
    this.ball2 = new Ball(canvas,100,300,5,5,20,20,"pink"); 
    this.ball3 = new Ball(canvas,200,150,5,5,20,20,"pink"); 
} 

