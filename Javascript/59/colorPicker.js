(function(){
    'use strict';
    const body =document.getElementById('body');
    const changeBackground =document.getElementById('background');
    const changeText =document.getElementById('text');
    const reset =document.getElementById('reset');
    
    reset.addEventListener('click',()=>{
        body.style.backgroundColor=changeBackground.value;
        body.style.color=changeText.value;

    });
    
}
());