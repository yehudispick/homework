window.app = window.app|| {};

window.app.counter = (function (theModule){
    'use strict';
        let counter =0;
        
        theModule.increment=()=>            
            counter+=1;
        theModule.currentCount=()=>
             counter;
            
        return theModule;
        }
    )(window.app.Utils || {});