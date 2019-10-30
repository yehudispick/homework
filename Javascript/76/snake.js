(function(){
    "use strict";

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const scoreNum = document.getElementById('score');
    const eat = document.getElementById('eat');
    const gameOver = document.getElementById('gameOver');
    
    function resizeCanvas(){
        canvas.width =window.innerWidth;
        canvas.height =  window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const SNAKE_SIZE = 64;
    let direction= 'ArrowRight';
    let x = -SNAKE_SIZE;
    let y = 0;
    const img2 = new Image();
    img2.src ='images/snakehead.png' ;
    const apple = new Image();
    apple.src = 'images/apple.png';
    
    let xApp;
    let yApp;
    let score = 0;
    let playGame;
    

    function randomNumber( min, max){
        return (Math.floor(Math.random()*(max-min+1))+ min);
    }
   function createApp(){
       xApp = randomNumber(0, canvas.width - SNAKE_SIZE);
       yApp = randomNumber(0, canvas.height - SNAKE_SIZE);
       xApp = xApp - (xApp % SNAKE_SIZE);
       yApp = yApp - (yApp % SNAKE_SIZE);
           
        context.drawImage(apple, xApp, yApp, SNAKE_SIZE, SNAKE_SIZE);
    }
    
    createApp();
    apple.addEventListener('load', ()=>{
        context.drawImage(apple, xApp, yApp, SNAKE_SIZE,SNAKE_SIZE);
    });


   img2.addEventListener('load', ()=>{
      playGame= setInterval(()=>{
            context.clearRect(x, y, SNAKE_SIZE, SNAKE_SIZE);
            switch(direction){
                case 'ArrowLeft':
                    x -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    x += SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    y += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    y -= SNAKE_SIZE;
                    break;

            }
            if(x < 0 || x > canvas.width - SNAKE_SIZE || y < -SNAKE_SIZE || y > canvas.height - SNAKE_SIZE){
                clearInterval(playGame);
                scoreNum.innerHTML = 'Game over';
                gameOver.play();
                            
             }

            if(x === xApp && y === yApp){
                createApp();
                score++;
                eat.play();
                scoreNum.innerHTML = "Score: "+ score;
            
            }
             
            
            context.drawImage(img2, x, y, SNAKE_SIZE, SNAKE_SIZE);
            
       },200);
       
    });
    
    img2.addEventListener('error', ()=>{
        context.fillText('OOPS', 250,250);
    });

    
    document.addEventListener('keydown', event =>{
        switch(event.key){
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                direction =  event.key;

        }
    });
   
}());