(function(){
    'use strict';

    function randomColor(){
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
         return ('rgb('+r + ','+ g +','+ b+')');
    }
    
    function textColor (){
        document.getElementById('page').style.color=randomColor();
    }
    
    function bgColor (){
        document.getElementById('page').style.backgroundColor=randomColor();
    }
    let textChanger=setInterval(textColor,1000);
    let backgroundChanger=setInterval(bgColor,1000);
    let running = true;
    
    let button=document.getElementById("startStop");
    button.addEventListener('click',()=>{
        if(!running){
            textChanger=setInterval(textColor,1000);
            backgroundChanger=setInterval(bgColor,1000);
            button.innerHTML='Stop';
            running=true;
        }
        else{
            clearInterval(textChanger);
            clearInterval(backgroundChanger);
            button.innerHTML='Start';
            running=false;
            const now = new Date();
            let newColor={
                backgroundColor: document.body.style.backgroundColor,
                textColor: document.body.style.color,
                time: now.toLocaleString()
                };
            addColor(newColor);            
        }
    });

    let colors =[];
    
    function addColor(newColor){
        let theTable= document.getElementById('colorLog');
        if (!colors.length){
            theTable.deleteRow(1);
        }
        colors.push(newColor);
        
        let row =theTable.insertRow();
        let bgColorCell = row.insertCell();
        let textColorCell = row.insertCell();
        let timeCell = row.insertCell();
        
        bgColorCell.innerHTML= newColor.backgroundColor;
        textColorCell.innerHTML= newColor.textColor;
        timeCell.innerHTML=  newColor.time;
        row.addEventListener('click',()=>{
            document.body.style.backgroundColor = bgColorCell.innerHTML;
            document.body.style.color = textColorCell.innerHTML;
        });

     }
}());