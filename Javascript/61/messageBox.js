window.pcs =window.pcs ||{};
window.pcs.messageBox =(function(){
    'use strict';
    
    const offset =40;
    const iniatialTopOffset=-75;
    const initialLeftOffset=-150;
    const width=300;
    const height=150;
    let currentTopOffset=-iniatialTopOffset;
    let currentLeftOffset=initialLeftOffset;
    let numberOfOpenMessages =0;
    let nextZIndex=1;
    

    function show(msg,buttons,callback){
        const messageBoxDiv = document.createElement('div');
        const span =document.createElement('span');
        span.innerHTML=msg;
        messageBoxDiv.appendChild(span);
        const buttonDiv = document.createElement('div');
        const button = document.createElement('button');
    
        
        if(buttons === undefined){
            button.innerHTML='ok';
            buttonDiv.appendChild(button);              
        }
        else{
            for(let i =0; i<buttons.length;i++){
                const newButton= document.createElement('button');   
                newButton.innerHTML=buttons[i];
                buttonDiv.appendChild(newButton);
                newButton.addEventListener('click', ()=>{
                    document.body.removeChild(messageBoxDiv);
                    if(callback !== undefined){
                        return callback(buttons[i]) ;
                    }
                });                         
            }
        }
        
        messageBoxDiv.appendChild(buttonDiv);
        document.body.appendChild(messageBoxDiv);
    
        messageBoxDiv.style.backgroundColor ='lightblue';
        messageBoxDiv.style.position ='absolute';
        messageBoxDiv.style.top ='50%';
        messageBoxDiv.style.left ='50%';
        messageBoxDiv.style.width=`${width}px`;
        messageBoxDiv.style.height =`${height}px`;
        messageBoxDiv.style.marginLeft =`${currentLeftOffset}px`;
        messageBoxDiv.style.marginTop =`${currentTopOffset}px`;
        messageBoxDiv.style.boxSizing='border-box';
        messageBoxDiv.style.border='1px solid black';
        messageBoxDiv.style.padding='4px';
        messageBoxDiv.style.textAlign ='center';
        messageBoxDiv.style.paddingBottom='30 px';

        buttonDiv.style.position='absolute';
        buttonDiv.style.bottom ='0';
        buttonDiv.style.left='0';
        buttonDiv.style.width='100%';
        buttonDiv.style.marginBottom='4px';
    
        span.style.overflow='auto';
        span.style.height='100%';
        span.style.display='inline-block';
        
       
        button.addEventListener('click', ()=>{
            if(--numberOfOpenMessages===0){
                currentLeftOffset=initialLeftOffset;
                currentTopOffset=iniatialTopOffset;

            }
            document.body.removeChild(messageBoxDiv);
        });

        messageBoxDiv.addEventListener('click', ()=>{
            messageBoxDiv.style.zIndex=nextZIndex++;
        });

        currentLeftOffset +=offset;
        currentTopOffset += offset;

        if(parseInt(getComputedStyle(messageBoxDiv).left,10)  +currentLeftOffset + width> window.innerWidth ){
            currentLeftOffset-=(window.innerWidth -width);
        }

        if(parseInt(getComputedStyle(messageBoxDiv).top,10)  +currentTopOffset + height> window.innerHeight){
            currentTopOffset-=(window.innerHeight -height);
        }

        numberOfOpenMessages++;

    }
    return{
        show: show
    };
}());